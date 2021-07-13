import Avatar from "../../components/Avatar";
import FloatButton from "../../components/FloatButton";
import MenuDashboard from "../../components/MenuDashBoard";
import { FullContainer, Container, FirstContent, SecondContent } from "./style";
import { AiFillEdit } from "react-icons/ai";
import DropDown from "../../components/DropDown";
import BackDrop from "../../components/BackDrop";
import { useState } from "react";
import { useAuth } from "../../provider/Auth";
import jwtDecode from "jwt-decode";
import { mesaCheiaApi } from "../../services";
import { User } from "../../types/user";
import { useEffect } from "react";

interface UserDecoded {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

const Profile = () => {
  const { token } = useAuth();

  const decoded: UserDecoded = jwtDecode(token);

  const [user, setUser] = useState<User>();

  useEffect(() => {
    mesaCheiaApi
      .get(`/users/${decoded.sub}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUser(response.data));
  }, []);

  const [edit, setEdit] = useState(false);
  const [avatarEdit, setAvatarEdit] = useState(false);
  const [userEdit, setUserEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [isMasterEdit, setIsMasterEdit] = useState(false);

  return (
    <main>
      {!!user ? (
        <>
          {/* <FullContainer>
            <Container>
              <FirstContent>
                <Avatar
                  url={user.avatar}
                  size="40"
                  alt="Avatar do usuário"
                  isMaster={user.isMaster}
                />
                <h2>{user.username}</h2>
                <FloatButton
                  secondary
                  title="ver mais"
                  icon={AiFillEdit}
                  onClick={() => setEdit(!edit)}
                />
              </FirstContent>
              <SecondContent>
                <h3>Email:</h3>
                <p>{user.email}</p>

                <h3>Mestre:</h3>
                <p>{user.isMaster ? "Sim" : "Não"}</p>
              </SecondContent>

              {edit && (
                <DropDown open={edit}>
                  <button
                    onClick={() => {
                      setEdit(!edit);
                      setEdit(!edit);
                    }}
                  >
                    close
                  </button>
                  <p
                    onClick={() => {
                      setAvatarEdit(!avatarEdit);
                      setEdit(!edit);
                    }}
                  >
                    Avatar
                  </p>
                  <p
                    onClick={() => {
                      setUserEdit(!userEdit);
                      setEdit(!edit);
                    }}
                  >
                    Usuário
                  </p>
                  <p
                    onClick={() => {
                      setEmailEdit(!emailEdit);
                      setEdit(!edit);
                    }}
                  >
                    Email
                  </p>
                  <p
                    onClick={() => {
                      setIsMasterEdit(!isMasterEdit);
                      setEdit(!edit);
                    }}
                  >
                    Mestre
                  </p>
                </DropDown>
              )}

              {avatarEdit && (
                <BackDrop isOpened={avatarEdit}>
                  <p>paranbole</p>
                </BackDrop>
              )}

              {userEdit && (
                <BackDrop isOpened={userEdit}>
                  <p>paranbole</p>
                </BackDrop>
              )}

              {emailEdit && (
                <BackDrop isOpened={emailEdit}>
                  <p>paranbole</p>
                </BackDrop>
              )}

              {isMasterEdit && (
                <BackDrop isOpened={isMasterEdit}>
                  <p>paranbole</p>
                </BackDrop>
              )}
            </Container>
          </FullContainer> */}

          <MenuDashboard />
        </>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Profile;
