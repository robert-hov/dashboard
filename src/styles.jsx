import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    @media (max-width: 1920px) {
      font-size: 16px;
    }
    @media (max-width: 1440px) {
      font-size: 12px;
    }
    @media (max-width: 1366px) {
      font-size: 10px;
    }
    @media (max-width: 1024px) {
      font-size: 9px;
    }
  }
  
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  .container {
    width: 85.651%;
    margin: 0 auto;
  }
  
  .img-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    
    &::after {
      position: absolute;
      display: block;
      
    }
  }

  .img-container img,
  .img-container svg {
    max-height: 100%;
    max-width: 100%;
  }
  
  .hidden {
    display: none;
  }
`

export default GlobalStyle