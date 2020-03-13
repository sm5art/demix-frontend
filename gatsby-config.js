module.exports = {
  siteMetadata: {
    seoTitle: `unmix - Seperate vocals from music files`,
    title: `unmix`,
    description: `Seperate your tracks seamlessly. Unmix retrieves vocals, bass, drums, and others seperated from a finalized mp3 or wav.`,
    author: `@arturk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-160420287-1",
      }
    }
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