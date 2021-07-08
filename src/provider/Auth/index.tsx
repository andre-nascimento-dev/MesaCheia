import { User } from "../../types/user";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { mesaCheiaApi } from "../../services";

interface Login {
  email: string;
  password: string;
}

interface AuthData {
  handleRegister: (data: User) => void;
  handleLogin: (data: Login) => void;
  handleLogout: () => void;
  token: string;
}

interface AuthProviderData {
  children: ReactNode;
}

const AuthContext = createContext<AuthData>({} as AuthData);

export const AuthProvider = ({ children }: AuthProviderData) => {

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@MesaCheia_Token") || "null")
  );

  const handleLogin = (data: Login) => {
    mesaCheiaApi
      .post("/login", data)
      .then(({ data }) => setToken(data.accessToken));
  };

  const handleRegister = (data: User) => {
    mesaCheiaApi.post("/register", data);
  };

  const handleLogout = () => {
    setToken("");
  };

  useEffect(() => {
    localStorage.setItem("@MesaCheia_Token", JSON.stringify(token));
  }, [token]);
  
  return (
    <AuthContext.Provider
      value={{ token, handleLogin, handleRegister, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
