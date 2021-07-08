import { ReactNode } from "react";
import { MyMenu } from "./Styles";

interface DropDwonProps {
  children: ReactNode;
  open: boolean;
}

const DropDwon = ({ children, open }: DropDwonProps) => {
  return <>{open && <MyMenu open={open}>{children}</MyMenu>}</>;
};

export default DropDwon;
