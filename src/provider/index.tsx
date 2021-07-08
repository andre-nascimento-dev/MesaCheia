import { ReactNode } from "react";
import { AuthProvider } from "./Auth";

interface ProviderData {
  children: ReactNode;
}
const Provider = ({ children }: ProviderData) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default Provider;
