import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../components/Form";
import RegisterImg from "../../assets/img/register-background.jpg";
import { Container, Img, BoxContent, Title, Header, Box } from "./style";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { FaUserAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { GiPadlock } from "react-icons/gi";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

const Register = () => {
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
      .oneOf([yup.ref("password")], "Deve ser igual a senha "),
    isMaster: yup.string().nullable().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const handleOnSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <Logo />
      <BoxContent>
        <Img src={RegisterImg} alt="RegisterImg" />
        <Form onSubmit={handleSubmit(handleOnSubmit)} isTransparent>
          <Input
            label="Usuário*"
            register={register}
            name="username"
            error={errors.username?.message}
            placeholder="Usuário"
            icon={FaUserAlt}
          />
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
          <Input
            label="Confirmar senha*"
            register={register}
            name="confirmPassword"
            error={errors.confirmPassword?.message}
            placeholder="Confirmar senha"
            icon={GiPadlock}
            type="password"
          />

          <Box>
            <span>Você é mestre?*</span>
            <input
              type="radio"
              id="sim"
              value="true"
              {...register("isMaster")}
            />
            <label htmlFor="sim">Sim</label>
            <input
              type="radio"
              id="nao"
              value="false"
              {...register("isMaster")}
            />

            <label htmlFor="nao">Não</label>
          </Box>
          {errors.isMaster?.message}
          <Button type="submit">Cadastrar</Button>
        </Form>
      </BoxContent>
    </Container>
  );
};
export default Register;
