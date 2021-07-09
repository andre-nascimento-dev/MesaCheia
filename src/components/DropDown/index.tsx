import { ReactNode } from "react";
import { MyMenu } from "./styles";

interface DropDwonProps {
  children: ReactNode;
  open: boolean;
}

const DropDown = ({ children, open }: DropDwonProps) => {
  return <>{open && <MyMenu open={open}>{children}</MyMenu>}</>;
};

export default DropDown;
