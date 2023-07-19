import styled from "styled-components";

export const Container = styled.a`
  border-bottom: 2px solid ${({ theme }) => theme.colors.background};

  cursor: pointer;
  transition: border-bottom 0.3s ease-in-out;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary600};
  }
`;
