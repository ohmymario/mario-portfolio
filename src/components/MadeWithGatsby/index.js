import React from 'react';
import gatsbylogo from '../../images/madewith/gatsbyjs-icon.svg';
import { MadeWrapper } from './styled';

const MadeWithGatsby = () => (
  <MadeWrapper>
    <p>
      made with <img src={gatsbylogo} alt="gatsby logo" />
      Gatsby
    </p>
  </MadeWrapper>
);

export default MadeWithGatsby;
