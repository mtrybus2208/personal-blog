import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    background:${props => props.theme.background.base};
  }
  
  body {
    font-family: roboto, sans-serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    color: ${props => props.theme.color};
    background:${props => props.theme.background.base};
  }

  .material-icons {
    font-family: 'Material Icons';
  }
`;

export default GlobalStyles;