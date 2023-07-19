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
