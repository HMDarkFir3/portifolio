import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  max-width: fit-content;

  margin: 20px 0 0 104px;

  &:hover {
    .scroll {
      background-color: ${({ theme }) => theme.colors.primary600};

      .scrollBar {
        background-color: ${({ theme }) => theme.colors.text100};
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }

  .scrollLink {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .scroll {
    width: 24px;
    height: 36px;

    padding: 4px;

    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.primary600};
    border-radius: 12px;

    transition: background-color 0.3s ease-in-out;

    .scrollBar {
      width: 2px;
      height: 6px;

      margin: 0 auto;

      background-color: ${({ theme }) => theme.colors.primary600};
      border-radius: 2px;

      transition: background-color 0.3s ease-in-out;
      animation: scrollDown 1s ease-in-out infinite alternate;
      z-index: 2;

      @keyframes scrollDown {
        0% {
          transform: translateY(0px);
        }
        100% {
          transform: translateY(4px);
        }
      }
    }

    & + span {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.primary600};
    }

    @media (max-width: 768px) {
      margin-left: 44px;
    }
  }
`;
