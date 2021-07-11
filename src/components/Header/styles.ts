import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 99px;
  background-color: var(--secondaryBgColor);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: space-between;
  } ;
`;

export const Title = styled.h1`
  color: var(--mainTextColor);
  font-family: "Vecna";
  display: none;
  font-weight: 700;
  font-size: 70px;
  @media (min-width: 768px) {
    display: block;
  } ;
`;
