import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import jwt_decode from "jwt-decode";
import { mesaCheiaApi } from "../../services";
import { User } from "../../types/user";
import { Table, Player } from "../../types/table";
import { useAuth } from "../Auth";

interface UserData {
  user: User;
  joinedTables: Table[];
  joinedAsMaster: Table[];
  getUserProfile: () => void;
  userTables: () => void;
  masterTables: () => void;
  loading: boolean;
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

  const [user, setUser] = useState({});
  const [id, setId] = useState<string>("");
  const [joinedTables, setJoinedTables] = useState([] as Table[]);
  const [joinedAsMaster, setJoinedAsMaster] = useState([] as Table[]);
  const [loading, setLoading] = useState(true);

  const getUserProfile = () => {
    const decoded: DecodedData = jwt_decode(token);
    setId(decoded.sub);
    mesaCheiaApi
      .get(`users/${decoded.sub}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  };

  const userTables = () => {
    setLoading(true);
    mesaCheiaApi
      .get("/tables", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setJoinedTables(
          response.data.filter((table: Table) =>
            table.players.find(
              (player: Player) => player.playerId === Number(id)
            )
          )
        );
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const masterTables = () => {
    setLoading(true);
    mesaCheiaApi
      .get(`/tables?masterId=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setJoinedAsMaster(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (token) {
      getUserProfile();
      userTables();
    }
    //eslint-disable-next-line
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        user,
        getUserProfile,
        joinedTables,
        userTables,
        joinedAsMaster,
        masterTables,
        loading
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
