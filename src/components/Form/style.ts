import styled, { css } from "styled-components";

interface ContainerProps {
  isTransparent?: boolean;
}

export const Container = styled.form<ContainerProps>`
  width: 300px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border-radius: 10px;

  ${(props) => css`
    background: ${props.isTransparent ? "rgb(111,34,50, 0.8)" : "var(--secondaryBgColor)"};
  `}
`;
