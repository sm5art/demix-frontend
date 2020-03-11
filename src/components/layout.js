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
import { rhythm } from '../utils/typography';

const { Header, Footer, Content } = Layout;

const CONTAINER_PADDING = 0.5

const LayoutS = ({ children, isLoggedIn }) => {
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
      <Header style={{padding: 0}}><Container><Head siteTitle={data.site.siteMetadata.title} isLoggedIn={isLoggedIn}/></Container></Header>
      <Content>
        <Container style={{paddingLeft:rhythm(CONTAINER_PADDING), paddingRight:rhythm(CONTAINER_PADDING)}}>{children}</Container>
      </Content>
      <Footer style={{padding: 0}}><Container><Foot/></Container></Footer>
    </Layout>
  )
}

LayoutS.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutS
