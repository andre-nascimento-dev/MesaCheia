import { Container, ListItem, List } from "./styles";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { RiLoginCircleFill, RiSendPlaneFill } from "react-icons/ri";
import { BsFillInfoCircleFill } from "react-icons/bs";

const MenuHome = () => {
  return (
    <Container>
      <List>
        <ListItem>
          <Link to="/">
            <AiFillHome size={20} />
            <p>Início</p>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/about">
            <BsFillInfoCircleFill size={20} />
            <p>Sobre</p>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/login">
            <RiLoginCircleFill size={20} />
            <p>Entrar</p>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/register">
            <RiSendPlaneFill size={20} />
            <p>Cadastrar</p>
          </Link>
        </ListItem>
      </List>
    </Container>
  );
};

export default MenuHome;
