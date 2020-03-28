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
import { connect } from 'react-redux';

import Head from "./header"
import Foot from './footer'
import Container from './container'
import LoginModal from './LoginModal';
import theme from '../theme';
import { startup } from '../redux/startup/actions';

const { Header, Footer, Content } = Layout;

const BACKGROUND_COLOR_SHADE = 1;

class LayoutExtra extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    if(!this.props.init)
    this.props.startup();
  }

  render () {
    return (
      <LayoutS isLoggedIn={this.props.isLoggedIn}>
        {this.props.children}
      </LayoutS>
    );
  }
}

const LayoutS = ({children, isLoggedIn}) => 
{
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
    <Layout style={{minHeight:'100vh', background: theme.colors.primary[BACKGROUND_COLOR_SHADE]}}>
      <Header style={{padding: 0, background:'inherit'}}>
        <Container style={{paddingLeft:theme.spacing.small, paddingRight:theme.spacing.small}}>
          <Head siteTitle={data.site.siteMetadata.title} isLoggedIn={isLoggedIn}/>
        </Container>
      </Header>
      <Content>
        <LoginModal/>
        {children}
      </Content>
      <Footer style={{padding: 0, background: 'inherit'}}>
        <Container><Foot/></Container>
      </Footer>
    </Layout>
  ) 
};

LayoutS.propTypes = {
  children: PropTypes.node.isRequired,
}

export default connect(state=>({isLoggedIn: state.auth.token !== null, init: state.startup.init}), dispatch=>({startup: ()=>dispatch(startup())}))(LayoutExtra);
