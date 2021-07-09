import { Button } from "./style";

interface Props {
  onClickFirstBtn?: () => void;
  textFirstBtn: string;
  onClickSecondBtn?: () => void;
  textSecondBtn: string;
  isMaster: boolean;
  isActived: boolean;
}

const TabMenu = ({
  textFirstBtn,
  onClickFirstBtn = () => {},
  textSecondBtn,
  onClickSecondBtn = () => {},
  isMaster = false,
  isActived = false,
}: Props) => {
  return (
    <nav>
      <Button isActived={isActived} onClick={() => onClickFirstBtn()}>
        {textFirstBtn}
      </Button>
      <Button
        isActived={!isActived}
        disabled={!isMaster}
        onClick={() => onClickSecondBtn()}
      >
        {textSecondBtn}
      </Button>
    </nav>
  );
};
export default TabMenu;
