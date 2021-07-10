import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  color: var(--secondaryTextColor);
`;
export const Header = styled.header`
  width: 100%;
  text-align: center;
  @media only screen and (min-width: 768px) {
    width: 50%;
    text-align: left;
  }
  @media only screen and (min-width: 1920px) {
    width: 45%;
  }
`;
export const Title = styled.h1`
  font-family: "Vecna";
  color: var(--highLigthBgColor);
  font-size: 4rem;
  font-weight: 700;
`;
export const BoxContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
`;
export const Img = styled.img`
  width: 50%;
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
  @media only screen and (min-width: 1920px) {
    width: 30%;
  }
`;
