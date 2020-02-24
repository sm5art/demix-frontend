import React from "react"
import { Link } from "gatsby";
import { Button, Upload, Icon } from 'antd';

import Layout from "../components/layout"
import UploadContainer from '../components/upload';
import SEO from "../components/seo"


const IndexPage = ()=> 
(<Layout>
    <SEO title="Home" />
    <UploadContainer/>
  </Layout>
);


export default IndexPage
