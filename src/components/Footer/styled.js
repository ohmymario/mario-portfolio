import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px auto;

  .attribution {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5vw;
    margin-bottom: 10px;
    color: var(--gray4);
    font-size: 12px;
    letter-spacing: 0.2px;
    a {
      font-weight: normal;
      text-decoration: underline;
      transition: var(--link-speed);
      &:hover {
        color: var(--gray1);
      }
    }
  }
  .footer-socials {
    color: var(--gray1);
    display: flex;
    gap: 1vw;
    align-items: center;
    justify-content: center;
    a {
      transition: var(--link-speed);
      &:hover {
        color: var(--gray4);
      }
    }
    * {
      font-size: 1.75rem;
    }
  }
`;
