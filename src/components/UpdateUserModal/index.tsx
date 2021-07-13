import { Container, ContainerButtons } from "./styles";
import Input from "../Input";
import FloatButton from "../FloatButton";
import { MdEmail } from "react-icons/md";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const ModalUpdate = () => {
   const func = () => {}

   return (
      <Container>
         <form>
            <Input
               label="E-mail*"
               register={func}
               name="email"
               error={""}
               placeholder="E-mail"
               icon={MdEmail}
            />
            <ContainerButtons>
               <FloatButton
                  secondary={true}
                  icon={AiOutlineClose}
                  title="Cancelar"
               />
               <FloatButton
                  icon={AiOutlineCheck}
                  title="Atualizar"
               />
            </ContainerButtons>
         </form>
      </Container>
   );
};

export default ModalUpdate;