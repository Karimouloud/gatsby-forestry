/*https://www.gatsbyjs.com/docs/gatsby-config/*/
module.exports = {
  siteMetadata: {
    title: `Tuto Gatsby Forestry`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src/content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.md', '.mdx']
      },
      gatsbyRemarkPlugins: []
    },
  ],
}
