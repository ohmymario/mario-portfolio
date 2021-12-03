import styled from 'styled-components';
import media from 'styled-media-query';

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .gatsby-image-wrapper {
    width: 575px;
    height: 100%;
    object-fit: cover;
    object-position: center;
    img {
      width: 100%;
      height: 100%;
    }
  }

  ${media.lessThan('large')`
    width: 100%;
  `}

  ${media.lessThan('medium')`
  `}

  ${media.lessThan('small')`
    `}
`;

export const NotFoundWrapper = styled.div`
  color: var(--gray7);
  font-weight: 300;
  line-height: 1.2;
  text-align: center;
  padding: 20px 0 20px 0;
  ${media.lessThan('medium')`
    font-size: 1rem;
  `}

  h1 {
    font-size: 4.5rem;
    margin-bottom: 20px;
    color: var(--gray8);
    ${media.lessThan('medium')`
      font-size: 2.75rem;
      margin-bottom: 10px;
    `}
  }

  h2 {
    margin: 0;
    font-weight: inherit;
  }

  a {
    text-decoration: underline;
    transition: color 0.2s;
    &:hover {
      color: var(--mainColor);
    }
  }
`;
