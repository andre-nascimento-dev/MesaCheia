import { useAuth } from "../../provider/Auth";
import { Ul, NavLink } from "./style";

const MenuDashboard = () => {
  const { handleLogout } = useAuth();

  return (
    <nav>
      <Ul>
        <li>
          <NavLink exact to="/dashboard" activeStyle={{}}>
            Início
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/dashboard/tables" activeStyle={{}}>
            Buscar mesa
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/dashboard/profile" activeStyle={{}}>
            Minha conta
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeStyle={{}} onClick={() => handleLogout()}>
            Sair
          </NavLink>
        </li>
      </Ul>
    </nav>
  );
};
export default MenuDashboard;
