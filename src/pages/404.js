import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import Wrapper from '../components/Common/Wrapper';
import Content from '../components/Common/Content';
import NotFound from '../components/NotFound/index';
// MOVING MOST OF THIS TO NTOFOUND
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <Content>
        <NotFound />
      </Content>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
