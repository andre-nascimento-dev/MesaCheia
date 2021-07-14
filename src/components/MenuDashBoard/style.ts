import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Ul = styled.ul`
background-color: var(--secondaryBgColor);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 767px) {
    height: 40px;
  }
`;

export const NavLink = styled(Link)`
  font-weight: 700;
  font-size: 1rem;
  outline: none;
  border-bottom: 1px solid transparent;
  color: var(--mainTextColor);
 
  transition: all 300ms ease-in-out;

  &.active {
    color: var(--secondaryTextColor);
    border-bottom: 1px solid var(--secondaryTextColor);
  }

  &:focus,
  &:hover {
    color: var(--secondaryTextColor);
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
   
  }
`;
