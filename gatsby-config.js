/*https://www.gatsbyjs.com/docs/gatsby-config/*/
module.exports = {
  siteMetadata: {
    title: `Tuto Gatsby Forestry`
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src/content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src/images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 760,
              linkImagesToOriginal: false,
              withWebp: true,
              quality: 80,
            }
          }
        ]
      },
    },
  ],
}
