import { User } from "../../types/user";
import {
  createContext,
  useContext,
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
  const token = localStorage.getItem("@MesaCheia_Token") || "";

  const [auth, setAuth] = useState<string>(token);

  const handleLogin = (data: Login) => {
    mesaCheiaApi
      .post("/login", data)
      .then(({ data }) =>
        localStorage.setItem(
          "@MesaCheia_Token",
          JSON.stringify(data.accessToken)
        )
      );
  };

  const handleRegister = (data: User) => {
    mesaCheiaApi.post("/register", data);
  };

  const handleLogout = () => {
    localStorage.clear();
    setAuth("");
  };

  return (
    <AuthContext.Provider
      value={{ token: auth, handleLogin, handleRegister, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
