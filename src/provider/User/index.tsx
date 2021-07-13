import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useAuth } from "../Auth";
import jwt_decode from "jwt-decode";
import { mesaCheiaApi } from "../../services";
import { User } from "../../types/user";

interface UserData {
  user: User;
  getUserProfile: () => void;
}

interface UserProviderData {
  children: ReactNode;
}

interface DecodedData {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

const UserContext = createContext<UserData>({} as UserData);

export const UserProvider = ({ children }: UserProviderData) => {
  const { token } = useAuth();

  const [user, setUser] = useState({ username: "" });

  const getUserProfile = () => {
    const decoded: DecodedData = jwt_decode(token);
    mesaCheiaApi
      .get(`users/${decoded.sub}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    if (token) {
      getUserProfile();
    }
    //eslint-disable-next-line
  }, [token]);

  return (
    <UserContext.Provider value={{ user, getUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
