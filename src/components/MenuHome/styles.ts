import styled from "styled-components";

export const Container = styled.nav`
  background: var(--secondaryButtonBg);
  opacity: 0.7;
  padding: 5px;
  width: 100%;
  position: fixed;
  bottom: 0;

  @media only screen and (min-width: 768px) {
    left: 0;
    bottom: auto;
    width: auto;
    height: 100%;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;

  @media only screen and (min-width: 768px) {
    height: 100%;
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  text-align: center;
  a {
    color: var(--secondaryTextColor);
    transition: ease-in-out 300ms;

    :hover,
    :focus {
      text-shadow: 0 0 3px var(--secondaryTextColor);
    }
  }
`;
