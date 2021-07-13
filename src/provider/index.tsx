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
      <TablesProvider>
        <UserProvider>{children}</UserProvider>
      </TablesProvider>
    </AuthProvider>
  );
};
export default Provider;
