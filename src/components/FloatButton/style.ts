import styled from "styled-components";

interface ButtonProps {
  secondary: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid transparent;
  border-radius: 50%;
  color: var(--secondaryTextColor);
  font-size: 24px;
  background-color: ${(props) =>
    props.secondary ? "var(--secondaryButtonBg)" : "var(--mainButtonBg)"};
  outline-color: var(--secondaryTextColor);
  position: relative;
  transition: all 300ms ease-in-out;

  &::after,
  &::before {
    --scale: 0;
    content: "";
    position: absolute;
    top: -4px;
    left: 50%;
    transition: transform 150ms;
  }

  &::before {
    content: attr(title);
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    width: max-content;
    background-color: rgba(0, 0, 0, 0.8);
    transform: translate(-50%, calc(-100% - 8px)) scale(var(--scale));
    transform-origin: bottom center;
  }

  &::after {
    content: "";
    border: 8px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.8);
    transform: translate(-50%, -8px) scale(var(--scale));
    transform-origin: top center;
  }

  &:hover::before,
  &:hover::after {
    --scale: 1;
  }

  &:hover,
  &:focus {
    border-color: var(--secondaryTextColor);
  }
`;
