import React from 'react';

import WorkItems from '../WorkItems/index';

import Content from '../Common/Content';
import Wrapper from '../Common/Wrapper';

import { WorksContainer, WorksInfo } from './styled';

const Works = () => (
  <>
    <Wrapper>
      <Content>
        <WorksInfo>
          <h1>My Works</h1>
          <p>Here are various projects I've worked on recently.</p>
        </WorksInfo>
        <WorksContainer>
          <WorkItems />
        </WorksContainer>
      </Content>
    </Wrapper>
  </>
);

export default Works;
