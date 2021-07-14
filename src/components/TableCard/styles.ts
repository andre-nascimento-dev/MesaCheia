import styled from "styled-components";

export const Container = styled.div`
  background: var(--secondaryBgColor);
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  padding: 5px;
  width: 250px;
  border-radius: 10px;

  > div {
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }

  Button {
    align-self: flex-end;
  }

  @media only screen and (min-width: 768px) {
    width: 350px;
    font-size: 1rem;
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
