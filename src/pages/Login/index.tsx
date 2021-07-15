import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { BsFillLockFill } from "react-icons/bs";
import { useAuth } from "../../provider/Auth";
import { Container, Redirect, BoxContent } from "./style";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Motion from "../../components/Motion";

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const { handleLogin } = useAuth();
  const history = useHistory();

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

  const handleOnSubmit = (data: LoginData) => {
    handleLogin(data, history);
  };

  return (
    <Motion>
      <Container>
        <Logo goToHome />
        <BoxContent>
          <Form onSubmit={handleSubmit(handleOnSubmit)} isTransparent>
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
            <Button type="submit" biggerFont>
              Entrar
            </Button>
            <Redirect>
              Não é cadastrado? <Link to="/register">Criar conta</Link>
            </Redirect>
          </Form>
        </BoxContent>
      </Container>
    </Motion>
  );
};

export default Login;
