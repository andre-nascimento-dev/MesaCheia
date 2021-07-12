import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import cursorPointer from "../../assets/img/cursor-pointer.png";

export const Toast = styled(ToastContainer)`
  .Toastify__toast--default {
    background-color: var(--secondaryButtonBg);
    cursor: url(${cursorPointer}), auto;
  }

  .Toastify__toast--info {
    background-color: var(--mainTextColor);
    cursor: url(${cursorPointer}), auto;
  }

  .Toastify__toast--success {
    background-color: #55868c;
    cursor: url(${cursorPointer}), auto;
  }

  .Toastify__toast--error {
    background-color: var(--highLigthBgColor);
    cursor: url(${cursorPointer}), auto;
  }

  .Toastify__close-button {
    cursor: url(${cursorPointer}), auto;
  }
`;
