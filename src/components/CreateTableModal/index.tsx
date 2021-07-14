import * as yup from "yup";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SiAirtable } from "react-icons/si";
import { GiStabbedNote } from "react-icons/gi";
import { FaDiceD20 } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { BsImageFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { ContainerButtons, ContainerNeedMaster } from "./styles";
import { useUser } from "../../provider/User";
import { useTables } from "../../provider/Tables";
import Form from "../Form";
import Input from "../Input";
import Button from "../Button";
import avatarImg from "../Avatar/avatar.json";

interface Props {
   open: Dispatch<SetStateAction<boolean>>;
}

interface FormValues {
  name: string;
  avatar: string;
  system: string;
  theme: string;
  discord: string;
  needMaster: string;
  total: number;
}

const CreateTableModal = ({open}: Props) => {
  const { user } = useUser();
  const { createTable } = useTables();
  
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    theme: yup.string().required("Campo obrigatório"),
    system: yup.string().required("Campo obrigatório"),
    discord: yup.string().url("Link inválido").required("Campo obrigatório"),
    avatar: yup.string().url("Link inválido"),
    needMaster: yup.string().nullable().required("Campo obrigatório"),
    total: yup
      .number()
      .typeError("Digite um número")
      .required("Campo obrigatório")
      .min(2, "No mínimo 2 membros"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({
    name,
    theme,
    system,
    discord,
    avatar,
    needMaster,
    total,
  }: FormValues) => {
    const avatarUrl = avatar !== "" ? avatar : avatarImg.tableDefault;
    const needMasterBoolean = needMaster === "true" ? true : false;
    const tableData = {
      name,
      theme,
      system,
      discord,
      avatar: avatarUrl,
      needMaster: needMasterBoolean,
      total,
      userId: Number(user.id),
      masterId: needMasterBoolean ? null : Number(user.id),
      isFull: false,
      players: [
        {
          username: user.username,
          avatar: user.avatar,
          isMaster: !needMasterBoolean,
          playerId: Number(user.id),
        },
      ],
    };
    createTable(tableData);
    open(false);
    reset();
  };

  const handleCancel = () => {
     open(false);
     reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Input
        label="Nome da mesa*"
        register={register}
        name="name"
        error={errors.name?.message}
        placeholder="Nome da mesa"
        icon={SiAirtable}
      />
      <Input
        label="Tema da história*"
        register={register}
        name="theme"
        error={errors.theme?.message}
        placeholder="Tema da história"
        icon={GiStabbedNote}
      />
      <Input
        label="Sistema*"
        register={register}
        name="system"
        error={errors.system?.message}
        placeholder="Sistema"
        icon={FaDiceD20}
      />
      <Input
        label="Link do servidor Discord*"
        register={register}
        name="discord"
        error={errors.discord?.message}
        placeholder="Link do servidor Discord"
        icon={SiDiscord}
      />
      <Input
        label="Link de imagem para avatar"
        register={register}
        name="avatar"
        error={errors.avatar?.message}
        placeholder="Link de imagem para avatar"
        icon={BsImageFill}
      />
      <ContainerNeedMaster>
        <div>
          <span>Vaga para mestre?*</span>
          <input
            type="radio"
            id="needMaster"
            value="true"
            {...register("needMaster")}
          />
          <label htmlFor="needMaster">Sim</label>
          <input
            type="radio"
            id="DontNeedMaster"
            value="false"
            {...register("needMaster")}
          />
          <label htmlFor="DontNeedMaster">Não</label>
        </div>
        <div>{errors.needMaster?.message}</div>
      </ContainerNeedMaster>
      <Input
        type="number"
        label="Total de membros*"
        register={register}
        name="total"
        error={errors.total?.message}
        placeholder="Total de membros"
        icon={BsFillPeopleFill}
      />
      <ContainerButtons>
        <Button secondary small type="reset" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button small type="submit">
          Criar
        </Button>
      </ContainerButtons>
    </Form>
  );
};

export default CreateTableModal;
