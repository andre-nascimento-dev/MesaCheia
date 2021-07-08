import styled from "styled-components";

export const Container = styled.header`
   width: 100vw;
   height: 60px;
   background-color: var(--highLigthBgColor);
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;

export const Title = styled.h1`
   color: var(--mainTextColor);
   font-family: "Vecna";
   font-weight: bold;
   font-size: 50px;
   @media (max-width: 768px) {
      font-size: 30px;
   };
`;