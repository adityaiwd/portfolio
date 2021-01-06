import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  @media only screen and (max-width:62.5em){
        font-size: 56.25%;
    } 
    @media only screen and (max-width:56.25em){
        font-size: 50%;
    } 
    @media only screen and (max-width:37.5em){
        font-size: 43.75%;
    } 
}

body {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 1.6;
  background-color: #F7F7FF;
  background-size: cover;
  background-repeat: no-repeat;
  
  min-height: 100vh;
}
`;

export default GlobalStyle;
