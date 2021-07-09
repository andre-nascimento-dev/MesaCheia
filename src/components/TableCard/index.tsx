import { Table } from "../../types/table";
import Avatar from "../Avatar";
import Button from "../Button";
import { Container, Counter, Content } from "./styles";
import Shield from "../../assets/img/Shield.svg";
import { Hidden } from "@material-ui/core";

interface TableCardProps {
  table: Table;
  isJoin?: boolean;
  onClick: () => void;
}

const TableCard = ({ table, isJoin, onClick }: TableCardProps) => {
  return (
    <Container>
      <div>
        <Hidden smUp>
          <Avatar avatarUrl={Shield} size="30" />
        </Hidden>

        <Hidden only="xs">
          <Avatar avatarUrl={Shield} size="50" />
        </Hidden>

        <h2>{table.name}</h2>
        <Counter>
          {table.players.length}/{table.total}
        </Counter>
      </div>

      <div>
        <Content>
          <p>
            <span>Tema:</span> {table.theme}
          </p>
          <p>
            <span>Sistema:</span> {table.system}
          </p>
          <p>
            <span>#{table.userId}</span>
          </p>
        </Content>
        <Hidden smUp>
          <Button onClick={onClick} small>
            {isJoin ? "Ver Mais" : "Entrar"}
          </Button>
        </Hidden>

        <Hidden only="xs">
          <Button onClick={onClick}>{isJoin ? "Ver Mais" : "Entrar"}</Button>
        </Hidden>
      </div>
    </Container>
  );
};

export default TableCard;
