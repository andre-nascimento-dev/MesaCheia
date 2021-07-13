import { Container, ContainerButtons, ContainerIsMaster } from "./styles"
import Form from "../Form";
import Input from "../Input";
import { SiAirtable } from "react-icons/si";
import { GiStabbedNote } from "react-icons/gi";
import { FaDiceD20 } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { BsImageFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import Button from "../Button";

const Modal = () => {
   const func = () => {
      console.log('teste')
   }

   return (
      <Container>
         <Form onSubmit={func} isTransparent>
            <Input
               label="Nome da mesa*"
               register={func}
               name="tableName"
               error={"erro"}
               placeholder="Nome da mesa"
               icon={SiAirtable}
            />
            <Input
               label="Tema da história*"
               register={func}
               name="themeHistory"
               error={"erro"}
               placeholder="Tema da história"
               icon={GiStabbedNote}
            />
            <Input
               label="Sistema*"
               register={func}
               name="system"
               error={"erro"}
               placeholder="Sistema"
               icon={FaDiceD20}
            />
            <Input
               label="Link do servidor Discord*"
               register={func}
               name="discordServer"
               error={"erro"}
               placeholder="Link do servidor Discord"
               icon={SiDiscord}
            />
            <Input
               label="Link de imagem para avatar"
               register={func}
               name="avatarImage"
               error={"erro"}
               placeholder="Link de imagem para avatar"
               icon={BsImageFill}
            />
            <ContainerIsMaster>
              <span>Vaga para mestre?*</span>
              <input
                type="radio"
                id="isMaster"
                value="true"
              />
              <label htmlFor="isMaster">Sim</label>
              <input
                type="radio"
                id="isNotMaster"
                value="false"
              />

              <label htmlFor="isNotMaster">Não</label>
            </ContainerIsMaster>
            <Input
               label="Total de membros*"
               register={func}
               name="members"
               error={"erro"}
               placeholder="Total de membros"
               icon={BsFillPeopleFill}
            />
            <ContainerButtons>
               <Button secondary={true} small={true}>cancelar</Button>
               <Button small={true}>criar</Button>
            </ContainerButtons>
         </Form>
      </Container>
   );
};

export default Modal;