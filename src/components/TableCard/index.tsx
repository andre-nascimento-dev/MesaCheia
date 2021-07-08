import { Table } from "../../types/table";
import Button from "../Button";
import { Container, Counter, Content } from "./styles";

interface TableCardProps {
  table: Table;
  isJoin: boolean;
  onClick: () => void;
}

const TableCard = ({ table, isJoin, onClick }: TableCardProps) => {
  return (
    <Container>
      <div>
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
            <span>{table.userId}</span>
          </p>
        </Content>
        <Button onClick={onClick}>{isJoin ? "Ver Mais" : "Ver Mais"}</Button>
      </div>
    </Container>
  );
};

export default TableCard;
