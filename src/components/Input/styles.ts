import styled, { css } from "styled-components";

interface InputContainerProps {
  isErrored: boolean;
}

interface ContainerProps {
  fontSize?: number;
}

export const Container = styled.div<ContainerProps>`
  ${(props) =>
    css`
      font-size: ${props.fontSize};
    `}
  color: var(--secondaryTextColor);
  font-weight: bold;
  padding: 2px;
  width: 88%;

  div:last-child {
    height: 20px;

    span {
      color: #c53030;
      text-shadow: 2px 2px 2px var(--mainTextColor);
    }
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  background: var(--secondaryTextColor);
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding-left: 2px;
  gap: 4px;
  border: 2px solid transparent;
  transition: border ease-in-out 300ms;

  :hover,
  :focus {
    border-color: #000;
  }

  svg {
    color: var(--mainTextColor);
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;

      svg {
        color: #c53030;
      }
    `}

  input {
    background: none;
    align-items: center;
    width: 100%;
    color: var(--mainTextColor);
    flex: 1;
    padding: 4px;
    outline: none;
    border: none;
    border-radius: 0 4px 4px 0;

    &:hover,
    &:focus {
      background-color: pink;
    }

    ::placeholder {
      color: var(--secondaryButtonBg);
    }
  }
`;
