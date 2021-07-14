import styled, { css } from "styled-components";
import cursorPointer from "../../assets/img/cursor-pointer.png";

interface AvatarProps {
  size: string;
  isSelectable?: boolean;
  isSelected?: boolean;
}

export const MyAvatar = styled.figure<AvatarProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: ${(props) => `${props.size}px`};
  position: relative;
`;

export const Icon = styled.img<AvatarProps>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: 50%;
  object-fit: cover;
  transition: all 300ms ease-in-out;

  ${(props) =>
    props.isSelectable &&
    css`
      cursor: url(${cursorPointer}), auto;
      border: 2px solid transparent;
      border-radius: 100%;

      &:hover,
      &:focus {
        filter: drop-shadow(0 0 1.5px #000);
      }
    `}

  ${(props) =>
    props.isSelected &&
    css`
      border-color: #000;
    `}
`;

export const Star = styled.img<AvatarProps>`
  position: absolute;
  top: ${(props) => `${-Number(props.size) / 8}px`};
  right: ${(props) => `${-Number(props.size) / 8}px`};
  width: ${(props) => `${Number(props.size) / 2}px`};
`;
