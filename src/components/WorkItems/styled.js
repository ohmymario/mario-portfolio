import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const WorkItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;

  .work-container {
    width: calc(33.3333% - 20px);
    border: 1px solid var(--gray5);
    max-height: 200px;
    position: relative;

    ${media.lessThan('large')`
        width: calc(50% - 10px);
      `}

    ${media.lessThan('medium')`
        width: 100%;
    `}

    a {
      position: relative;
      width: 100%;
      height: 100%;
      display: block;
      overflow: hidden;
      &:after {
        position: absolute;
        content: '';
        background: rgba(0, 0, 0, 0.75);
        z-index: 999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 0.35s;
      }
    }

    .work-desc {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      z-index: 999;
      padding: 15px 15px 15px 15px;
      transition: all 0.35s;
      pointer-events: none;
      color: white;

      h3 {
        text-align: center;
        font-size: 1.5rem;
        font-weight: normal;
        justify-content: center;
      }

      p {
        font-size: 0.85rem;
      }

      h3,
      p {
        margin: 0;
        text-align: center;
        color: white;
      }
    }

    &:hover .work-desc {
      opacity: 1;
    }

    &:hover a:after {
      opacity: 1;
      background-image: linear-gradient(rgba(0, 0, 0, 0.75));
    }

    &:hover img {
      filter: blur(1px);
    }
  }
`;

export const WorkImage = styled(Img)`
  height: 100%;
  width: 100%;
`;
