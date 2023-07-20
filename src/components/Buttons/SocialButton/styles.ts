import styled from "styled-components";

export const Container = styled.a`
  border-bottom: 2px solid ${({ theme }) => theme.colors.background};

  cursor: pointer;

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
`;
