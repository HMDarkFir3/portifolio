import styled from "styled-components";

export const Container = styled.button`
  max-width: fit-content;

  padding: 16px 24px;

  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary600};
  border-radius: 4px;

  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary600};

  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary600};
    color: ${({ theme }) => theme.colors.text100};
  }
`;
