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
} from "./style";
import { AiFillEdit, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import DropDown from "../../components/DropDown";
import BackDrop from "../../components/BackDrop";
import { useState } from "react";
import { useUser } from "../../provider/User";
import { mesaCheiaApi } from "../../services";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaUserAlt } from "react-icons/fa";
import { useAuth } from "../../provider/Auth";
import { MdEmail } from "react-icons/md";

const Profile = () => {
  const { user } = useUser();
  const { token } = useAuth();

  const [edit, setEdit] = useState(null);
  const [avatarEdit, setAvatarEdit] = useState(false);
  const [userEdit, setUserEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [isMasterEdit, setIsMasterEdit] = useState(false);

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

  const changeUsername = async (username: any) => {
    await mesaCheiaApi
      .patch(`/users/${user.id}`, username, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((e) => console.log("erro na atualização", e));

    console.log("bau");
    window.location.reload();
  };

  const changeEmail = async (mail: any) => {
    await mesaCheiaApi
      .patch(`/users/${user.id}`, mail, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((e) => console.log("erro na atualização", e));

    window.location.reload();
  };

  const changeIsMaster = async (isTrue: any) => {
    const checkTrue = isTrue === "true" ? true : false;
    await mesaCheiaApi
      .patch(
        `/users/${user.id}`,
        { isMaster: checkTrue },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .catch((e) => console.log("erro na atualização", e));

    window.location.reload();
  };

  return (
    <main>
      {!!user ? (
        <>
          <FullContainer>
            <Container>
              <FirstContent>
                <Avatar url={user?.avatar} size="40" alt="Avatar do usuário" />
                <h2>{user.username}</h2>
                <FloatButton
                  secondary
                  title="ver mais"
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
                  <li>Avatar</li>
                  <li onClick={() => setUserEdit(true)}>Usuário</li>
                  <li onClick={() => setEmailEdit(true)}>E-mail</li>
                  <li onClick={() => setIsMasterEdit(true)}>Mestre</li>
                </DropDown>
              )}

              {avatarEdit && (
                <BackDrop isOpened={avatarEdit}>
                  <p>paranbole</p>
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
                          changeIsMaster("false");
                          setIsMasterEdit(false);
                        }}
                      />
                      <FloatButton
                        title="Sim"
                        icon={AiOutlineCheck}
                        onClick={() => {
                          changeIsMaster("true");
                          setIsMasterEdit(false);
                        }}
                      />
                    </ModalButtonsDiv>
                  </Box>
                </BackDrop>
              )}
            </Container>
          </FullContainer>

          <MenuDashboard />
        </>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Profile;
