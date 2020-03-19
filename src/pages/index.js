import React from "react";
import { navigate } from 'gatsby';

import Layout from "../components/layout";
import Jumbotron from '../components/jumbotron';
import Sample from '../components/sample';
import Container from '../components/container';
import LoginWith from '../components/LoginWith';
import SEO from "../components/seo";
import theme from '../theme';

class IndexPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    //if(window.localStorage.getItem('access')){
      //navigate('/upload');
    //}
  }

  render () {
    return (
      <Layout>
        <SEO title="Home" />
        <Container style={{paddingLeft: theme.spacing.medium, paddingRight: theme.spacing.medium}}>
          <Jumbotron/>
        </Container>
        <Sample/>
        <Container style={{paddingLeft: theme.spacing.medium, paddingRight: theme.spacing.medium}}>
          <LoginWith/>
        </Container>
      </Layout>
    );
  } 
}
export default IndexPage
