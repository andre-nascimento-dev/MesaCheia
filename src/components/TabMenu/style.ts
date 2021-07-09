import styled from "styled-components";

interface Props {
  isActived: boolean;
}

export const Button = styled.button`
  background-color: ${({ isActived }: Props) =>
    isActived ? "#c3073f" : "#4e4e50"};
  color: ${({ isActived }: Props) => (isActived ? "#fff" : "#000")};
  font-weight: 700;
  font-size: 16px;
  border: none;
  width: 115px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 5px;
  border: 1px solid var(--mainBgColor);
  transition: 0.2s;
  outline: none;
  &:hover {
    background-color: ${({ isActived }: Props) =>
      isActived ? "#950740" : "#4e4e50"};
  }
  &:focus {
    border: 1px solid #fff;
  }
  &:disabled {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    width: 260px;
    height: 54px;
    font-size: 21px;
  }
`;
