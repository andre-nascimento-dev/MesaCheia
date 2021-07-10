import styled from "styled-components";

export const Container = styled.nav`
  background-color:rgba(78, 78, 80);
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1;

  @media only screen and (min-width: 768px) {
    left: 0;
    bottom: auto;
    width: auto;
    height: 100%;
    background-color:rgba(78, 78, 80, 0.8);
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;

  @media only screen and (min-width: 768px) {
    padding-top: 2rem;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ListItem = styled.li`
  a {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding-top: 0.5rem;
    color: var(--secondaryTextColor);
    outline: none;
    transition: ease-in-out 300ms;

    @media (min-width: 768px) {
      padding: 0 0.5rem;
    }

    svg {
      font-size: 1.5rem;
      transition: ease-in-out 300ms;

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }

  &:hover, &:focus {
      text-shadow: 0 0 3px var(--secondaryTextColor);

      svg {
        color: #950740;
      }
    }
  }
`;
