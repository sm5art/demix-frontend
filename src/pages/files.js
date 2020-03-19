import React from "react"

import Layout from "../components/layout"
import FileList from '../components/FileList';
import SEO from "../components/seo"
import { rhythm } from '../utils/typography';


class FilePage extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  render() { 
    return  (<Layout isLoggedIn>
        <SEO title="My files" />
        <div style={{paddingTop:rhythm(0.5)}}>
          <FileList/>
        </div>
      </Layout>
    );
  }
}

export default FilePage;