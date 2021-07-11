import styled from "styled-components";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import titleBg from "../../assets/img/title-bg.png";
import Logo from "../../components/Logo";

export const ContainerDashboard = styled.div`
   @media  only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column-reverse;
   };
`;

export const Container = styled.main`
   width: 100vw;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: calc(100vh - 99px);
`;

export const DashboardLogo = styled(Logo)`
   width: 100%;
   @media only screen and (min-width: 768px) {
      h1 {
         display: none;
      }
   };
`;

export const ContainerLogo = styled.div`
   width: 100%;
`;

export const TitleMessage = styled.h2`
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 700;
   font-size: 48px;
   height: 140px;
   width: max-content;
   margin: 0 auto;
   padding: 0 1.5rem;
   background: url(${titleBg}) no-repeat center;
   background-repeat: repeat-x;
   background-size: cover;
   @media only screen and (max-width: 768px) {
      font-size: 18px;
      height: 50px;
   };
`;

export const ContainerButtons = styled.div`
   display: flex;
   justify-content: space-between;
   width: 95%

`;

export const Icon = styled(BsFillPlusCircleFill)`
   margin-right: 6px;
   @media only screen and (max-width: 768px) {
         color: var(--mainButtonBg);
   };
`;

export const MobileIcon = styled(AiOutlinePlus)`
   color: var(--mainTextColor);
`;

export const ContainerCards = styled.ul`
   display: flex;
   align-self: center;
   flex-direction: row;
   justify-content: space-evenly;
   align-items: center;
   flex-wrap: wrap;
   width: 80%;
   height: 300px;
   overflow: auto;
   ::-webkit-scrollbar {
      width: 10px;
   };
   ::-webkit-scrollbar-track {
      background: var(--mainButtonBg); 
   };
   ::-webkit-scrollbar-thumb {
      background: var(--secondaryButtonBg);
   };
   ::-webkit-scrollbar-thumb:hover {
      background: var(--secondaryBgColor); 
   };
   @media only screen and (max-width: 768px) {
      width: 100%;
      ::-webkit-scrollbar {
         width: 10px;
      };
      ::-webkit-scrollbar-track {
         background: var(--mainBgColor); 
      };
      ::-webkit-scrollbar-thumb {
         background: var(--mainBgColor);
      };
   };
`;

export const Item = styled.li`
   margin: 10px 0;
`;