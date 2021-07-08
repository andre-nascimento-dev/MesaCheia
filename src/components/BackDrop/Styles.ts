import styled, { css } from "styled-components";

interface isOponedProp {
  isOponed: boolean;
}

export const Container = styled.div<isOponedProp>`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 350ms;
  transform: scaley(0);

  ${(prop) =>
    prop.isOponed &&
    css`
      transform: scaley(1);
    `}
`;

export const Wrapper = styled.div`
  background: var(--secondaryBgColor);
  border-radius: 24px;
  width: 50%;
  height: 70%;
  padding: 16px 32px 24px;
`;
