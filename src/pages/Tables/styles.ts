import styled from "styled-components";
import bgImg from "../../assets/img/image53.png";
import cursorPointer from "../../assets/img/cursor-pointer.png";

export const DashBoardTables = styled.div`
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

export const Form = styled.form`
  display: flex;
  align-items: center;
  max-width: 700px;
  gap: 1rem;

  div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 80%;
    padding: 2px;
  }

  @media only screen and (max-width: 767px) {
    max-width: 400px;
    flex-wrap: wrap;
    gap: 0;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 92px;
  flex-grow: 1;
  padding-bottom: 20px;
  color: var(--secondaryTextColor);
  font-weight: bold;

  select {
    padding: 4px;
    border: none;
    outline: none;
    background: var(--secondaryTextColor);
    border-radius: 4px;
    font-size: 1rem;
    cursor: url(${cursorPointer}), auto;
  }
`;

export const BoxTables = styled.div`
  display: flex;
  gap: 1rem;
  flex-grow: 1;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const ListTables = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 1rem;

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

export const ImgContainer = styled.div`
  align-self: center;
  width: 300px;
  height: 80%;
  background: url(${bgImg}) no-repeat center;
  background-size: contain;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const WrapperModal = styled.div`
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
