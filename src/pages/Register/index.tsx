import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillLockFill } from "react-icons/bs";
import { Container, BoxContent, Box, Redirect } from "./style";
import { useAuth } from "../../provider/Auth";
import { User } from "../../types/user";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import avatarUrl from "../../components/Avatar/avatar.json";

interface FormValue {
  username: string;
  email: string;
  password: string;
  isMaster: string;
}

const Register = () => {
  const { handleRegister } = useAuth();
  const history = useHistory();

  const schema = yup.object({
    username: yup
      .string()
      .required("Campo obrigatório")
      .min(3, "Mínimo de 3 caracteres")
      .max(18, "Máximo de 18 caracteres"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Deve ser igual a senha"),
    isMaster: yup.string().nullable().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = ({ username, email, password, isMaster }: FormValue) => {
    const isMasterBoolean = isMaster === "true" ? true : false;
    const userData: User = {
      username,
      email,
      password,
      isMaster: isMasterBoolean,
      avatar: avatarUrl.userDefault,
    };
    handleRegister(userData, history);
  };

  return (
    <Container>
      <Logo goToHome />
      <BoxContent>
        <Form onSubmit={handleSubmit(onSubmit)} isTransparent>
          <Input
            label="Usuário*"
            register={register}
            name="username"
            error={errors.username?.message}
            placeholder="Usuário"
            icon={FaUserAlt}
          />
          <Input
            label="E-mail*"
            register={register}
            name="email"
            error={errors.email?.message}
            placeholder="E-mail"
            icon={MdEmail}
          />

          <Input
            label="Senha*"
            register={register}
            name="password"
            error={errors.password?.message}
            placeholder="Senha"
            icon={BsFillLockFill}
            type="password"
          />
          <Input
            label="Confirmar senha*"
            register={register}
            name="confirmPassword"
            error={errors.confirmPassword?.message}
            placeholder="Confirmar senha"
            icon={BsFillLockFill}
            type="password"
          />

          <Box>
            <div>
              <span>Você é mestre?*</span>
              <input
                type="radio"
                id="isMaster"
                value="true"
                {...register("isMaster")}
              />
              <label htmlFor="isMaster">Sim</label>
              <input
                type="radio"
                id="isNotMaster"
                value="false"
                {...register("isMaster")}
              />

              <label htmlFor="isNotMaster">Não</label>
            </div>
            <div>{errors.isMaster?.message}</div>
          </Box>
          <Button type="submit" biggerFont>
            Cadastrar
          </Button>

          <Redirect>
            Já está cadastrado? <Link to="/login">Entrar na conta</Link>
          </Redirect>
        </Form>
      </BoxContent>
    </Container>
  );
};
export default Register;
