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
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 0.5s;
      }
    }

    .work-desc {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      z-index: 999;
      transition: all 0.3s ease-out;
      pointer-events: none;
    }

    &:hover .work-desc {
      opacity: 1;
    }

    &:hover a:after {
      opacity: 1;
      background-image: linear-gradient(to top, #ca5f5e, #d68584);
    }
  }
`;

export const WorkImage = styled(Img)`
  height: 100%;
  width: 100%;
`;
