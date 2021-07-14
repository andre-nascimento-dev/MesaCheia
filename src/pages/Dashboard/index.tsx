import { useState, useEffect } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Container,
  TitleMessage,
  ContainerButtons,
  ContainerCards,
  ContainerDashboard,
} from "./styles";
import { useUser } from "../../provider/User";
import Header from "../../components/Header";
import TabMenu from "../../components/TabMenu";
import TableCard from "../../components/TableCard";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import FloatButton from "../../components/FloatButton";
import Hidden from "@material-ui/core/Hidden";
import MenuDashboard from "../../components/MenuDashBoard";
import Loader from "../../components/Loader";

const Dashboard = () => {
  const {
    user,
    userTables,
    masterTables,
    joinedTables,
    joinedAsMaster,
    loading,
  } = useUser();
  const [showJoinedTables, setShowJoinedTables] = useState(true);

  const displayJoinedTables = () => {
    setShowJoinedTables(true);
    userTables();
  };

  const displayMasterTables = () => {
    setShowJoinedTables(false);
    masterTables();
  };

  const tableDetails = () => {
    console.log("detalhes");
  };

  useEffect(() => {
    displayJoinedTables()
  }, []);

  return (
    <ContainerDashboard>
      <Hidden only="xs">
        <Header />
      </Hidden>
      <Hidden smUp>
        <Logo />
      </Hidden>
      <TitleMessage>{`Olá, aventureiro(a) ${user?.username}!`}</TitleMessage>
      <Container>
        <ContainerButtons>
          <TabMenu
            textFirstBtn="Mesas que participo"
            textSecondBtn="Mesas que mestro"
            isMaster={user.isMaster ?? false}
            isActived
            onClickFirstBtn={displayJoinedTables}
            onClickSecondBtn={displayMasterTables}
          />
          <Hidden only="xs">
            <Button hasIcon={true} biggerFont={true}>
              <BsFillPlusCircleFill />
              Criar Mesa
            </Button>
          </Hidden>
          <Hidden smUp>
            <FloatButton icon={AiOutlinePlus} title="Criar Mesa" />
          </Hidden>
        </ContainerButtons>
        <ContainerCards>
          {loading ? (
            <Loader />
          ) : showJoinedTables ? (
            joinedTables.map((table) => (
              <li key={table.id}>
                <TableCard table={table} isJoin onClick={tableDetails} />
              </li>
            ))
          ) : (
            joinedAsMaster.map((table) => (
              <li key={table.id}>
                <TableCard table={table} isJoin onClick={tableDetails} />
              </li>
            ))
          )}
        </ContainerCards>
      </Container>
      <Hidden smUp>
        <MenuDashboard />
      </Hidden>
    </ContainerDashboard>
  );
};

export default Dashboard;
