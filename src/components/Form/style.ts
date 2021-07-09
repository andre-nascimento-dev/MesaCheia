import styled, { css } from "styled-components";

interface ContainerProps {
  isTransparent?: boolean;
}

export const Container = styled.form<ContainerProps>`
  width: 300px;
  padding: 15px;
  display: flex;
  flex-flow: column wrap;
  border-radius: 10px;

  ${(props) => css`
    background: ${props.isTransparent ? "none" : "var(--secondaryBgColor)"};
  `}
`;
