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
    margin-bottom: 20px;
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

  .contact-form {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    ${media.lessThan('medium')`
      margin-bottom: 20px;
    `}

    p {
      margin: 0;
      padding: 0;
    }

    input,
    textarea {
      width: 100%;
      margin: 0;
      padding: 0;
      border: 0;
      width: 100%;
      height: 100%;
      border: 1px solid var(--gray4);
      border-radius: 2px;
      background: var(--gray3);
      transition: all 0.3s ease;

      &:focus {
        border-color: var(--mainColor);
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08),
          0 0 8px rgba(var(--mainColorValue), 0.6);
      }

      &:hover {
        border-color: rgba(var(--mainColorValue), 0.5);
      }
    }

    input {
      padding: 5px 10px;
    }

    textarea {
      padding: 10px;
      min-height: 150px;
    }

    .form-name {
      flex-basis: calc(50% - 10px);
      ${media.lessThan('medium')`
        flex-basis: 100%;
      `}
    }
    .form-email {
      flex-basis: calc(50% - 10px);
      ${media.lessThan('medium')`
        flex-basis: 100%;
      `}
    }
    .form-subject {
      width: 100%;
    }
    .form-message {
      width: 100%;
    }

    .form-submit {
      border: none;
      font-size: 20px;
      color: var(--gray7);
      padding: 7px 15px;
      margin-left: auto;
      background: var(--gray3);
      border: 1px solid var(--gray4);
      border-radius: 2px;
      cursor: pointer;
      transition: all 0.25s;

      &:hover {
        color: var(--gray8);
        background: var(--gray4);
        border: 1px solid var(--gray5);
      }

      ${media.lessThan('large')`
        padding: 7px 25px;
        margin: 0 auto;
      `}

      ${media.lessThan('medium')`
        flex-basis: 100%;
      `}
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
