/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Layout } from 'antd';

import Head from "./header"
import Foot from './footer'
import Container from './container'
import theme from '../theme';

const { Header, Footer, Content } = Layout;



const LayoutS = ({ children, isLoggedIn })=> {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  return (
    <Layout style={{minHeight:'100vh'}}>
      <Header style={{padding: 0,}}>
        <Container style={{paddingLeft:theme.spacing.small, paddingRight:theme.spacing.small}}>
          <Head siteTitle={data.site.siteMetadata.title} isLoggedIn={isLoggedIn}/>
        </Container>
      </Header>
      <Content>
        {children}
      </Content>
      <Footer style={{padding: 0}}>
        <Container><Foot/></Container>
      </Footer>
    </Layout>
) };

LayoutS.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutS;
