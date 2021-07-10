import styled, { keyframes } from "styled-components";
import rainBg from "../../assets/img/not-found-background.png";

const rain = keyframes`
    from {
        background-position: top;
    }
    to {
        background-position: bottom;
    }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: url(${rainBg});
  animation: ${rain} 2s linear infinite alternate;
`;

export const Desktop = styled.div`
  display: flex;
  gap: 2rem;

  img {
    width: 360px;
    filter: drop-shadow(0 0 4px #57405d);
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0 0;

  div {
    position: relative;
    background: #6f2232;
    font-weight: bold;
    color: #000;
    width: 300px;
    border-radius: 16px;
    padding: 1.5rem 0;
    line-height: 1.5;
    text-align: center;

    &:after {
      right: 100%;
      top: 50%;
      border: solid transparent;
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(111, 34, 50, 0);
      border-right-color: #6f2232;
      border-width: 25px;
      margin-top: -25px;
    }
  }

  a {
    color: #fff;
    transition: color 300ms ease-in-out;

    &::before {
      content: "> ";
    }

    &::after {
      content: " <";
    }

    &:hover,
    &:focus {
      color: #c3073f;
    }
  }

  p {
    font-size: 10rem;
    font-weight: bold;
    color: #c3073f;
  }
`;

export const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
  padding: 0.4rem 0;

  div {
    position: relative;
    background: #6f2232;
    font-weight: bold;
    color: #000;
    width: 300px;
    border-radius: 8px;
    padding: 0.8rem 0;
    line-height: 1.4;
    text-align: center;

    &:after {
      top: 100%;
      left: 50%;
      border: solid transparent;
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(111, 34, 50, 0);
      border-top-color: #6f2232;
      border-width: 20px;
      margin-left: -20px;
    }
  }

  img {
    width: 250px;
    filter: drop-shadow(0 0 2px #57405d);
  }

  a {
    color: #fff;
    transition: color 300ms ease-in-out;

    &::before {
      content: "> ";
    }

    &::after {
      content: " <";
    }

    &:hover,
    &:focus {
      color: #c3073f;
    }
  }

  p {
    font-size: 6rem;
    font-weight: bold;
    color: #c3073f;
  }
`;
