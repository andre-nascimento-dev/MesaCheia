import { ReactNode } from "react";
import { ButtonStyled } from "./style";

interface ButtonProps {
  children: ReactNode;
  secondary?: boolean;
  small?: boolean;
  biggerFont?: boolean;
  hasIcon?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  secondary = false,
  small = false,
  biggerFont = false,
  hasIcon = false,
  onClick,
  disabled = false,
  type
}: ButtonProps) => {
  return (
    <ButtonStyled
      secondary={secondary}
      small={small}
      biggerFont={biggerFont}
      hasIcon={hasIcon}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
