/* eslint-disable quotes */
module.exports = {
  siteMetadata: {
    title: `Kim Love`,
    description: `A portfolio site for a web designer & developer based in Manchester, UK`,
    author: `@mrkimlove`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-1197092-8",
        head: false,
        pageTransitionDelay: 0,
        defer: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kiml.dev`,
        short_name: `kiml.dev`,
        start_url: `/`,
        background_color: `#181818`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/kl-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-exclude',
      options: { paths: ['/work/**'] },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-headers`, // make sure to put last in the array // https://www.gatsbyjs.org/packages/gatsby-plugin-netlify-headers/
  ],
};
