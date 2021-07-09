import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const Toast = styled(ToastContainer)`
   .Toastify__toast--default {
      background-color: var(--secondaryButtonBg);
   }
   .Toastify__toast--info {
      background-color: var(--mainTextColor);
   }
   .Toastify__toast--success {
      background-color: #55868C;
   }
   .Toastify__toast--error {
      background-color: var(--highLigthBgColor);
   }
`;