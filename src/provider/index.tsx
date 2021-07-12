import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { UserProvider } from "./User";

interface ProviderData {
  children: ReactNode;
}
const Provider = ({ children }: ProviderData) => {
  return (
    <AuthProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </AuthProvider>
  );
};
export default Provider;
