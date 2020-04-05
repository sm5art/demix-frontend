import React from 'react';

import Layout from '../components/layout';
import Container from '../components/container';
import Pricing from '../components/PricingTier';
import SEO from '../components/seo';
import theme from '../theme';

const IndexPage = () => (
  <Layout>
    <SEO title="Pricing" />
    <Container style={{ paddingLeft: theme.spacing.medium, paddingRight: theme.spacing.medium }}>
      <Pricing />
    </Container>
  </Layout>
);

export default IndexPage;
