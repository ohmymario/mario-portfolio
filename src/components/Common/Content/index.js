import React from 'react';
import PropTypes from 'prop-types';

import { ContentWrapper } from './styled';

const Content = ({ children }) => (
  <>
    <ContentWrapper>{children}</ContentWrapper>
  </>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
