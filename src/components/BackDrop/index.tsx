import { ReactNode } from "react";
import Fade from "@material-ui/core/Fade";
import { Container, Wrapper } from "./styles";

interface BackDropProps {
  children: ReactNode;
  isOpened: boolean;
}

const BackDrop = ({ children, isOpened }: BackDropProps) => {
  return (
    <Fade in={isOpened}>
      <Container>
        <Wrapper>{children}</Wrapper>
      </Container>
    </Fade>
  );
};

export default BackDrop;
