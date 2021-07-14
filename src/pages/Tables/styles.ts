import styled from "styled-components";
import Input from "../../components/Input";
import { IoMdNavigate } from "react-icons/io";

export const DashBoardTables = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Container = styled.main`
  @media only screen and (max-width: 768px) {
  }
`;

export const NavButtons = styled.nav`
  margin-top: 50px;
  margin-left: 10px;
`;

export const Myform = styled.form`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin-top: 50px;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
  }
`;

export const SearchContainer = styled.section`
  width: 400px;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 95%;
    margin-bottom: 10px;
  }
`;

export const InputSearch = styled(Input)`
  && {
    height: 41px;
    outline: none;
    font-size: 16px;
  }
`;

export const SelectContainer = styled.section`
  display: flex;
  flex-direction: column;

  label {
    color: var(--secondaryTextColor);
    font-weight: bold;
    padding: 2px;
  }

  select {
    width: 120px;
    height: 41px;
    border: none;
    outline: none;
    background: var(--secondaryTextColor);
    border-radius: 5px;
    font-size: 16px;
    @media only screen and (max-width: 768px) {
      width: 170%;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 23px;
`;

export const BoxTables = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ListTables = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100vw;
  height: 55vh;
  margin-top: 40px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: var(--mainButtonBg);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--secondaryButtonBg);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--secondaryBgColor);
  }

  @media only screen and (max-width: 768px) {
    height: 21vh;
    justify-content: center;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Item = styled.li`
  margin-bottom: 20px;
`;

export const ImgContainer = styled.div`
  margin: 0 15px 0 15px;
  display: flex;
  align-self: center;
  img {
    width: 300px;
    @media only screen and (max-width: 1040px) {
      width: 250px;
    }
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const IconNav = styled(IoMdNavigate)`
  transform: rotate(90deg);
  && {
    color: var(--secondaryTextColor);
  }
`;

export const WrapperModal = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

export const Box = styled.div`
  color: #fff;
  font-weight: bold;
`;
