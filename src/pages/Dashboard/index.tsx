import { Container, TitleMessage, ContainerButtons, Icon, ContainerCards, Item, ContainerDashboard, MobileIcon } from "./styles";
import Header from "../../components/Header";
import TabMenu from "../../components/TabMenu";
import TableCard from "../../components/TableCard";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import FloatButton from "../../components/FloatButton";
import Hidden from '@material-ui/core/Hidden';
import { useUser } from "../../provider/User";
import { useEffect } from "react";
import { User } from "../../types/user";


const Dashboard = () => {

   const {user, getUserProfile} = useUser();

   useEffect(() => {getUserProfile()}, []);

   const func = () => {

   };

   const table = {
      userId: 15,
      name: "PsycoKillers",
      avatar: "../assets/img/image 12.svg",
      system: "Call of Cuthulu",
      theme: "Investigação",
      discord: "https://discord.gg/G6WWTHqVHB",
      needMaster: false,
      masterId: 81,
      total: 8,
      isFull: false,
      players: [
        {
          username: "Pot4tor",
          avatar: "../assets/img/image 12.svg",
          isMaster: true,
          playerId: 81,
        },
        {
          username: "Hiro",
          avatar: "../assets/img/image 12.svg",
          isMaster: false,
          playerId: 15,
        },
        {
          username: "Black",
          avatar: "../assets/img/image 12.svg",
          isMaster: false,
          playerId: 10,
        },
      ],
    };
    const onclick = () => {
      console.log("entrou");
    };
    console.log(user);

   return (
      <ContainerDashboard>
         <Header/>
         <Container>
            <Hidden smUp><Logo/></Hidden>
            <TitleMessage>{`Olá, aventureiro ${user?.username}!`}</TitleMessage>
            <ContainerButtons>
               <TabMenu
                  textFirstBtn="Mesas que participo"
                  textSecondBtn="Mesas que mestro"
                  isMaster={user.isMaster ?? false}
                  isActived
               />
               <Hidden only="xs"><Button hasIcon={true} biggerFont={true}><Icon/>criar mesa</Button></Hidden>
               <Hidden smUp><FloatButton icon={MobileIcon} title="criar mesa"/></Hidden>
            </ContainerButtons>
            <ContainerCards>
               <Item>
               <TableCard
                  table={table}
                  isJoin
                  onClick={func}
               />
               </Item>
               <Item>
               <TableCard
                  table={table}
                  isJoin
                  onClick={func}
               />
               </Item>
               <Item>
               <TableCard
                  table={table}
                  isJoin
                  onClick={func}
               />
               </Item>
               <Item>
               <TableCard
                  table={table}
                  isJoin
                  onClick={func}
               />
               </Item>
            </ContainerCards>
         </Container>
      </ContainerDashboard>
   );
};

export default Dashboard;