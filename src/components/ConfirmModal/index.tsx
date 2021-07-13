import { Container, ContainerButtons } from "./styles";
import FloatButton from "../FloatButton";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const ModalConfirm = () => {

   return (
      <Container>
         <span>Você quer mesmo fazer isso?</span>
         <ContainerButtons>
            <FloatButton
               secondary={true}
               icon={AiOutlineClose}
               title="Não"
            />
            <FloatButton
               icon={AiOutlineCheck}
               title="Sim"
            />
         </ContainerButtons>
      </Container>
   );
};

export default ModalConfirm;