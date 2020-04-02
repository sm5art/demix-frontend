const path = require('path');

module.exports = {
  siteMetadata: {
    seoTitle: 'unmix',
    title: 'unmix',
    description: 'Remove vocals, drums, bass and synth with state of the art AI. Built for DJing, music production and karaoke alike. Get started for free.',
    keywords: 'vocal eliminator remove vocals from a song karaoke vocal remover vocal remover online vocal remover remove vocals from song vocal remover app voice remover vocal remover online voice remover online remove vocals remove vocals from mp3 artificial intelligence stems maker make stems remove drums separate drums synth',
    author: '@arturk',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    { resolve: 'gatsby-plugin-less', options: { javascriptEnabled: true } },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-160420287-1',
      },
    },
  ],
};

/*

    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: 'less',
      },
    }, */
