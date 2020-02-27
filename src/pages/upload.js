import React from "react"

import Layout from "../components/layout"
import UploadContainer from '../components/upload';
import SEO from "../components/seo"
import { getUrlVars } from '../utils/url';
import { rhythm } from '../utils/typography';


class UploadPage extends React.Component {
  state = {
    access: null,
  }
  constructor(props, context){
    super(props, context);
  }

  componentDidMount() {
    const vars = getUrlVars();
    if(vars['access']) {
      window.localStorage.setItem('access', vars['access'])
      this.setState({access: vars['access']})
    }
    if(!window.localStorage.getItem('access')){
      window.location.replace('/');
    }
  }

  render() { 
    return  (<Layout isLoggedIn={true}>
        <SEO title="Upload a file" />
        <div style={{paddingTop:rhythm(0.5)}}>
          <UploadContainer access={this.state.access}/>
        </div>
      </Layout>
    );
  }
}

export default UploadPage;
