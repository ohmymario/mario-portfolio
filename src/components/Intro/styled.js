import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  background: #fff;
  width: auto;
  display: flex;
  width: 1000px;
  flex-direction: row;
  align-items: center;

  ${media.lessThan('large')`
        width: calc(100% - 300px);
        flex-direction: column;
    `}

  ${media.lessThan('medium')`
        width: calc(100% - 150px);
        flex-direction: column;
    `}

    ${media.lessThan('small')`
        width: calc(100% - 50px);
        flex-direction: column;
    `}
`;
export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 380px;
  height: 100%;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    -moz-object-fit: cover;
    -webkit-object-fit: cover;
    -ms-object-fit: cover;
    object-fit: cover;
    -moz-object-position: center;
    -webkit-object-position: center;
    -ms-object-position: center;
    object-position: center;
  }

  ${media.lessThan('large')`
        width: 100%;
        height: 350px;

        img {
            width: 100%;
            height: 100%;
        }
    `}

  ${media.lessThan('medium')`
        height: 300px;
    `}

    ${media.lessThan('small')`
        height: 250px;
    `}
`;

export const IntroContainer = styled.div`
  padding: 60px;
  margin-bottom: 0;
  width: auto;

  h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    margin-bottom: 12px;
    color: var(--gray8);
    line-height: normal;

    b {
      color: var(--mainColor);
      display: block;
    }
  }

  h3 {
    font-size: 20px;
    letter-spacing: 1.5px;
    color: var(--gray7);
    font-weight: 700;
    margin-bottom: 32px;
    line-height: 1.4;
  }

  ${media.lessThan('large')`
    padding: 36px;
    text-align:center;
    max-width: 450px;
    h1 {
        font-size: 32px;
    }

    h3 {
        margin-bottom: 18px;
        font-size: 24px;
    }

    `}

  ${media.lessThan('medium')`
    h1{

    }
    h3 {
      font-size: 17px;
    }
    `}

  ${media.lessThan('small')`
    padding: 18px;
    h1{
        font-size: 28px;
    }
    `}
`;
