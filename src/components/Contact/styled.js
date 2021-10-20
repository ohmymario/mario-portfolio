import styled from 'styled-components';
import media from 'styled-media-query';

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.lessThan('medium')`
        flex-wrap: wrap;
  `}
`;

export const InfosWrapper = styled.div`
  flex-basis: 70%;

  ${media.lessThan('medium')`
        flex-basis: auto;
  `}

  .contact-message {
    h1 {
      font-size: 46px;
      margin-bottom: 12px;
    }

    p {
      /* max-width: 560px; */
      font-size: 25px;
      margin-bottom: 32px;
    }
  }

  .contact-links {
    .contact-link {
      margin-bottom: 10px;
      margin-top: 5px;
      a {
        color: var(--gray6);
        text-decoration: underline;
        transition: all 0.25s;
        &:hover {
          color: var(--gray8);
        }
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  padding: 18px;
  margin: 0 auto;

  img {
    width: 250px;

    ${media.lessThan('large')`
            width: 150px;
    `}
  }
`;
