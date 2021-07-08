import { useAuth } from "../../provider/Auth";
import { Menu, Ul, Li, NavLink } from "./style";

const MenuDashboard = () => {
  const { handleLogout } = useAuth();
  return (
    <Menu>
      <Ul>
        <Li>
          <NavLink exact to="/dashbord" activeStyle={{}}>
            Inicio
          </NavLink>
        </Li>
        <Li>
          <NavLink exact to="/tables" activeStyle={{}}>
            Buscar mesa
          </NavLink>
        </Li>
        <Li>
          <NavLink exact to="/account" activeStyle={{}}>
            Minha conta
          </NavLink>
        </Li>
        <Li>
          <NavLink exact to="/" activeStyle={{}} onClick={() => handleLogout()}>
            Sair
          </NavLink>
        </Li>
      </Ul>
    </Menu>
  );
};
export default MenuDashboard;
