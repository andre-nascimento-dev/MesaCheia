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
          <a href="#home">
            <AiFillHome/>
            Início
          </a>
        </ListItem>
        <ListItem>
          <a href="#about">
            <BsFillInfoCircleFill/>
            Sobre
          </a>
        </ListItem>
        <ListItem>
          <Link to="/login">
            <RiLoginCircleFill/>
            Entrar
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/register">
            <RiSendPlaneFill/>
            Cadastrar
          </Link>
        </ListItem>
      </List>
    </Container>
  );
};

export default MenuHome;
