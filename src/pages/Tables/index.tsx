import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Hidden } from "@material-ui/core";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { RiSendPlane2Fill } from "react-icons/ri";
import { IoMdRefresh } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { Table } from "../../types/table";
import { useUser } from "../../provider/User";
import { useTables } from "../../provider/Tables";
import * as yup from "yup";
import Header from "../../components/Header";
import TabMenu from "../../components/TabMenu";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TableCard from "../../components/TableCard";
import FloatButton from "../../components/FloatButton";
import Logo from "../../components/Logo";
import Loader from "../../components/Loader";
import BackDrop from "../../components/BackDrop";
import MenuDashboard from "../../components/MenuDashBoard";
import NothingHere from "../../components/NothingHere";
import {
  BoxTables,
  Form,
  SelectContainer,
  ListTables,
  DashBoardTables,
  Container,
  ImgContainer,
  WrapperModal,
} from "./styles";

interface FormValues {
  search: string;
  category: string;
}

const Tables = () => {
  const [showNeedPlayersTables, setShowNeedPlayersTables] = useState(true);
  const [openConfirm, setOpenConfirm] = useState(false);

  const schema = yup.object().shape({
    search: yup.string().required("Campo Obrigatório"),
    category: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    searchTables,
    joinTable,
    listTables,
    loading,
    getNeedPlayersTables,
    getNeedMasterTables,
    getActualTable,
    actualTable,
  } = useTables();
  const { user } = useUser();

  const displayNeedPlayersTables = () => {
    getNeedPlayersTables();
    setShowNeedPlayersTables(true);
    reset();
  };

  const displayNeedMasterTables = () => {
    getNeedMasterTables();
    setShowNeedPlayersTables(false);
    reset();
  };

  const handleForm = (data: FormValues) => {
    searchTables(data, !showNeedPlayersTables);
  };

  const handleJoin = (id: number) => {
    getActualTable(id);
    setOpenConfirm(true);
  };

  const handleConfirm = () => {
    joinTable(actualTable, user, !showNeedPlayersTables);
    setOpenConfirm(false);
  };

  useEffect(() => {
    displayNeedPlayersTables();
  }, []);

  return (
    <>
      <DashBoardTables>
        <Hidden only="xs">
          <Header />
        </Hidden>
        <Hidden smUp>
          <Logo />
        </Hidden>
        <Container>
          <TabMenu
            isActived={showNeedPlayersTables}
            isMaster={user.isMaster ?? false}
            textFirstBtn={"Vaga para participar"}
            textSecondBtn={"Vaga para mestrar"}
            onClickFirstBtn={displayNeedPlayersTables}
            onClickSecondBtn={displayNeedMasterTables}
          />
          <Form onSubmit={handleSubmit(handleForm)}>
            <Input
              label={"Digite para pesquisar*"}
              placeholder={"Pesquisar"}
              register={register}
              icon={BiSearch}
              name={"search"}
              error={errors.search?.message}
            />
            <div>
              <SelectContainer>
                Buscar por*
                <select {...register("category")} name="category">
                  <option value="name" defaultValue="name">
                    Nome
                  </option>
                  <option value="theme">Tema</option>
                  <option value="system">Sistema</option>
                  <option value="id">ID</option>
                </select>
              </SelectContainer>

              <Hidden only="xs">
                <Button type={"submit"}>
                  <p>Pesquisar</p>
                </Button>
              </Hidden>
              <Hidden smUp>
                <FloatButton
                  type={"submit"}
                  icon={RiSendPlane2Fill}
                  title={"Pesquisar"}
                ></FloatButton>
              </Hidden>
              <FloatButton
                title="Ver todas"
                type="reset"
                icon={IoMdRefresh}
                secondary
                onClick={
                  showNeedPlayersTables
                    ? displayNeedPlayersTables
                    : displayNeedMasterTables
                }
              />
            </div>
          </Form>
          <BoxTables>
            <ListTables>
              {loading ? (
                <Loader />
              ) : !!listTables[0] ? (
                listTables.map((table: Table) => (
                  <li key={table.id}>
                    <TableCard
                      table={table}
                      onClick={() => handleJoin(Number(table.id))}
                    />
                  </li>
                ))
              ) : (
                <NothingHere />
              )}
            </ListTables>

            <ImgContainer />
          </BoxTables>
        </Container>
        <Hidden smUp>
          <MenuDashboard />
        </Hidden>
      </DashBoardTables>

      <BackDrop isOpened={openConfirm}>
        <WrapperModal>
          <p>{`Quer mesmo entrar nesta mesa como ${
            showNeedPlayersTables ? "jogador" : "mestre"
          }?`}</p>
          <div>
            <FloatButton
              secondary
              title="Não"
              icon={AiOutlineClose}
              type="button"
              onClick={() => setOpenConfirm(false)}
            />
            <FloatButton
              title="Sim"
              icon={AiOutlineCheck}
              type="button"
              onClick={handleConfirm}
            />
          </div>
        </WrapperModal>
      </BackDrop>
    </>
  );
};

export default Tables;
