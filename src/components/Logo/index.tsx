import { Container, Title, LinkStyle } from "./styles";

interface LogoProps {
   isHome?: boolean;
}

const Logo = ({isHome = true}: LogoProps) => {

   return (
      <Container>

         {isHome ? (
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