import { Link } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import ratImg from "../../assets/img/rat-404.png";
import { Container, Desktop, Box, Mobile } from "./style";

const NotFound = () => {
  return (
    <Container>
      <Hidden only="xs">
        <Desktop>
          <img src={ratImg} alt="Personagem de MouseHunt" />
          <Box>
            <div>
              Aqui não há nada que você procura, apenas minhas frutas! <br />
              <Link to="/">Volte para donde veio</Link>
            </div>
            <p>404</p>
          </Box>
        </Desktop>
      </Hidden>

      <Hidden smUp>
        <Mobile>
          <div>
            Aqui não há nada que você procura, apenas minhas frutas! <br />
            <Link to="/">Volte para donde veio</Link>
          </div>
          <img src={ratImg} alt="Personagem de MouseHunt" />
          <p>404</p>
        </Mobile>
      </Hidden>
    </Container>
  );
};

export default NotFound;
