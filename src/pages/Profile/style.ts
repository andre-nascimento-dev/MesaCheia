import styled, { css } from "styled-components";
import cursorPointer from "../../assets/img/cursor-pointer.png";
import bgImage from "../../assets/img/profile-background.jpg";

interface LiProps {
  isSelected: boolean;
}

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const FullContainer = styled.div`
  height: 80vh;

  max-height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    background: url(${bgImage}) no-repeat;
    background-size: cover;
    margin: 20px;
    max-width: 1400px;
    width: 80%;
  }
`;

export const Container = styled.div`
  width: 300px;
  background: var(--secondaryBgColor);
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--secondaryTextColor);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    width: 80vw;
    height: 50vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    overflow: auto;
    padding: 5px;
    margin-bottom: 10px;

    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: var(--mainButtonBg);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--secondaryButtonBg);
    }

    @media only screen and (min-width: 768px) {
      width: 50vw;
    }
  }

  @media only screen and (min-width: 768px) {
    background-color: #4e4e50bb;
    width: 450px;
    font-size: 1.5rem;
  }
`;

export const Li = styled.li<LiProps>`
  margin: 5px;
  border-radius: 100%;
  cursor: url(${cursorPointer}), auto;

  :hover,
  :focus {
    box-shadow: 0 0 0 2px var(--secondaryTextColor);
  }

  ${(props) => css`
    box-shadow: ${props.isSelected && "0 0 0 3px var(--secondaryTextColor)"};
  `}
`;

export const FirstContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SecondContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  overflow: hidden;

  h3 {
    margin-top: 20px;
  }
`;

export const ModalButtonsDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
