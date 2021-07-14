import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Wrapper = styled.div`
  background: var(--secondaryBgColor);
  border-radius: 16px;
`;
