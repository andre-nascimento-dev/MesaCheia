import styled from "styled-components";
import cursorPointer from "../../assets/img/cursor-pointer.png";
import { Menu } from "@material-ui/core";

export const MyMenu = styled(Menu)`
  ul {
    background: var(--secondaryButtonBg);
    color: var(--secondaryTextColor);
    text-align: center;
    width: 150px;
    font-size: 24px;
  }

  li {
    padding: 6px 12px;
    transition: 0.3s;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.14);
    cursor: url(${cursorPointer}), auto;
  }
`;
