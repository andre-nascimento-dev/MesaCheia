import { ReactNode } from "react";
import { Container } from "./style";

interface FormProps {
  isTransparent?: boolean;
  children: ReactNode;
  onSubmit: (data: object) => void;
  autoComplete?: string;
}

const Form = ({
  isTransparent,
  children,
  onSubmit,
  autoComplete,
}: FormProps) => {
  return (
    <Container
      isTransparent={isTransparent}
      onSubmit={onSubmit}
      autoComplete={autoComplete}
    >
      {children}
    </Container>
  );
};

export default Form;
