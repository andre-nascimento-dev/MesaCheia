import { Container, Title } from "../Header/styles";
import MenuDashboard from "../MenuDashBoard";

interface Props {
  dashboard?: boolean;
  tables?: boolean;
  account?: boolean;
}

const Header = ({
  dashboard = false,
  tables = false,
  account = false,
}: Props) => {
  return (
    <Container>
      <Title>MesaCheia</Title>
      <MenuDashboard dashboard={dashboard} tables={tables} account={account} />
    </Container>
  );
};

export default Header;
