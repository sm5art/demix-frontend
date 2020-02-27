import React from "react"
import { Link } from "gatsby"

import { scale, rhythm } from '../utils/typography';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { API_BASE } from '../constants';

class LoginPage extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    componentDidMount() {
        window.location.replace(`${API_BASE}/login`);
    }

    render () {
        return (
        <Layout>
            <SEO title="Redirecting to login" />
            redirecting to login
        </Layout>
        );
    }
}
  

export default LoginPage
