import React from 'react';

import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import Wrapper from '../components/Common/Wrapper';
import Content from '../components/Common/Content';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <Content>
        <h2>Looks like there's nothing here. Let's go back home</h2>
      </Content>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
