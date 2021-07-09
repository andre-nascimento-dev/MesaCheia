import { Container, Title, LinkStyle } from "./styles";

interface LogoProps {
  goToHome?: boolean;
}

const Logo = ({ goToHome = false }: LogoProps) => {
  return (
    <Container>
      {goToHome ? (
        <LinkStyle to="/">
          <Title>MesaCheia</Title>
        </LinkStyle>
      ) : (
        <Title>MesaCheia</Title>
      )}
    </Container>
  );
};

export default Logo;
