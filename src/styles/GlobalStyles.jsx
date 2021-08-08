import { createGlobalStyle } from 'styled-components';

import { getColor } from '@styles/utils';

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    color: ${getColor('steel')};
  }

  h1,h2,h3,h4,h5 {
    color: ${getColor('navy')};
  }
`;

export default GlobalStyles;
