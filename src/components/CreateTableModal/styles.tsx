import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 100vw;
   max-width: 1400px;
   padding: 0 12px 24px;
   margin: 0 auto;
`;

export const ContainerButtons = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   width: 100%;
`;

export const ContainerIsMaster = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   color: var(--secondaryTextColor);
   margin-bottom: 16px;
   width: 100%;

   div:first-child {
      display: flex;
      gap: 6px;
      align-items: center;
   }

   span {
      font-weight: bold;
   }

   div:last-child {
      height: 20px;
      color: #c53030;
      text-shadow: 2px 2px 2px var(--mainTextColor);
      font-weight: bold;
   }
`;