import styled, { keyframes } from "styled-components";

const bouncer = keyframes`
  from { 
    transform: translateY(0);
  }
  to { 
    transform: translateY(-100px);
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  color: #c3073f;
  font-size: 4rem;
  font-family: "Vecna";

  @media (min-width: 768px) {
    font-size: 8rem;
  }
`;

export const Bouncer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100px;
  height: 100px;

  div {
    width: 20px;
    height: 20px;
    background: #950740;
    border-radius: 50%;
    animation: ${bouncer} 0.5s cubic-bezier(0.19, 0.57, 0.3, 0.98) infinite
      alternate;
  }

  div:nth-child(2) {
    animation-delay: 0.1s;
    opacity: 0.8;
  }

  div:nth-child(3) {
    animation-delay: 0.2s;
    opacity: 0.6;
  }
  
  div:nth-child(4) {
    animation-delay: 0.3s;
    opacity: 0.4;
  }
`;
