import styled from "styled-components";
import imgBg from "../../assets/img/nothing-here.jpg";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-height: 600px;

  p,
  div {
    width: 100%;
    height: 50%;
  }

  p {
    font-family: 'Press Start 2P', cursive;
    font-size: 1rem;
    display: grid;
    place-items: center;
    text-align: center;
    color: #fff;

    @media (min-width: 768px) {
        font-size: 2rem;
    }
  }

  div {
    background: url(${imgBg}) no-repeat center;
    background-size: contain;
  }
`;
