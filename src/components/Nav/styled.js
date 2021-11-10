import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.nav`
  ul {
    position: relative;
    display: flex;
    padding: 0;
    width: 100%;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 32px;

    li {
      &:not(:last-child) {
        margin-right: 2px;
      }
      a {
        padding: 0 15px 0 15px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 700;
        text-decoration: none;
        color: var(--bg-white);
        transition: color 0.25s;

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
        li {
          &:not(:last-child) {
          }
           a {
                font-size: 18px;
           }
       }

    `}
`;
