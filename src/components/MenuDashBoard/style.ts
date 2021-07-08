import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Menu = styled.nav`
  background-color: var(--secondaryBgColor);
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
`;
export const Ul = styled.ul`
  display: flex;
`;
export const Li = styled.li`
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: 0.2s;
  display: flex;
  height: 60px;
  width: 70px;
  @media only screen and (min-width: 768px) {
    width: max-content;
    margin: 0 20px;
  }
`;
export const NavLink = styled(Link)`
  background-color: var(--secondaryBgColor);
  font-weight: 700;
  font-size: 1rem;
  outline: none;
  border: none;
  color: var(--mainTextColor);
  &.active {
    color: var(--secondaryTextColor);
    border-bottom: 1px solid var(--secondaryTextColor);
  }
  &:focus,
  &:hover {
    color: var(--secondaryTextColor);
    border-bottom: 1px solid var(--secondaryTextColor);
  }
  @media only screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;
