import styled from "styled-components";

export const FullContainer = styled.main`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 300px;
  background: var(--secondaryBgColor);
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--secondaryTextColor);
`;

export const FirstContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SecondContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  overflow: hidden;

  h3 {
    margin-top: 20px;
  }
`;
