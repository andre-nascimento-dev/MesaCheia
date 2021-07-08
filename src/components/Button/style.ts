import styled, { css } from "styled-components";

interface ButtonStyledProps {
  secondary: boolean;
  small: boolean;
  biggerFont: boolean;
  hasIcon: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  color: var(--secondaryTextColor);
  font-size: ${(props) =>
    props.small ? "14px" : props.biggerFont ? "24px" : "18px"};
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.secondary ? "var(--secondaryButtonBg)" : "var(--mainButtonBg)"};
  border-radius: 8px;
  border: 2px solid transparent;
  outline-color: var(--secondaryTextColor);
  outline-width: 1px;
  min-width: ${(props) => (props.small ? "80px" : "150px")};
  padding: 8px 12px;
  transition: border 300ms ease-in-out;

  ${(props) =>
    props.hasIcon &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    border-color: var(--secondaryTextColor);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
