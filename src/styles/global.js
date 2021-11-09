import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  /* everything else */
  /* roboto 400, 700, 900 */

  /* nav links */
  /* Rubik 400,700,900 */

  ${normalize}

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    line-height: 1;
    font-family: 'Roboto', sans-serif;
    --textColor: #4a5568;
    --textSecondColor: #858d95;
    --mainColorValue: 90, 103, 216;
    --mainColor: rgb(var(--mainColorValue));
    --gray1: #f7fafc;
    --gray2: #edf2f7;
    --gray3: #e2e8f0;
    --gray4: #cbd5e0;
    --gray5: #a0aec0;
    --gray6: #718096;
    --gray7: #4a5568;
    --gray8: #2d3748;
    --gray9: #1a202c;
    --gray10: #1D2B3D;
    --bg-black: #000;
    --bg-white: #fff;
    font-size: 18px;
    line-height: 28px;
  }

  a {
    text-decoration: none;
    color: var(--gray);
    font-weight: bold;
  }

  ${media.lessThan('large')`
    h1{
        font-size: 32px;
        line-height: initial;
    }
  `}

  ${media.lessThan('medium')`
    h1{
        font-size: 28px;
    }

    p {
      font-size: 16px;
    }
  `}

  ${media.lessThan('small')`

    h1{
        font-size: 24px;
    }


    h3{
        font-size: 12px;
    }

    p{
        font-size: 16px;
    }
  `}
`;

export default GlobalStyles;
