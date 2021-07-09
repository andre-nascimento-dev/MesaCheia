import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from "./styles";

interface ToastProps {
   type: string;
   message: string;
};

export const showToast = ({ type, message }: ToastProps) => {
   switch (type) {
      case 'success':
         toast.success(`🥳 ${message}`);
         break;
      case 'error':
         toast.error(`❌ ${message}`);
         break;
      case 'info':
         toast.info(`📖 ${message}`)
         break
      default:
         toast(`🗡 ${message}`);
   }
};

export const ToastJSX = () => {
   return <Toast/>
};