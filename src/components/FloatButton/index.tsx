import { IconType } from "react-icons/lib";
import { Button } from "./style";

interface FloatButtonProps {
  secondary?: boolean;
  icon: IconType;
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const FloatButton = ({
  secondary = false,
  icon: Icon,
  title,
  onClick,
  type,
}: FloatButtonProps) => {
  return (
    <Button secondary={secondary} title={title} onClick={onClick} type={type}>
      <Icon />
    </Button>
  );
};

export default FloatButton;
