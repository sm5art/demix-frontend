import React from "react";
import { Button } from 'antd';

import Layout from "../components/layout";
import Jumbotron from '../components/jumbotron';
import SEO from "../components/seo";

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
        <Jumbotron/>
      </Layout>
    );
  } 
}
export default IndexPage
