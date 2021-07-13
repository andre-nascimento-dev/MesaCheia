import styled from "styled-components";

export const Container = styled.div`
   width: 320px;
   height: 180px;
   background-color: var(--secondaryBgColor);
   border-radius: 24px;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   span {
      font-weight: bold;
      color: #fff;
      font-size: 20px;
   }
`;

export const ContainerButtons = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-evenly;
`;