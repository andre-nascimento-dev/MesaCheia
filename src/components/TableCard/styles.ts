import styled from "styled-components";

export const Container = styled.div`
  background: var(--secondaryBgColor);
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  padding: 5px;
  width: 250px;
  border-radius: 10px;

  h2 {
    text-align: center;
    font-size: 0.8rem;
    flex-grow: 1;
    line-break: loose;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }

  div:first-child {
    align-items: center;
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
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: bold;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    font-weight: bold;
  }
`;
