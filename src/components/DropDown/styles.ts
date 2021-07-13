import styled from "styled-components";
import cursorPointer from "../../assets/img/cursor-pointer.png";
import { Menu } from "@material-ui/core";

export const MenuStyled = styled(Menu)`
  ul {
    background: var(--secondaryButtonBg);
    color: var(--secondaryTextColor);
    text-align: center;
  }

  li {
    padding: 0.5rem 1.5rem;
    cursor: url(${cursorPointer}), auto;
    transition: all 300ms ease-in-out;

    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.14);
      outline: none;
    }
  }
`;
