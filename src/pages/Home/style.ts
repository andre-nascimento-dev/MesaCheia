import styled, { keyframes } from "styled-components";
import homeBg from "../../assets/img/home-background.jpg";
import titleBg from "../../assets/img/title-bg.png";
import aboutImg from "../../assets/img/dice-about.png";

const glow = keyframes`
    to {
        text-shadow: 2px 2px #666;
    }
`;

export const Ladingpage = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;

  @media (min-width: 768px) {
    background: url(${homeBg}) no-repeat center;
    background-size: cover;
    place-items: unset;
  }
`;

export const Title = styled.div`
  font-family: "Vecna";
  font-size: 3rem;
  color: #950740;
  text-shadow: 2px 2px #000;
  text-align: center;
  line-height: 0.8;
  animation: ${glow} 3s linear alternate-reverse infinite;

  @media (max-width: 767px) {
    transform: translateY(-2rem);
  }

  @media (min-width: 768px) {
    font-size: 4rem;
    padding-top: 1rem;

    h1:first-child {
      padding-right: 8rem;
    }

    h1:last-child {
      padding-left: 8rem;
    }
  }

  @media (min-width: 1024px) {
    font-size: 6rem;
  }
`;

export const About = styled.main`
  height: 100vh;
  width: 80vw;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 50px;
  position: relative;

  @media (min-width: 768px) {
    padding-bottom: 16px;
  }

  h2 {
    text-transform: uppercase;
    color: #000;
    background: url(${titleBg}) no-repeat center;
    background-size: contain;
    padding: 0.5rem 0;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    color: var(--secondaryTextColor);
    font-weight: 300;

    @media (min-width: 768px) {
      font-size: 1.7rem;
      padding: 0 1rem;
    }
  }
`;

export const Footer = styled.footer`
  p {
    font-size: 0.8rem;
    text-align: center;
    line-height: 1.5;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  p:first-child {
    font-weight: bold;
  }

  a {
    color: var(--secondaryTextColor);
    text-decoration: underline #c3073f;
    outline: none;
    transition: color 300ms ease-in-out;

    &:hover,
    &:focus {
      color: #c3073f;
    }
  }
`;

export const Dice = styled.div`
  width: 200px;
  height: 200px;
  background: url(${aboutImg}) no-repeat center;
  background-size: contain;
  position: absolute;
  bottom: 0;
  right: -60px;

  @media (max-width: 767px) {
    display: none;
  }
`;
