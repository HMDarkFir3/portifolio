import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;

    background-color: ${({ theme }) => theme.colors.background};

    overflow-x: hidden; 
  }

  a {
    color: inherit;
    text-decoration: none;
  }

 
  button {
    background-color: transparent;
    border: none;
    
    cursor: pointer;
  }
  
`;
