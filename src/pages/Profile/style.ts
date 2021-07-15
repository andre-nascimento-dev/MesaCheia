import styled from "styled-components";
import bgImage from "../../assets/img/profile-background.jpg";

export const FullContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 768px) {
    padding-bottom: 1rem;
  }
`;

export const Main = styled.main`
  display: grid;
  place-items: center;
  flex-grow: 1;
  width: 100%;
  align-self: center;
  max-width: 1400px;

  @media only screen and (min-width: 768px) {
    background: url(${bgImage}) no-repeat center;
    background-size: cover;
  }
`;

export const Container = styled.div`
  width: 300px;
  background: var(--secondaryBgColor);
  padding: 16px 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  color: var(--secondaryTextColor);

  @media only screen and (min-width: 768px) {
    background-color: rgba(0, 0, 0, 0.3);
    width: 450px;
    font-size: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  font-size: 1rem;
`;

export const Ul = styled.ul`
  height: 50vh;
  width: 80vw;
  max-width: 520px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 4px;
  padding: 8px 16px 0;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: var(--mainButtonBg);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--secondaryButtonBg);

    &:hover {
      background-color: #950740;
    }
  }
`;

export const Li = styled.li`
  border-radius: 50%;
`;

export const BoxRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 8px 0;
`;

export const FirstContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SecondContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ModalButtonsDiv = styled.div`
  display: flex;
  gap: 16px;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  gap: 16px;
`;
