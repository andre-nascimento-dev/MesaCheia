import { useState, useEffect } from "react";
import { Hidden } from "@material-ui/core";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FullContainer,
  Container,
  FirstContent,
  SecondContent,
  ModalButtonsDiv,
  Box,
  Ul,
  Li,
  BoxRow,
  Main,
  Form,
} from "./style";
import { useUser } from "../../provider/User";
import DropDown from "../../components/DropDown";
import MenuDashboard from "../../components/MenuDashBoard";
import FloatButton from "../../components/FloatButton";
import Avatar from "../../components/Avatar";
import BackDrop from "../../components/BackDrop";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import Avatares from "../../components/Avatar/avatar.json";
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
      <FullContainer>
        <Hidden only="xs">
          <Header />
        </Hidden>
        <Hidden smUp>
          <Logo />
        </Hidden>

        <Main>
          {loading ? (
            <Loader />
          ) : (
            <Container>
              <FirstContent>
                <Hidden smUp>
                  <Avatar
                    url={user?.avatar}
                    size="48"
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
                  icon={MdEdit}
                  onClick={handleEdit}
                />
              </FirstContent>
              <SecondContent>
                <h3>E-mail:</h3>
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
                  <Ul>
                    {Avatares.userOptions.map((avatar, index) => (
                      <Li key={index} onClick={() => setAvatarUrl(avatar)}>
                        <Hidden smUp>
                          <Avatar
                            url={avatar}
                            alt="Avatar do usuário"
                            size="50"
                            isSelected={avatar === avatarUrl}
                            isSelectable
                          />
                        </Hidden>
                        <Hidden only="xs">
                          <Avatar
                            url={avatar}
                            alt="Avatar do usuário"
                            size="80"
                            isSelected={avatar === avatarUrl}
                            isSelectable
                          />
                        </Hidden>
                      </Li>
                    ))}
                  </Ul>
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
                  <Form
                    onSubmit={handleSubmit(changeUsername)}
                    autoComplete="off"
                  >
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
                        title="Cancelar"
                        type="reset"
                        icon={AiOutlineClose}
                        onClick={() => {
                          setUserEdit(false);
                        }}
                      />
                      <FloatButton
                        type="submit"
                        title="Atualizar"
                        icon={AiOutlineCheck}
                        onClick={() => {}}
                      />
                    </ModalButtonsDiv>
                  </Form>
                </BackDrop>
              )}

              {emailEdit && (
                <BackDrop isOpened={emailEdit}>
                  <Form onSubmit={handleSubmit(changeEmail)} autoComplete="off">
                    <Input
                      label="E-mail*"
                      register={register}
                      name="email"
                      error={errors.email?.message}
                      placeholder="E-mail"
                      icon={MdEmail}
                    />
                    <ModalButtonsDiv>
                      <FloatButton
                        secondary
                        type="reset"
                        title="Cancelar"
                        icon={AiOutlineClose}
                        onClick={() => {
                          setEmailEdit(false);
                        }}
                      />
                      <FloatButton
                        type="submit"
                        title="Atualizar"
                        icon={AiOutlineCheck}
                        onClick={() => {}}
                      />
                    </ModalButtonsDiv>
                  </Form>
                </BackDrop>
              )}

              {isMasterEdit && (
                <BackDrop isOpened={isMasterEdit}>
                  <Box>
                    <h3>Você é mestre?</h3>
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
        </Main>

        <Hidden smUp>
          <MenuDashboard />
        </Hidden>
      </FullContainer>
    </>
  );
};

export default Profile;
