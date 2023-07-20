import styled, { css } from "styled-components";

interface ContainerProps {
  isVisible: boolean;
}

export const Container = styled.nav<ContainerProps>`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  @media (max-width: 796px) {
    justify-content: center;

    ${({ isVisible }) =>
      !isVisible &&
      css`
        display: none;
      `}
  }

  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;

    list-style: none;

    @media (max-width: 796px) {
      flex-direction: column;
    }
  }

  .item {
    display: flex;
    flex-direction: column;
    gap: 8px;

    padding: 8px 0;

    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text100};

    cursor: pointer;

    .listItemWrapper {
      display: flex;
      gap: 8px;

      .index {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.primary600};
      }

      .label {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.text600};
      }
    }

    .bar {
      height: 2px;

      border-radius: 2px;

      transition: all 0.3s ease-in-out;
      animation: barScaleRevert 0.3s ease-in-out;

      @keyframes barScaleRevert {
        from {
          width: 100%;
        }
        to {
          width: 0;
        }
      }
    }

    &:hover {
      .bar {
        background-color: ${({ theme }) => theme.colors.primary600};

        animation: barScale 0.3s ease-in-out;

        @keyframes barScale {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      }
    }
  }
`;
