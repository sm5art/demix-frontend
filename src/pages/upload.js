import React from "react"
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import { Spin } from 'antd';

import Layout from "../components/layout"
import UploadContainer from '../components/upload';
import FileList from '../components/FileList';
import Container from '../components/container';
import SEO from "../components/seo"
import { login } from '../redux/auth/actions';
import { getUrlVars } from '../utils/url';
import theme from '../theme';


class UploadPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    const vars = getUrlVars();
    const { login, token } = this.props;
    if(vars['access']) {
      login(vars['access']);
      navigate('/upload')
    }
    else {
      setTimeout(this.redirect, 500)
    }
  }

  redirect () {
    if(!this.props.token)
      navigate('/')
  }

  render() { 
    const { token } = this.props;
    return  (
      <Layout>
        <SEO title="Upload a file" />
        <Container style={{paddingLeft: theme.spacing.medium, paddingRight: theme.spacing.medium, paddingBottom: theme.spacing.large}}>
          {token ? 
          <>
            <UploadContainer style={{marginTop: theme.spacing.small}}/>
            <FileList style={{marginTop: theme.spacing.large}}/>
          </> : <Spin size="large"/>}
        </Container>
      </Layout>
    );
  }
}

const connectDispatch = (dispatch) => ({login:(token)=>dispatch(login(token))})
export default connect(state=>({token: state.auth.token,}), connectDispatch)(UploadPage);