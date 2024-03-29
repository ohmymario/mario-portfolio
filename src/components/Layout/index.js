import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav';
import Footer from '../Footer';
import BackgroundImage from '../BackgroundImage';
import { Wrapper } from './styled';
import MadeWithGatsby from '../MadeWithGatsby';

import GlobalStyles from '../../styles/global';

const Layout = ({ children }) => (
  <>
    <BackgroundImage>
      <GlobalStyles />
      <Wrapper>
        <Nav />
        {children}
        <Footer />
        <MadeWithGatsby />
      </Wrapper>
    </BackgroundImage>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
