import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTables } from "../../provider/Tables";
import { Table } from "../../types/table";

import Header from "../../components/Header";
import TabMenu from "../../components/TabMenu";
import Button from "../../components/Button";
import TableCard from "../../components/TableCard";
import FloatButton from "../../components/FloatButton";
import Logo from "../../components/Logo";
import Loader from "../../components/Loader";

import { BiSearch } from "react-icons/bi";
import image53 from "../../assets/img/image53.png";
import Hidden from "@material-ui/core/Hidden";
import {
  NavButtons,
  Myform,
  SearchContainer,
  InputSearch,
  SelectContainer,
  ButtonContainer,
  ListTables,
  Item,
  BoxTables,
  DashBoardTables,
  Container,
  ImgContainer,
  IconNav,
} from "./styles";
import { useState } from "react";

const onclick = () => {
  console.log("entrou");
};

const Tables = () => {
  const schema = yup.object().shape({
    search: yup.string().required("Campo Obrigatório"),
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

  const { searchTables, listTables, loading } = useTables();
  const handleForm = (data: any) => {
    searchTables(data);
  };
  console.log(listTables);

  const [test, setTest] = useState(false);
  return (
    <DashBoardTables>
      <Header />
      <Container>
        <Hidden smUp>
          <Logo />
        </Hidden>
        <NavButtons>
          <TabMenu
            isActived
            isMaster={false}
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
              <option defaultValue="none" selected disabled hidden>
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
            {loading ? (
              <Loader />
            ) : (
              listTables.map((table: Table) => (
                <Item>
                  <TableCard table={table} onClick={() => setTest(!test)} />{" "}
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
    </DashBoardTables>
  );
};

export default Tables;
