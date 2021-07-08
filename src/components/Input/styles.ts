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

  span {
    color: var(--mainButtonBg);
    text-shadow: 0 0 5px var(--mainTextColor);
    font-weight: normal;
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  background: var(--secondaryTextColor);
  border-radius: 5px;
  display: flex;
  padding: 3px;
  border: 2px solid var(--secondaryTextColor);
  transition: border ease-in-out 300ms;

  :hover,
  :focus {
    border: 2px solid var(--secondaryButtonBg);
  }

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid var(--mainButtonBg);
      > svg {
        color: var(--mainButtonBg);
      }
    `}

  input {
    background: none;
    align-items: center;
    width: 100%;
    color: var(--mainTextColor);
    flex: 1;
    border: 0;
    transition: 300ms;

    ::placeholder {
      color: var(--secondaryButtonBg);
    }
  }
  svg {
    color: var(--mainTextColor);
  }
`;
