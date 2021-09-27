module.exports = {
  siteMetadata: {
    title: `Mario's Portfolio`,
    // NEED TO UPDATE TO ACTUAL LINK
    author: `Mario Ballesteros`,
    siteUrl: `https://www.soontobemyportfolio.com`,
    description: `my portfolio :)`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-transition-link`,
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
        icon: `src/images/personality-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `rubik:400,700,900`,
          `roboto:400,700,900`, // you can also specify font weights and styles
        ],

        /* roboto 400, 700, 900 */
        display: 'swap',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
