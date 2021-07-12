import { createContext, useContext, useState, ReactNode } from "react";
import { History } from "history";
import { mesaCheiaApi } from "../../services";
import { User } from "../../types/user";
import { showToast } from "../../components/Toast";

interface Login {
  email: string;
  password: string;
}

interface AuthData {
  handleRegister: (data: User, history: History) => void;
  handleLogin: (data: Login, history: History) => void;
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

  const handleLogin = (data: Login, history: History) => {
    mesaCheiaApi
      .post("/login", data)
      .then(({ data }) =>
        localStorage.setItem(
          "@MesaCheia_Token",
          JSON.stringify(data.accessToken)
        )
      )
      .catch(() =>
        showToast({ type: "error", message: "E-mail ou senha incorretos." })
      );
  };

  const handleRegister = (data: User, history: History) => {
    mesaCheiaApi
      .post("/register", data)
      .then(() => {
        showToast({
          type: "success",
          message: "Sucesso ao criar a conta! Faça seu login :D",
        });
        history.push("/login");
      })
      .catch(() =>
        showToast({ type: "error", message: "E-mail já cadastrado." })
      );
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
