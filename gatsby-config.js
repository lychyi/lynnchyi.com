module.exports = {
  siteMetadata: {
    title: `Lynn Chyi`,
    description: `Working on Design Systems`,
    author: `Lynn Chyi <mailbox@lynnchyi.com>`,
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
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lynnchyi.com`,
        short_name: `lynnchyi.com`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/lynnchyi-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
