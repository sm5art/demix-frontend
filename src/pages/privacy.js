import React from 'react';

import Layout from '../components/layout';
import Container from '../components/container';
import Privacy from '../components/privacy';
import SEO from '../components/seo';
import theme from '../theme';

const IndexPage = () => (
  <Layout>
    <SEO title="Terms of service" />
    <Container style={{ paddingLeft: theme.spacing.medium, paddingRight: theme.spacing.medium }}>
      <Privacy />
    </Container>
  </Layout>
);

export default IndexPage;
