import styled, { css } from "styled-components";
import cursorPointer from "../../assets/img/cursor-pointer.png";
interface Props {
  size: string;
  isSelectable?: boolean;
}

export const MyAvatar = styled.figure<Props>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: ${(props) => `${props.size}px`}; ;
`;

export const Icon = styled.img<Props>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};

  ${(prop) =>
    prop.isSelectable &&
    css`
      cursor: url(${cursorPointer}), auto;
      border: var(--mainTextColor) 3px solid;
      border-radius: 100%;
    `}
`;

export const Star = styled.img`
  position: absolute;
  align-self: flex-end;
  width: 25px;
`;
