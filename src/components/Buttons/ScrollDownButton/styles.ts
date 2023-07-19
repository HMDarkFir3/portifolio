import styled from "styled-components";

export const Container = styled.button`
  display: flex;

  max-width: fit-content;

  margin: 20px 0 0 104px;

  overflow: hidden;

  .scrollLink {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .scroll {
    position: relative;

    width: 24px;
    height: 36px;

    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.primary600};
    border-radius: 12px;

    &::before {
      content: "";

      position: absolute;
      top: 4px;
      left: 0;
      right: 0;

      width: 2px;
      height: 8px;

      margin: auto;

      background-color: ${({ theme }) => theme.colors.primary600};
      border-radius: 2px;

      animation: scrollDown 1s ease-in-out infinite alternate;

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
