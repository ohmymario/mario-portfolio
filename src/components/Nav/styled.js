import styled from 'styled-components';
import media from 'styled-media-query';

// add margin to all but last item - 48px then 18px
// add padding to entire ul wrapper - 40px then 25px

export const Wrapper = styled.nav`
  ul {
    position: relative;
    display: flex;
    padding: 0 40px;
    width: 100%;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 32px;

    li {
      &:not(:last-child) {
        margin-right: 48px;
      }
      a {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 700;
        text-decoration: none;
        color: var(--bg-white);

        &:hover {
          color: var(--mainColor);
        }

        svg {
          width: 20px;
          height: 20px;
          margin-right: 12px;
        }
      }
    }
  }

  ${media.lessThan('large')`
       ul {
        padding: 0 20px;
        li {
          &:not(:last-child) {
            margin-right: 18px;
          }
           a {
                font-size: 18px;
           }
       }

    `}
`;

// border-color: #66afe9;
//     outline: 0;
//     -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
//     box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
