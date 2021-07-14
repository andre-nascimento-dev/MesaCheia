import Avatar from "../../components/Avatar";
import FloatButton from "../../components/FloatButton";
import MenuDashboard from "../../components/MenuDashBoard";
import {
  FullContainer,
  Container,
  FirstContent,
  SecondContent,
  ModalButtonsDiv,
  Box,
  Li,
  BoxRow,
  Main,
} from "./style";
import { AiFillEdit, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import DropDown from "../../components/DropDown";
import BackDrop from "../../components/BackDrop";
import { useState } from "react";
import { useUser } from "../../provider/User";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import Avatares from "../../components/Avatar/avatar.json";
import { Hidden } from "@material-ui/core";
import { useEffect } from "react";
import Logo from "../../components/Logo";
import Header from "../../components/Header";

const Profile = () => {
  const {
    user,
    changeUsername,
    changeEmail,
    changeIsMaster,
    loading,
    changeAvatar,
  } = useUser();

  const [edit, setEdit] = useState(null);
  const [avatarEdit, setAvatarEdit] = useState(false);
  const [userEdit, setUserEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [isMasterEdit, setIsMasterEdit] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleEdit = (e: any) => {
    setEdit(e.currentTarget);
  };

  const schema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Mínimo de 3 caracteres")
      .max(18, "Máximo de 18 caracteres"),
    email: yup.string().min(1, "E-mail obrigatório").email("E-mail inválido"),
    isMaster: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    setAvatarEdit(false);
    setUserEdit(false);
    setEmailEdit(false);
    setIsMasterEdit(false);
  }, [user]);

  return (
    <>
      {!!user ? (
        <Main>
          <Hidden smUp>
            <Logo />
          </Hidden>
          <FullContainer>
            {loading ? (
              <Loader />
            ) : (
              <Container>
                <FirstContent>
                  <Hidden smUp>
                    <Avatar
                      url={user?.avatar}
                      size="50"
                      alt="Avatar do usuário"
                    />
                  </Hidden>
                  <Hidden only="xs">
                    <Avatar
                      url={user?.avatar}
                      size="80"
                      alt="Avatar do usuário"
                    />
                  </Hidden>
                  <h2>{user.username}</h2>
                  <FloatButton
                    secondary
                    title="Editar"
                    icon={AiFillEdit}
                    onClick={handleEdit}
                  />
                </FirstContent>
                <SecondContent>
                  <h3>Email:</h3>
                  <p>{user.email}</p>

                  <h3>Mestre:</h3>
                  <p>{user.isMaster ? "Sim" : "Não"}</p>
                </SecondContent>

                {edit && (
                  <DropDown
                    open={Boolean(edit)}
                    anchorEl={edit}
                    onClose={() => setEdit(null)}
                  >
                    <li
                      onClick={() => {
                        setAvatarEdit(true);
                        setEdit(null);
                      }}
                    >
                      Avatar
                    </li>
                    <li
                      onClick={() => {
                        setUserEdit(true);
                        setEdit(null);
                      }}
                    >
                      Usuário
                    </li>
                    <li
                      onClick={() => {
                        setEmailEdit(true);
                        setEdit(null);
                      }}
                    >
                      E-mail
                    </li>
                    <li
                      onClick={() => {
                        setIsMasterEdit(true);
                        setEdit(null);
                      }}
                    >
                      Mestre
                    </li>
                  </DropDown>
                )}

                {avatarEdit && (
                  <BackDrop isOpened={avatarEdit}>
                    <ul>
                      {Avatares.userOptions.map((avatar, index) => (
                        <Li
                          key={index}
                          onClick={() => setAvatarUrl(avatar)}
                          isSelected={avatar === avatarUrl}
                        >
                          <Hidden smUp>
                            <Avatar
                              url={avatar}
                              alt="Avatar do usuário"
                              size="50"
                            />
                          </Hidden>
                          <Hidden only="xs">
                            <Avatar
                              url={avatar}
                              alt="Avatar do usuário"
                              size="80"
                            />
                          </Hidden>
                        </Li>
                      ))}
                    </ul>
                    <BoxRow>
                      <Button
                        secondary
                        small
                        onClick={() => setAvatarEdit(false)}
                      >
                        Cancelar
                      </Button>
                      <Button
                        small
                        onClick={() => {
                          changeAvatar(avatarUrl);
                          setAvatarEdit(false);
                        }}
                      >
                        Atualizar
                      </Button>
                    </BoxRow>
                  </BackDrop>
                )}

                {userEdit && (
                  <BackDrop isOpened={userEdit}>
                    <form onSubmit={handleSubmit(changeUsername)}>
                      <Input
                        label="Usuário*"
                        register={register}
                        name="username"
                        error={errors.username?.message}
                        placeholder="Usuário"
                        icon={FaUserAlt}
                      />

                      <ModalButtonsDiv>
                        <FloatButton
                          secondary
                          title="sair"
                          icon={AiOutlineClose}
                          onClick={() => {
                            setUserEdit(false);
                          }}
                        />
                        <FloatButton
                          type="submit"
                          title="enviar"
                          icon={AiOutlineCheck}
                          onClick={() => {}}
                        />
                      </ModalButtonsDiv>
                    </form>
                  </BackDrop>
                )}

                {emailEdit && (
                  <BackDrop isOpened={emailEdit}>
                    <form onSubmit={handleSubmit(changeEmail)}>
                      <Input
                        label="Email*"
                        register={register}
                        name="email"
                        error={errors.email?.message}
                        placeholder="Email"
                        icon={MdEmail}
                      />
                      <ModalButtonsDiv>
                        <FloatButton
                          secondary
                          title="sair"
                          icon={AiOutlineClose}
                          onClick={() => {
                            setEmailEdit(false);
                          }}
                        />
                        <FloatButton
                          type="submit"
                          title="enviar"
                          icon={AiOutlineCheck}
                          onClick={() => {}}
                        />
                      </ModalButtonsDiv>
                    </form>
                  </BackDrop>
                )}

                {isMasterEdit && (
                  <BackDrop isOpened={isMasterEdit}>
                    <Box>
                      <h3>Você é Mestre?</h3>
                      <ModalButtonsDiv>
                        <FloatButton
                          secondary
                          title="Não"
                          icon={AiOutlineClose}
                          onClick={() => {
                            changeIsMaster(false);
                            setIsMasterEdit(false);
                          }}
                        />
                        <FloatButton
                          title="Sim"
                          icon={AiOutlineCheck}
                          onClick={() => {
                            changeIsMaster(true);
                            setIsMasterEdit(false);
                          }}
                        />
                      </ModalButtonsDiv>
                    </Box>
                  </BackDrop>
                )}
              </Container>
            )}
          </FullContainer>

          <Header />
        </Main>
      ) : (
        <></>
      )}
    </>
  );
};

export default Profile;
