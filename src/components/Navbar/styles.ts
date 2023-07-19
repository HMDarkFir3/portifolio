import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.background};

  .wrapper {
    display: flex;
    align-items: center;

    width: 100%;
    height: 120px;

    padding: 0 20px;

    background-color: ${({ theme }) => theme.colors.background};

    z-index: 3;
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 20px;

    position: absolute;
    top: -500px;

    width: 100%;

    padding: 0 20px 40px 20px;

    background-color: ${({ theme }) => theme.colors.background};

    z-index: 2;
    transition: all 0.5s ease-in-out;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;

    width: 100%;

    background-color: ${({ theme }) => theme.colors.overlay};

    opacity: 0;

    z-index: 0;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 796px) {
    .menuActive {
      display: flex;
      top: 120px;

      overflow: hidden;
    }

    .overlayActive {
      height: 100vh;

      opacity: 1;

      z-index: 1;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 20px;

  width: 48px;
  height: 48px;

  border: 1px solid ${({ theme }) => theme.colors.primary600};
  border-radius: 50%;

  z-index: 1;

  .name {
    font-size: 1rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary600};
  }
`;

export const ButtonMenu = styled.button`
  display: none;

  position: absolute;
  right: 20px;

  width: 24px;
  height: 16px;

  z-index: 1;

  .bar {
    width: 100%;
    height: 2px;

    background-color: ${({ theme }) => theme.colors.primary600};
    border-radius: 100px;

    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      animation: barOneRevert 0.3s ease-in-out;
    }

    &:nth-child(3) {
      animation: barThreeRevert 0.3s ease-in-out;
    }

    @keyframes barOneRevert {
      0% {
        transform: translateY(8px) rotateZ(45deg);
      }
      50% {
        transform: translateY(6px) rotateZ(0deg);
      }
      100% {
        transform: translateY(0px);
      }
    }

    @keyframes barThreeRevert {
      0% {
        transform: translateY(-8px) rotateZ(135deg);
      }
      50% {
        transform: translateY(-6px) rotateZ(0deg);
      }
      100% {
        transform: translateY(0px);
      }
    }
  }

  .bar.barActive {
    &:nth-child(1) {
      animation: barOne 0.3s ease-in-out forwards;
    }

    &:nth-child(2) {
      transform: scale(0);
      opacity: 0;
    }

    &:nth-child(3) {
      animation: barThree 0.3s ease-in-out forwards;
    }

    @keyframes barOne {
      50% {
        transform: translateY(8px);
      }
      100% {
        transform: translateY(6px) rotateZ(45deg);
      }
    }

    @keyframes barThree {
      50% {
        transform: translateY(-6px);
      }
      100% {
        transform: translateY(-8px) rotateZ(135deg);
      }
    }
  }

  @media (max-width: 796px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  @media (max-width: 796px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  list-style: none;

  @media (max-width: 796px) {
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  display: flex;
  gap: 8px;

  padding: 8px 0;

  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text100};

  cursor: pointer;

  border-bottom: 2px solid transparent;

  transition: border-bottom 0.3s ease-in-out;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary600};
  }

  .index {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary600};
  }

  .label {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text600};
  }
`;
