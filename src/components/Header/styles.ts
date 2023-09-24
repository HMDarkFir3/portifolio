import styled, { css } from 'styled-components';

import { HEADER_HEIGHT } from '@/utils/constants';

interface ContainerProps {
  isScrolled: boolean;
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.background};

  transition: box-shadow 0.25s ease-in-out;

  z-index: 3;

  ${({ theme, isScrolled }) =>
    isScrolled
      ? css`
          box-shadow: 0px 1px 1px 0px ${theme.colors.primary600};
        `
      : css`
          box-shadow: 0px 1px 1px 0px ${theme.colors.boxShadow};
        `}

  .isScrolled {
    box-shadow: 0px 1px 1px 0px ${({ theme }) => theme.colors.primary600};
  }

  .wrapper {
    display: flex;
    align-items: center;

    width: 100%;
    height: ${HEADER_HEIGHT}px;

    padding: 0 20px;

    background-color: ${({ theme }) => theme.colors.background};

    z-index: 4;
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

    z-index: 3;
    transition: all 0.5s ease-in-out;
  }

  @media (max-width: 796px) {
    .menuActive {
      display: flex;
      top: 88px;

      overflow: hidden;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

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

    transition: all 0.5s ease-in-out;

    &:nth-child(1) {
      animation: barOneRevert 0.5s ease-in-out;
    }

    &:nth-child(3) {
      animation: barThreeRevert 0.5s ease-in-out;
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
      animation: barOne 0.5s ease-in-out forwards;
    }

    &:nth-child(2) {
      transform: scale(0);
      opacity: 0;
    }

    &:nth-child(3) {
      animation: barThree 0.5s ease-in-out forwards;
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
