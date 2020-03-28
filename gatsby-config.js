module.exports = {
  siteMetadata: {
    seoTitle: `unmix`,
    title: `unmix`,
    description: `Seperate your tracks seamlessly. Unmix retrieves vocals, bass, drums, and others seperated from a finalized mp3 or wav.`,
    author: `@arturk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-160420287-1",
      }
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: 'less'
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

/*
{
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-160420287-1",
      }
    },*/