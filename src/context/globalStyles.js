import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    background:${props => props.theme.background.base};
    &::-webkit-scrollbar-track
    { 
      background-color: #181a1d;
    }

    &::-webkit-scrollbar
    {
      width: 12px;
      background-color: #181a1d;
    }

    &::-webkit-scrollbar-thumb
    {
      background-color: #111; 
    }
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

  h1 {
    font-family: roboto;
    font-weight: 400;
    margin-bottom: 35px;
    font-size: 28px;
  }

  p {
    font-weight: 100;
    letter-spacing: 1.2px;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export default GlobalStyles;