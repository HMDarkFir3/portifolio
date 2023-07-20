import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  padding: 32px 0;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-top: 1px solid ${({ theme }) => theme.colors.primary600};

  .name {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text100};
  }

  .social {
    display: flex;
    gap: 20px;
  }

  .copyright {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text600};
  }
`;
