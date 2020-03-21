import React from "react"

import Layout from "../components/layout";
import Container from '../components/container';
import FileList from '../components/FileList';
import SEO from "../components/seo"
import theme from '../theme';

const FilePage = () =>  
  (<Layout isLoggedIn>
    <SEO title="My files" />
      <Container style={{paddingLeft: theme.spacing.medium, paddingRight: theme.spacing.medium}}>
        <FileList style={{marginTop: theme.spacing.medium}}/>
      </Container>
  </Layout>);


export default FilePage;