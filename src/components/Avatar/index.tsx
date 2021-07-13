import { MyAvatar, Icon, Star } from "./styles";
import star from "../../assets/img/star.svg";

interface AvatarProps {
  url?: string;
  alt: "Avatar do usuário" | "Avatar da mesa";
  size: string;
  isMaster?: boolean;
  isSelectable?: boolean;
  isSelected?: boolean;
}
const Avatar = ({
  url,
  alt,
  size,
  isMaster,
  isSelectable,
  isSelected,
}: AvatarProps) => {
  return (
    <MyAvatar size={size}>
      <Icon
        size={size}
        src={url}
        alt={alt}
        isSelectable={isSelectable}
        isSelected={isSelected}
      />
      {isMaster && <Star src={star} alt="Estrela do mestre" size={size} />}
    </MyAvatar>
  );
};

export default Avatar;
