import { Ladingpage, Title, About, Footer, Dice } from "./style";
import MenuHome from "../../components/MenuHome";
import Motion from "../../components/Motion";

const Home = () => {
  return (
    <>
      <Motion>
        <MenuHome />
        <Ladingpage id="home">
          <Title>
            <h1>Mesa</h1>
            <h1>Cheia</h1>
          </Title>
        </Ladingpage>
      </Motion>
      <About id="about">
        <h2>Sobre</h2>
        <p>
          Depois de muito tempo sem conseguir jogar mesas de RPG online com
          dificuldade de achar um mestre ou jogadores para completar uma
          aventura, conseguimos chegar a uma solução (e não, nem tudo se resume
          a matar um dragão). Criamos o MesaCheia com o intuito de podermos nos
          divertir, desde jogando um 'Mouse Guard' até mesmo um 'Tormenta',
          achando jogadores com o mesmo gosto que você para a diversão de uma
          mesa de RPG.
        </p>
        <Footer>
          <p>Desenvolvido por:</p>
          <p>
            <a
              href="https://www.linkedin.com/in/andre-nascimento-b543831a9/"
              target="_blank"
              rel="noreferrer"
            >
              André
            </a>{" "}
            -{" "}
            <a
              href="https://www.linkedin.com/in/charles-pinheiro-052356205/"
              target="_blank"
              rel="noreferrer"
            >
              Charles
            </a>{" "}
            -{" "}
            <a
              href="https://www.linkedin.com/in/eduardo-godoi-12263b122/"
              target="_blank"
              rel="noreferrer"
            >
              Eduardo
            </a>{" "}
            -{" "}
            <a
              href="https://www.linkedin.com/in/guilhermecosgoncalves/"
              target="_blank"
              rel="noreferrer"
            >
              Guilherme
            </a>{" "}
            -{" "}
            <a
              href="https://www.linkedin.com/in/laianesuzart/"
              target="_blank"
              rel="noreferrer"
            >
              Laiane
            </a>
          </p>
        </Footer>
        <Dice />
      </About>
    </>
  );
};

export default Home;
