import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    scrollbar-width: thin;         
    scrollbar-color: #212D45; 
    overflow-x: hidden;

::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color:transparent;
}
::-webkit-scrollbar-thumb {
  background-color:#212D45;
  border-radius: 15px;
}

  }


  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.7rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;






}



  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }

  ul{

  }

  li{
    list-style: outside;

  }

  li #header{
list-style:none;

  }




`;

export default GlobalStyles;