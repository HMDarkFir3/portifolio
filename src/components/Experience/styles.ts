import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  height: 100vh;

  padding: 0 20px;

  .wrapper {
    display: flex;
    gap: 80px;
  }

  @media (max-width: 768px) {
    .wrapper {
      gap: 20px;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  .iconLink {
    border-bottom: 2px solid ${({ theme }) => theme.colors.background};

    cursor: pointer;
    transition: border-bottom 0.3s ease-in-out;

    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary600};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin: 40px 0;

  .grettings {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary600};
  }

  .resume {
    width: 70%;

    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text600};
  }

  @media (max-width: 768px) {
    .resume {
      width: 100%;
    }
  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;

  .name {
    font-size: 3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text100};
  }

  .role {
    font-size: 3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text600};
  }

  @media (max-width: 768px) {
    .name,
    .role {
      font-size: 2rem;
    }
  }
`;

export const ScrollDown = styled.button`
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
