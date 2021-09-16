import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  margin: 40px auto;
  color: var(--gray4);
  font-size: 12px;
  letter-spacing: 0.2px;

  a {
    font-weight: normal;
    text-decoration: underline;
    &:hover {
      color: var(--gray1);
    }
  }
`;
