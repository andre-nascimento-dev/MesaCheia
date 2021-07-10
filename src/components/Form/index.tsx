import { Container } from "./style";
import { ReactNode } from "react";

interface FormProps {
  isTransparent?: boolean;
  children: ReactNode;
  autoComplete?: string;
  onSubmit: () => void;
}

const Form = ({
  isTransparent,
  children,
  autoComplete,
  onSubmit,
}: FormProps) => {
  return (
    <Container
      isTransparent={isTransparent}
      autoComplete={autoComplete}
      onSubmit={onSubmit}
    >
      {children}
    </Container>
  );
};

export default Form;
