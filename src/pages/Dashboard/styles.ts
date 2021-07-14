import styled, { keyframes } from "styled-components";
import titleBg from "../../assets/img/title-bg.png";

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

export const ContainerDashboard = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    gap: 2rem;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 1rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const TitleMessage = styled.h2`
  font-size: 1.2rem;
  width: max-content;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  background: url(${titleBg}) repeat-x center;
  background-size: cover;
  opacity: 0;
  animation: ${fadeIn} 10s forwards;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    padding: 2rem 3rem;
  } ;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerCards = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }

  @media (min-width: 768px) {
    ::-webkit-scrollbar {
      width: 0.6rem;
    }
    ::-webkit-scrollbar-track {
      background: var(--mainButtonBg);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--secondaryButtonBg);
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--secondaryBgColor);
    }
  }
`;
