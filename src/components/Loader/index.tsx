import {
  Wrapper,
  Container,
  Bar
} from "./style";

const Loader = () => {
  return (
    <Wrapper>
    <Container>
      <p>Carregando...</p>
      <Bar>
        <div/>
      </Bar>
    </Container>
    </Wrapper>
  );
};

export default Loader;
