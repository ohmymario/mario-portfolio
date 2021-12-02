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
  font-weight: 300;
  line-height: 1.2;
  text-align: center;
  ${media.lessThan('medium')`
    color: var(--gray7);
    font-size: 1rem;
  `}
  h2 {
    font-weight: inherit;
    margin-bottom: 0%;
  }
  a {
    font-weight: inherit;
    text-decoration: underline;
  }
`;
