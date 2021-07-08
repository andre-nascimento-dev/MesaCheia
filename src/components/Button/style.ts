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
  outline: none;
  box-shadow: ${props => props.secondary ? "3px 3px 3px -1px rgba(78,78,80,0.7)" : "3px 3px 3px -1px rgba(195,7,63,0.7)"};
  min-width: ${(props) => (props.small ? "80px" : "150px")};
  padding: 8px 12px;
  transition: all 300ms ease-in-out;

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
    box-shadow: 3px 3px 3px -1px #fff;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
