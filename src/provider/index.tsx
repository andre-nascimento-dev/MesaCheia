import { ProviderData } from "../types";
import { AuthProvider } from "./Auth";
const Provider = ({ children }: ProviderData) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default Provider;
