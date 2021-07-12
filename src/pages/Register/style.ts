import styled from "styled-components";
import registerBg from "../../assets/img/register-background.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  max-width: 1400px;
  padding: 0 12px 24px;
  margin: 0 auto;
`;

export const BoxContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  flex-grow: 1;

  @media (min-width: 768px) {
    background: url(${registerBg}) no-repeat center;
    background-size: cover;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--secondaryTextColor);
  margin-bottom: 16px;

  div:first-child {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  span {
    font-weight: bold;
  }

  div:last-child {
    height: 20px;
    color: #c53030;
    text-shadow: 2px 2px 2px var(--mainTextColor);
    font-weight: bold;
  }
`;

export const Redirect = styled.span`
  font-size: 0.7rem;
  color: #fff;
  padding-top: 16px;

  a {
    color: #fff;
    font-weight: bold;
    transition: color 300ms ease-in-out;

    &:hover {
      color: #000;
    }
  }
`;
