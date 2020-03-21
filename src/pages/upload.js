import React from "react"
import { navigate } from 'gatsby';
import { connect } from 'react-redux';

import Layout from "../components/layout"
import UploadContainer from '../components/upload';
import Container from '../components/Container';
import SEO from "../components/seo"
import { login } from '../redux/auth/actions';
import { getUrlVars } from '../utils/url';
import theme from '../theme';


class UploadPage extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  componentDidMount() {
    const vars = getUrlVars();
    const { login, token } = this.props;
    if(vars['access']) {
      login(vars['access']);
    }
    else if(!token){
      navigate('/');
    }
  }

  render() { 
    return  (
      <Layout isLoggedIn>
        <SEO title="Upload a file" />
        <Container style={{paddingLeft: theme.spacing.medium, paddingRight: theme.spacing.medium}}>
          <UploadContainer style={{marginTop: theme.spacing.medium}}/>
        </Container>
      </Layout>
    );
  }
}

const connectDispatch = (dispatch) => ({login:(token)=>dispatch(login(token))})
export default connect(state=>({token: state.auth.token}), connectDispatch)(UploadPage);