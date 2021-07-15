import styled, { keyframes } from "styled-components";
import titleBg from "../../assets/img/title-bg.png";

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

const spinnerOne = keyframes`
  0% { 
    transform: rotate(0deg); border-width: 10px; 
  }
  50% { 
    transform: rotate(180deg); border-width: 1px; 
  }
  100% { 
    transform: rotate(360deg); border-width: 10px; 
  }
`;

const spinnerTwo = keyframes`
  0% { 
    transform: rotate(0deg); border-width: 1px; 
  }
  50% { 
    transform: rotate(180deg); border-width: 10px; 
  }
  100% { 
    transform: rotate(360deg); border-width: 1px; 
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
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }

  @media (min-width: 768px) {
    ::-webkit-scrollbar {
      width: 0.6rem;
    }
    ::-webkit-scrollbar-track {
      
      background: var(--secondaryButtonBg);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--mainButtonBg);
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--secondaryBgColor);
    }
  }
`;

export const Spinner = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  align-self: center;

  div {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 8px solid transparent;
    border-top-color: #000;
    border-radius: 50%;
    animation: ${spinnerOne} 500ms linear infinite;
  }
  div:last-child {
    border: 8px solid transparent;
    border-bottom-color: #000;
    animation: ${spinnerTwo} 500ms linear infinite;
  }
`;

export const TableDetails = styled.div`
  color: #000;
  width: 300px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;

  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      flex-grow: 1;
      text-align: center;
      line-break: loose;
      
    }

    button {
      flex-shrink: 0;
    }
  }

  p {
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
      font-weight: normal;
    }
  }

  a {
    color: #fff;
    background-color: #c3073f;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    width: fit-content;
    align-self: center;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    z-index: 2;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      background-color: #000;
      border-radius: 8px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 500ms ease-in-out;
    }

    &:hover::before,
    &:focus::before {
      transform: scaleX(1);
    }

    svg {
      font-size: 1.5rem;
    }
  }

  div:last-child {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
`;

export const Members = styled.ul`
  display: flex;
  overflow-x: scroll;
  gap: 4px;
  padding: 4px 0;
  font-size: 0.8rem;

  ::-webkit-scrollbar {
    height: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: var(--secondaryButtonBg);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--mainButtonBg);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #950740;
  }

  li {
    display: flex;
    gap: 4px;
    align-items: center;
  }
`;

export const ExitModal = styled.div`
  padding: 16px;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
`;

export const EditAvatar = styled.form`
  width: 300px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div:last-child {
    display: flex;
    gap: 16px;
  }
`;

export const EditName = styled.form`
  width: 300px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div:last-child {
    display: flex;
    gap: 16px;
  }
`;

export const EditTheme = styled.form`
  width: 300px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div:last-child {
    display: flex;
    gap: 16px;
  }
`;

export const EditSystem = styled.form`
  width: 300px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div:last-child {
    display: flex;
    gap: 16px;
  }
`;

export const EditDiscord = styled.form`
  width: 300px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div:last-child {
    display: flex;
    gap: 16px;
  }
`;

export const EditMembers = styled.div`
  width: 300px;
  max-height: 400px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 16px;
    gap: 4px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 0.2rem;
    }
    ::-webkit-scrollbar-track {
      background: var(--secondaryButtonBg);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--mainButtonBg);
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #950740;
    }
  }

  div:last-child {
    display: flex;
  }
`;

export const MemberDisplay = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export const KickMemberModal = styled.div`
  padding: 8px;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
`;
