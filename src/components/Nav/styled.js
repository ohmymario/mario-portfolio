import styled from 'styled-components';
import media from 'styled-media-query';

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
