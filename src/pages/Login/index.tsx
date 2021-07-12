import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../provider/Auth";
import Input from "../../components/Input";
import { GiPadlock } from "react-icons/gi";
import { useForm } from "react-hook-form";
import Form from "../../components/Form";
import { GrMail } from "react-icons/gr";
import * as yup from "yup";
import { Container } from "./style";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { useHistory } from "react-router-dom";

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const { handleLogin } = useAuth();
  const schema = yup.object({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });
  const history = useHistory();
  const handleOnSubmit = (data: LoginData) => {
    handleLogin(data, history);
  };
  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit(handleOnSubmit)} isTransparent>
        <Input
          label="Email*"
          register={register}
          name="email"
          error={errors.email?.message}
          placeholder="Email"
          icon={GrMail}
        />

        <Input
          label="Senha*"
          register={register}
          name="password"
          error={errors.password?.message}
          placeholder="Senha"
          icon={GiPadlock}
          type="password"
        />
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};
export default Login;
