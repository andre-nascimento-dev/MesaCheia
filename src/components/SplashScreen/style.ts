import styled, { keyframes } from "styled-components";

const swipe = keyframes`
   from {
      transform: scaleX(1);
    }
    to {
      transform: scaleX(0);
    }
`;

const fadeOut = keyframes`
  to {
      opacity: 0;
    }
`;

export const Title = styled.h1`
  position: absolute;
  z-index: 1;
  inset: 0;
  display: grid;
  place-items: center;
  color: #c3073f;
  font-size: 4rem;
  font-family: "Vecna";
  opacity: 1;
  animation: ${fadeOut} 3s forwards;

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

export const RightDoor = styled.div`
  position: absolute;
  background: #000;
  top: 0;
  bottom: 0;
  left: 50%;
  right: 0;
  animation: ${swipe} 2s forwards 1s;
  transform-origin: right;
`;

export const LeftDoor = styled.div`
  position: absolute;
  background: #000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 50%;
  animation: ${swipe} 2s forwards 1s;
  transform-origin: left;
`;
