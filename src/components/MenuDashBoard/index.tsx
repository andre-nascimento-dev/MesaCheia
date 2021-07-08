import { useHistory } from "react-router-dom";
import { useAuth } from "../../provider/Auth";
import { Menu, Ul, Li, Button } from "./style";

interface Props {
  dashboard?: boolean;
  tables?: boolean;
  account?: boolean;
}

const MenuDashboard = ({
  dashboard = false,
  tables = false,
  account = false,
}: Props) => {
  const history = useHistory();
  const { handleLogout } = useAuth();
  return (
    <Menu>
      <Ul>
        <Li onClick={() => history.push("dashboard")}>
          <Button active={dashboard}>Inicio</Button>
        </Li>
        <Li onClick={() => history.push("tables")}>
          <Button active={tables}>Buscar mesa</Button>
        </Li>
        <Li onClick={() => history.push("account")}>
          <Button active={account}>Minha conta</Button>
        </Li>
        <Li
          onClick={() => {
            handleLogout();
            history.push("/");
          }}
        >
          <Button active={false}>Sair</Button>
        </Li>
      </Ul>
    </Menu>
  );
};
export default MenuDashboard;
