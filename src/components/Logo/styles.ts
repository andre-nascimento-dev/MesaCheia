import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100vw;
  padding: 8px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const LinkStyle = styled(Link)`
  font-family: "Vecna";
`;

export const Title = styled.h1`
  color: var(--mainButtonBg);
  font-family: "Vecna";
  font-weight: bold;
  font-size: 50px;
  @media (max-width: 768px) {
    font-size: 30px;
  } ;
`;
