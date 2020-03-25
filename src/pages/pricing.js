import React from "react";

import Layout from "../components/layout";
import Container from '../components/container';
import Pricing from '../components/PricingTier';
import SEO from "../components/seo";

const PricingPage = () =>
  (<Layout>
    <SEO title="Pricing" />
    <Container>
      <Pricing/>
    </Container>
  </Layout>);
export default PricingPage;