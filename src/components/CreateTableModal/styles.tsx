import styled from "styled-components";

export const ContainerButtons = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   width: 100%;
`;

export const ContainerNeedMaster = styled.div`
   display: flex;
   flex-direction: column;
   color: var(--secondaryTextColor);
   margin-bottom: 16px;
   
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