import React from "react";
import { navigate } from 'gatsby';

import Layout from "../components/layout";
import Jumbotron from '../components/jumbotron';
import Sample from '../components/sample';
import Container from '../components/container';
import LoginWith from '../components/LoginWith';
import SEO from "../components/seo";
import Ad from '../components/Ad';
import theme from '../theme';

const IndexPage = ()=>
(<Layout>
  <SEO title="Home" />
  <Container style={{paddingLeft: theme.spacing.medium, paddingRight: theme.spacing.medium}}>
    <Jumbotron/>
  </Container>
  <Sample/>
  <Container style={{paddingLeft: theme.spacing.medium, paddingRight: theme.spacing.medium, paddingBottom: theme.spacing.large}}>
    <LoginWith/>
  </Container>
  <Container>
    <Ad/>
  </Container>
</Layout>
);
  
export default IndexPage;