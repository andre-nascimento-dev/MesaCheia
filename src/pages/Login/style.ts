import styled from "styled-components";
import loginBg from "../../assets/img/login-background.jpg";
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
  max-width: 1400px;
  padding: 0 12px 24px;
  flex-grow: 1;

  @media (min-width: 768px) {
    height: 80vh;
    background: url(${loginBg}) no-repeat center;
    background-size: cover;
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
