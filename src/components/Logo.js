import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const data = useStaticQuery(graphql`
        query {
        file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
            fixed(width: 64, height: 64) {
                ...GatsbyImageSharpFixed
            }
            }
        }
        }
    `);
  return (
    <Img fixed={data.file.childImageSharp.fixed} />
  );
};
