import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTables } from "../../provider/Tables";
import { Table } from "../../types/table";

import { useUser } from "../../provider/User";

import Header from "../../components/Header";
import TabMenu from "../../components/TabMenu";
import Button from "../../components/Button";
import TableCard from "../../components/TableCard";
import FloatButton from "../../components/FloatButton";
import Logo from "../../components/Logo";
import Loader from "../../components/Loader";
import BackDrop from "../../components/BackDrop";

import { BiSearch } from "react-icons/bi";
import { GoCheck } from "react-icons/go";
import { CgClose } from "react-icons/cg";
import image53 from "../../assets/img/image53.png";
import Hidden from "@material-ui/core/Hidden";
import {
  Box,
  BoxTables,
  NavButtons,
  Myform,
  SearchContainer,
  InputSearch,
  SelectContainer,
  ButtonContainer,
  ListTables,
  Item,
  DashBoardTables,
  Container,
  ImgContainer,
  IconNav,
  WrapperModal,
} from "./styles";

import MenuDashboard from "../../components/MenuDashBoard";

const Tables = () => {
  const schema = yup.object().shape({
    search: yup.string(),
    select: yup.string().required("Campo Obrigatório"),
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
    isShowModal,
    setIsShowModal,
  } = useTables();

  const handleForm = (data: any) => {
    searchTables(data);
    reset();
  };
  const { user } = useUser();

  return (
    <DashBoardTables>
      <Hidden only="xs">
        <Header />
      </Hidden>
      <Container>
        <Hidden smUp>
          <Logo />
        </Hidden>
        <NavButtons>
          <TabMenu
            isActived
            isMaster={user.isMaster ?? false}
            textFirstBtn={"Vaga para Participar"}
            textSecondBtn={"Vaga para mestrar"}
          />
        </NavButtons>
        <Myform onSubmit={handleSubmit(handleForm)}>
          <SearchContainer>
            <InputSearch
              label={"Digite para pesquisar*"}
              placeholder={"Pesquisar"}
              register={register}
              icon={BiSearch}
              name={"search"}
              error={errors.search?.message}
            />
          </SearchContainer>
          <SelectContainer>
            <label>Buscar Por*</label>
            <select {...register("select")} name="select">
              <option selected disabled hidden>
                Selecione
              </option>
              <option value="id">ID</option>
              <option value="name">Nome</option>
              <option value="theme">Tema</option>
              <option value="system">Sistema</option>
            </select>
          </SelectContainer>

          <ButtonContainer>
            <Hidden only="xs">
              <Button type={"submit"}>
                <p>PESQUISAR</p>
              </Button>
            </Hidden>
            <Hidden smUp>
              <FloatButton
                type={"submit"}
                icon={IconNav}
                title={"Pesquisar"}
              ></FloatButton>
            </Hidden>
          </ButtonContainer>
        </Myform>
        <BoxTables>
          <ListTables>
            <BackDrop isOpened={false}>
              <p>Você Quer Mesmo Fazer Isso?</p>
              <WrapperModal>
                <FloatButton title="Não" icon={CgClose} type="button" />
                <FloatButton title="Sim" icon={GoCheck} type="button" />
              </WrapperModal>
            </BackDrop>
            {loading ? (
              <Loader />
            ) : (
              listTables.map((table: Table) => (
                <Item key={table.id}>
                  <TableCard
                    table={table}
                    onClick={() => setIsShowModal(true)}
                  />
                  <Box>
                    <BackDrop isOpened={isShowModal}>
                      <p>Você Quer Mesmo Fazer Isso?</p>
                      <WrapperModal>
                        <FloatButton
                          title="Não"
                          icon={CgClose}
                          type="button"
                          onClick={() => setIsShowModal(false)}
                        />
                        <FloatButton
                          title="Sim"
                          icon={GoCheck}
                          type="button"
                          onClick={() =>
                            joinTable(
                              table.id,
                              user.username,
                              user.avatar,
                              user.isMaster,
                              user.id,
                              table.players
                            )
                          }
                        />
                      </WrapperModal>
                    </BackDrop>
                  </Box>
                </Item>
              ))
            )}
          </ListTables>

          <ImgContainer>
            <figure>
              <img src={image53} alt="image53" />
            </figure>
          </ImgContainer>
        </BoxTables>
      </Container>
      <Hidden smUp>
        <MenuDashboard />
      </Hidden>
    </DashBoardTables>
  );
};

export default Tables;
