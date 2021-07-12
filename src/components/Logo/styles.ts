import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  padding: 8px;
  @media only screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const LinkStyle = styled(Link)`
  font-family: "Vecna";
  outline: none;
`;

export const Title = styled.h1`
  color: var(--mainButtonBg);
  font-family: "Vecna";
  font-weight: bold;
  font-size: 50px;

`;
