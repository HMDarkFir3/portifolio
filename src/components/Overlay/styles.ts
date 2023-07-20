import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.overlay};

  opacity: 0;

  z-index: 0;
  transition: all 0.5s ease-in-out;

  @media (max-width: 796px) {
    &.active {
      height: 100vh;

      opacity: 1;

      z-index: 0;
    }
  }
`;
