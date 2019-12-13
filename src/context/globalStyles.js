import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
	${normalize}
	
  html {
    &::-webkit-scrollbar-track { 
      background-color: #181a1d;
    }

    &::-webkit-scrollbar {
      width: 12px;
      background-color: #181a1d;
    }

    &::-webkit-scrollbar-thumb {
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

`;

 

export default GlobalStyles;