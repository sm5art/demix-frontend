import React from "react";
import { navigate } from 'gatsby';

import Layout from "../components/layout";
import Jumbotron from '../components/jumbotron';
import Sample from '../components/sample';
import Container from '../components/container';
import LoginWith from '../components/LoginWith';
import SEO from "../components/seo";
import theme from '../theme';

const IndexPage = ()=>
(<Layout>
  <SEO title="Home" />
  <Container style={{paddingLeft: theme.spacing.medium, paddingRight: theme.spacing.medium}}>
    <Jumbotron/>
  </Container>
  <Sample/>
  <Container style={{paddingLeft: theme.spacing.medium, paddingRight: theme.spacing.medium, paddingBottom: theme.spacing.large}}>
    <LoginWith/>
  </Container>
  <Container>
    <div id="767059413">
                <script type="text/javascript">
                    {`try {
                        window._mNHandle.queue.push(function (){
                            window._mNDetails.loadTag("767059413", "728x90", "767059413");
                        });
                    }
                    catch (error) {}`}
                </script>
    </div>
  </Container>
</Layout>
);
  
export default IndexPage;