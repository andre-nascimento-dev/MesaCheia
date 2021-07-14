import { useState, useEffect } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { SiDiscord } from "react-icons/si";
import { SiAirtable } from "react-icons/si";
import { GiStabbedNote } from "react-icons/gi";
import { FaDiceD20 } from "react-icons/fa";
import { BsImageFill } from "react-icons/bs";
import { TiUserDelete } from "react-icons/ti";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container,
  TitleMessage,
  ContainerButtons,
  ContainerCards,
  ContainerDashboard,
  Spinner,
  TableDetails,
  Members,
  ExitModal,
  EditAvatar,
  EditName,
  EditTheme,
  EditSystem,
  EditDiscord,
  EditMembers,
  MemberDisplay,
  KickMemberModal
} from "./styles";
import { useUser } from "../../provider/User";
import { useTables } from "../../provider/Tables";
import Header from "../../components/Header";
import TabMenu from "../../components/TabMenu";
import TableCard from "../../components/TableCard";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import FloatButton from "../../components/FloatButton";
import Hidden from "@material-ui/core/Hidden";
import MenuDashboard from "../../components/MenuDashBoard";
import Loader from "../../components/Loader";
import CreateTableModal from "../../components/CreateTableModal";
import BackDrop from "../../components/BackDrop";
import Avatar from "../../components/Avatar";
import DropDown from "../../components/DropDown";

interface FormValues {
  name?: string;
  avatar?: string;
  system?: string;
  theme?: string;
  discord?: string;
}

const Dashboard = () => {
  const {
    user,
    userTables,
    masterTables,
    joinedTables,
    joinedAsMaster,
    loading,
  } = useUser();
  const {
    actualTable,
    getActualTable,
    deleteTable,
    leaveTable,
    editTableInfo,
    editTableMembers,
    loading: tableLoader,
  } = useTables();
  const [showJoinedTables, setShowJoinedTables] = useState(true);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [openOptions, setOpenOptions] = useState(null);
  const [confirmExit, setConfirmExit] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false);
  const [openName, setOpenName] = useState(false);
  const [openTheme, setOpenTheme] = useState(false);
  const [openSystem, setOpenSystem] = useState(false);
  const [openDiscord, setOpenDiscord] = useState(false);
  const [openMembers, setOpenMembers] = useState(false);
  const [currentPlayerId, setCurrentPlayerId] = useState(0);
  const [confirmKick, setConfirmKick] = useState(false);

  const schema = yup.object().shape({
    name: yup.string(),
    theme: yup.string(),
    system: yup.string(),
    discord: yup.string().url("Link inválido"),
    avatar: yup.string().url("Link inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const displayJoinedTables = () => {
    setShowJoinedTables(true);
    userTables();
  };

  const displayMasterTables = () => {
    setShowJoinedTables(false);
    masterTables();
  };

  const tableDetails = (id: number) => {
    getActualTable(id);
    setOpenDetails(true);
  };

  const handleDelete = () => {
    deleteTable(Number(actualTable.id));
    setConfirmExit(false);
    setOpenDetails(false);
  };

  const handleLeave = () => {
    leaveTable(actualTable, Number(user.id));
    setConfirmExit(false);
    setOpenDetails(false);
  };

  const submitAvatar = (data: FormValues) => {
    const newAvatar = { avatar: data.avatar };
    editTableInfo(Number(actualTable.id), newAvatar);
    reset();
    setOpenAvatar(false);
  };

  const submitName = (data: FormValues) => {
    const newName = { name: data.name };
    editTableInfo(Number(actualTable.id), newName);
    reset();
    setOpenName(false);
  };

  const submitTheme = (data: FormValues) => {
    const newTheme = { theme: data.theme };
    editTableInfo(Number(actualTable.id), newTheme);
    reset();
    setOpenTheme(false);
  };

  const submitSystem = (data: FormValues) => {
    const newSystem = { system: data.system };
    editTableInfo(Number(actualTable.id), newSystem);
    reset();
    setOpenSystem(false);
  };

  const submitDiscord = (data: FormValues) => {
    const newDiscord = { discord: data.discord };
    editTableInfo(Number(actualTable.id), newDiscord);
    reset();
    setOpenDiscord(false);
  };

  const handleOpenAvatar = () => {
    setOpenOptions(null);
    setOpenAvatar(!openAvatar);
    reset();
  };

  const handleOpenName = () => {
    setOpenOptions(null);
    setOpenName(!openName);
    reset();
  };

  const handleOpenTheme = () => {
    setOpenOptions(null);
    setOpenTheme(!openTheme);
    reset();
  };

  const handleOpenSystem = () => {
    setOpenOptions(null);
    setOpenSystem(!openSystem);
    reset();
  };

  const handleOpenDiscord = () => {
    setOpenOptions(null);
    setOpenDiscord(!openDiscord);
    reset();
  };

  const handleOpenMembers = () => {
    setOpenOptions(null);
    setOpenMembers(!openMembers);
  };

  const handleConfirmKick = (id: number) => {
    setCurrentPlayerId(id);
    setConfirmKick(true);
  }

  const handleEditMembers = () => {
    editTableMembers(actualTable, currentPlayerId);
    setConfirmKick(false);
  };

  useEffect(() => {
    displayJoinedTables();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <ContainerDashboard>
        <Hidden only="xs">
          <Header />
        </Hidden>
        <Hidden smUp>
          <Logo />
        </Hidden>
        <TitleMessage>{`Olá, aventureiro(a) ${user?.username}!`}</TitleMessage>
        <Container>
          <ContainerButtons>
            <TabMenu
              textFirstBtn="Mesas que participo"
              textSecondBtn="Mesas que mestro"
              isMaster={user.isMaster ?? false}
              isActived
              onClickFirstBtn={displayJoinedTables}
              onClickSecondBtn={displayMasterTables}
            />
            <Hidden only="xs">
              <Button
                hasIcon={true}
                biggerFont={true}
                onClick={() => setOpenCreateModal(!openCreateModal)}
              >
                <BsFillPlusCircleFill />
                Criar Mesa
              </Button>
            </Hidden>
            <Hidden smUp>
              <FloatButton
                icon={AiOutlinePlus}
                title="Criar Mesa"
                onClick={() => setOpenCreateModal(!openCreateModal)}
              />
            </Hidden>
          </ContainerButtons>
          <ContainerCards>
            {loading ? (
              <Loader />
            ) : showJoinedTables ? (
              joinedTables.map((table) => (
                <li key={table.id}>
                  <TableCard
                    table={table}
                    isJoin
                    onClick={() => tableDetails(Number(table.id))}
                  />
                </li>
              ))
            ) : (
              joinedAsMaster.map((table) => (
                <li key={table.id}>
                  <TableCard
                    table={table}
                    isJoin
                    onClick={() => tableDetails(Number(table.id))}
                  />
                </li>
              ))
            )}
          </ContainerCards>
        </Container>
        <Hidden smUp>
          <MenuDashboard />
        </Hidden>
      </ContainerDashboard>

      <BackDrop isOpened={openCreateModal}>
        <CreateTableModal open={setOpenCreateModal} />
      </BackDrop>

      <BackDrop isOpened={openDetails}>
        <TableDetails>
          {tableLoader ? (
            <Spinner>
              <div></div>
              <div></div>
            </Spinner>
          ) : (
            <>
              <div>
                <Avatar
                  url={actualTable?.avatar}
                  alt="Avatar da mesa"
                  size="64"
                />
                <p>{actualTable?.name}</p>
                {actualTable?.userId === user.id && (
                  <FloatButton
                    secondary
                    title="Editar"
                    icon={MdEdit}
                    onClick={(e: any) => setOpenOptions(e.currentTarget)}
                  />
                )}
              </div>
              <p>
                Tema: <span>{actualTable?.theme}</span>
              </p>
              <p>
                Sistema: <span>{actualTable?.system}</span>
              </p>
              <a href={actualTable?.discord} target="_blank" rel="noreferrer">
                <SiDiscord /> Discord
              </a>
              <p>Membros:</p>
              <Members>
                {actualTable?.players?.map((player) => (
                  <li key={player.playerId}>
                    <Avatar
                      size="24"
                      url={player.avatar}
                      alt="Avatar do usuário"
                      isMaster={player.isMaster}
                    />
                    <span>{player.username}</span>
                  </li>
                ))}
              </Members>
              <div>
                <Button small secondary onClick={() => setConfirmExit(true)}>
                  {user.id === actualTable?.userId ? "Excluir" : "Sair"}
                </Button>
                <Button small onClick={() => setOpenDetails(false)}>
                  Voltar
                </Button>
              </div>
            </>
          )}
        </TableDetails>
      </BackDrop>

      <DropDown
        open={Boolean(openOptions)}
        anchorEl={openOptions}
        onClose={(e: any) => setOpenOptions(null)}
      >
        <li onClick={handleOpenAvatar}>Avatar</li>
        <li onClick={handleOpenName}>Nome</li>
        <li onClick={handleOpenTheme}>Tema</li>
        <li onClick={handleOpenSystem}>Sistema</li>
        <li onClick={handleOpenDiscord}>Discord</li>
        <li onClick={handleOpenMembers}>Membros</li>
      </DropDown>

      <BackDrop isOpened={confirmExit}>
        <ExitModal>
          <p>Você quer mesmo fazer isso?</p>
          <div>
            <FloatButton
              secondary
              icon={AiOutlineClose}
              title="Não"
              onClick={() => setConfirmExit(false)}
            />
            <FloatButton
              icon={AiOutlineCheck}
              title="Sim"
              onClick={
                user.id === actualTable?.userId ? handleDelete : handleLeave
              }
            />
          </div>
        </ExitModal>
      </BackDrop>

      <BackDrop isOpened={openAvatar}>
        <EditAvatar onSubmit={handleSubmit(submitAvatar)} autoComplete="off">
          <Input
            label="Link de imagem para avatar*"
            register={register}
            name="avatar"
            error={errors.avatar?.message}
            placeholder="Link de imagem para avatar"
            icon={BsImageFill}
            required
          />
          <div>
            <FloatButton
              secondary
              icon={AiOutlineClose}
              title="Cancelar"
              type="reset"
              onClick={handleOpenAvatar}
            />
            <FloatButton
              icon={AiOutlineCheck}
              title="Atualizar"
              type="submit"
            />
          </div>
        </EditAvatar>
      </BackDrop>

      <BackDrop isOpened={openName}>
        <EditName onSubmit={handleSubmit(submitName)} autoComplete="off">
          <Input
            label="Nome da mesa*"
            register={register}
            name="name"
            error={errors.name?.message}
            placeholder="Nome da mesa"
            icon={SiAirtable}
            required
          />
          <div>
            <FloatButton
              secondary
              icon={AiOutlineClose}
              title="Cancelar"
              type="reset"
              onClick={handleOpenName}
            />
            <FloatButton
              icon={AiOutlineCheck}
              title="Atualizar"
              type="submit"
            />
          </div>
        </EditName>
      </BackDrop>

      <BackDrop isOpened={openTheme}>
        <EditTheme onSubmit={handleSubmit(submitTheme)} autoComplete="off">
          <Input
            label="Tema da história*"
            register={register}
            name="theme"
            error={errors.theme?.message}
            placeholder="Tema da história"
            icon={GiStabbedNote}
            required
          />
          <div>
            <FloatButton
              secondary
              icon={AiOutlineClose}
              title="Cancelar"
              type="reset"
              onClick={handleOpenTheme}
            />
            <FloatButton
              icon={AiOutlineCheck}
              title="Atualizar"
              type="submit"
            />
          </div>
        </EditTheme>
      </BackDrop>

      <BackDrop isOpened={openSystem}>
        <EditSystem onSubmit={handleSubmit(submitSystem)} autoComplete="off">
          <Input
            label="Sistema*"
            register={register}
            name="system"
            error={errors.system?.message}
            placeholder="Sistema"
            icon={FaDiceD20}
            required
          />
          <div>
            <FloatButton
              secondary
              icon={AiOutlineClose}
              title="Cancelar"
              type="reset"
              onClick={handleOpenSystem}
            />
            <FloatButton
              icon={AiOutlineCheck}
              title="Atualizar"
              type="submit"
            />
          </div>
        </EditSystem>
      </BackDrop>

      <BackDrop isOpened={openDiscord}>
        <EditDiscord onSubmit={handleSubmit(submitDiscord)} autoComplete="off">
          <Input
            label="Link do servidor Discord*"
            register={register}
            name="discord"
            error={errors.discord?.message}
            placeholder="Link do servidor Discord"
            icon={SiDiscord}
            required
          />
          <div>
            <FloatButton
              secondary
              icon={AiOutlineClose}
              title="Cancelar"
              type="reset"
              onClick={handleOpenDiscord}
            />
            <FloatButton
              icon={AiOutlineCheck}
              title="Atualizar"
              type="submit"
            />
          </div>
        </EditDiscord>
      </BackDrop>

      <BackDrop isOpened={openMembers}>
        <EditMembers>
          <ul>
          {actualTable.players?.map((player) => (
              <MemberDisplay key={player.playerId}>
                <div>
                <Avatar
                  size="40"
                  alt="Avatar do usuário"
                  url={player.avatar}
                  isMaster={player.isMaster}
                />
                <span>{player.username}</span>
                </div>
                {player.playerId !== user.id &&
                <FloatButton
                secondary
                icon={TiUserDelete}
                title="Expulsar"
                onClick={() => handleConfirmKick(player.playerId)}
                />
              }
              </MemberDisplay>
            ))}
            </ul>
          <div>
            <FloatButton
              secondary
              icon={AiOutlineClose}
              title="Cancelar"
              onClick={handleOpenMembers}
            />
          </div>
        </EditMembers>
      </BackDrop>

      <BackDrop isOpened={confirmKick}>
        <KickMemberModal>
          <p>Você quer mesmo fazer isso?</p>
          <div>
            <FloatButton
              secondary
              icon={AiOutlineClose}
              title="Não"
              onClick={() => setConfirmKick(false)}
            />
            <FloatButton
              icon={AiOutlineCheck}
              title="Sim"
              onClick={handleEditMembers}
            />
          </div>
        </KickMemberModal>
      </BackDrop>
    </>
  );
};

export default Dashboard;
