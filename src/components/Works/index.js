import React from 'react';

import WorkItems from '../WorkItems/index';

import Content from '../Common/Content';
import Wrapper from '../Common/Wrapper';

import { WorksContainer } from './styled';

const Works = () => (
  <>
    <Wrapper>
      <Content>
        <h1>My Works</h1>
        <p>various projects i've made</p>
        <WorksContainer>
          <WorkItems />
        </WorksContainer>
      </Content>
    </Wrapper>
  </>
);

export default Works;
