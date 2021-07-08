import styled from "styled-components";

export const Container = styled.div`
  background: var(--secondaryBgColor);
  display: flex;
  flex-direction: column;
  padding: 5px;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;
export const Counter = styled.div`
  background: var(--secondaryButtonBg);
  width: 25px;
  height: 25px;
  border-radius: 100%;
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  span {
    font-weight: bold;
  }
`;
