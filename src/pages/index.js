import React from "react";
import { Button } from 'antd';

import Layout from "../components/layout";
import Jumbotron from '../components/jumbotron';
import Sample from '../components/sample';
import Container from '../components/container';
import SEO from "../components/seo";
import theme from '../theme';

class IndexPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    if(window.localStorage.getItem('access')){
      window.location.replace('/upload');
    }
  }

  render () {
    return (
      <Layout>
        <SEO title="Home" />
        <Container style={{paddingLeft:theme.spacing.medium, paddingRight:theme.spacing.medium}}><Jumbotron/></Container>
        <Sample/>
      </Layout>
    );
  } 
}
export default IndexPage
