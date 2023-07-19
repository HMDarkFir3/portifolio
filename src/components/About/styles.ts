import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  gap: 80px;

  padding: 0 20px;

  z-index: 1;

  @media (max-width: 768px) {
    gap: 20px;
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
