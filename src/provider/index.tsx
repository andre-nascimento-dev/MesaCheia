import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { TablesProvider } from "./Tables";
import { UserProvider } from "./User";

interface ProviderData {
  children: ReactNode;
}
const Provider = ({ children }: ProviderData) => {
  return (
    <AuthProvider>
      <UserProvider>
        <TablesProvider>{children}</TablesProvider>
      </UserProvider>
    </AuthProvider>
  );
};
export default Provider;
