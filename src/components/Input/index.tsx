import { Container, InputContainer } from "./styles";

interface InputProps {
  label: string;
  type?: string;
  placeholder: string;
  icon?: React.ComponentType;
  name: string;
  register: any;
  error: string;
  fontSize?: number;
  required?: boolean;
}

const Input = ({
  label,
  icon: Icon,
  register,
  name,
  error,
  fontSize,
  required,
  ...rest
}: InputProps) => {
  return (
    <Container fontSize={fontSize}>
      {label}
      <InputContainer isErrored={!!error}>
        {Icon && <Icon />}
        <input {...register(name)} {...rest} required={required}/>
      </InputContainer>
      <div>{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default Input;
