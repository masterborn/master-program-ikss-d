import { createGlobalStyle } from 'styled-components';

import { getColor, getFontFamily, getFontWeight, getMedias } from '@styles/utils';

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  *::-webkit-scrollbar {
    display: none;
}

  body {
    color: ${getColor('steel')};
    font-family: ${getFontFamily('Mulish')};
    max-width: 100%;
    overflow-x: hidden;
  }
  

  h1,h2,h3,h4,h5 {
    color: ${getColor('navy')};
    letter-spacing: -0.015em;
  }
  
  h1, h2{
    font-weight: ${getFontWeight('extraBold')};
  }
  
  h3, h4, h5 {
    font-weight: ${getFontWeight('bold')};
  }
  
  h1 {
    font-size: 56px;
    line-height: 72px;
  }
  
  h2 {
    font-size: 40px;
    line-height: 56px;
  }
  
  h3 {
    font-size: 32px;
    line-height: 44px;
  }
  
  h4 {
    font-size: 24px;
    line-height: 32px;
  }
  
  h5 {
    font-size: 18px;
    line-height: 24px;
  }

  p {
    letter-spacing: -0.015em;
    line-height: 32px;
    font-weight: ${getFontWeight('regular')};
    font-size: 16px;
  }

  @media (max-width: ${getMedias('mobile')}) {
    h1 {
      line-height: 44px;
      font-size: 32px;
    }
    
    p {
      font-size: 14px;
      line-height: 28px;
    }
  }

  button {
    background: none;
    border: none;
  }
`;

export default GlobalStyles;
