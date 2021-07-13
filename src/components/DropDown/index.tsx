import { ReactNode } from "react";
import { MenuStyled } from "./styles";

interface DropDownProps {
  children: ReactNode;
  open: boolean;
  anchorEl: Element | null;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
}

const DropDown = ({ children, open, anchorEl, onClose }: DropDownProps) => {
  return (
    <MenuStyled open={open} anchorEl={anchorEl} onClose={onClose}>
      {children}
    </MenuStyled>
  );
};

export default DropDown;
