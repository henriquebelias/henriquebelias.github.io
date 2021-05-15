import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` * , *:after , *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  body {
    font-family: Roboto, sans-serif;
    font-size: 100%;
  }
`;

export default GlobalStyle;
