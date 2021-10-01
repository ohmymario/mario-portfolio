import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const WorksContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const WorkItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;

  a {
    width: calc(33.3333% - 20px);
    border: 1px solid var(--gray5);
    max-height: 200px;

    ${media.lessThan('large')`
            width: calc(50% - 10px);
        `}

    ${media.lessThan('medium')`
            width: 100%;
        `}

    ${media.lessThan('small')`
            width: 100%;
        `}
  }
`;

export const WorkImage = styled(Img)`
  height: 100%;
  width: 100%;
`;
