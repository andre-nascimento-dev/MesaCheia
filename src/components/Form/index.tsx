import { Container } from "./style";

interface FormsProps {
  isTransparent?: boolean;
  children: JSX.Element;
}

const Forms = ({ isTransparent, children }: FormsProps) => {
  return <Container isTransparent={isTransparent}>{children}</Container>;
};

export default Forms;
