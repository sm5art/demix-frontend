import React from 'react';

import Layout from '../components/layout';
import Container from '../components/container';
import TOS from '../components/tos';
import SEO from '../components/seo';
import theme from '../theme';

const IndexPage = () => (
  <Layout>
    <SEO title="Terms of service" />
    <Container style={{ paddingLeft: theme.spacing.medium, paddingRight: theme.spacing.medium }}>
      <TOS />
    </Container>
  </Layout>
);

export default IndexPage;
