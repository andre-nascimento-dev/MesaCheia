import { ReactNode } from "react";
import { Container, Wrapper } from "./Styles";

interface BackDropProps {
  children: ReactNode;
  isOponed: boolean;
}

const BackDrop = ({ children, isOponed }: BackDropProps) => {
  return (
    <Container isOponed={isOponed}>
      {isOponed && <Wrapper>{children}</Wrapper>}
    </Container>
  );
};

export default BackDrop;
