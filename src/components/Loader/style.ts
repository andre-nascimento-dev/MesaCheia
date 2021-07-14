import styled, { keyframes } from "styled-components";

const load = keyframes`
  to {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

export const Container = styled.div`
  width: 200px;
  height: 80px;
  background-color: #000;
  box-shadow: 0px 0px 10px 2px #950740;
  border-radius: 4px;
  
  p {
    color: #fff;
    text-align: center;
    padding: 10px;
    font-style: italic;
  }

`;

export const Bar = styled.div`
  height: 20px;
  width: 150px;
  border: 1px solid #950740;
  border-radius: 4px;
  margin: 0 auto;

  div {
    height: 100%;
    width: 0;
    background-color: #950740;
    animation: ${load} 30ms linear forwards;
  }
`;
