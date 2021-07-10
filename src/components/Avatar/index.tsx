import { MyAvatar, Icon, Star } from "./styles";
import Star1 from "../../assets/img/Star1.svg";

interface AvatarProps {
  avatarUrl: string;
  size: string;
  isMaster?: boolean;
  isSelectable?: boolean;
}
const Avatar = ({ avatarUrl, size, isMaster, isSelectable }: AvatarProps) => {
  return (
    <MyAvatar size={size}>
      <Icon
        size={size}
        src={avatarUrl}
        alt={avatarUrl}
        isSelectable={isSelectable}
      />
      {isMaster && <Star src={Star1} alt={Star1} />}
    </MyAvatar>
  );
};

export default Avatar;
