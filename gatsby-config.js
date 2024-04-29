/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "My Super Cool Blog",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "drupal",
        fieldName: "Drupal",
        url: "https://csc496f22demo.tldr.dev/graphql"
      }
    },
    "gatsby-transformer-sharp",
  ],
};