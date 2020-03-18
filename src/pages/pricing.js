import React from "react";
import { Button } from 'antd';

import Layout from "../components/layout";
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
        pricing
      </Layout>
    );
  } 
}
export default IndexPage
