const path = require(`path`);

// exports.modifyWebpackConfig = ({ config, stage }) => {
//  config.devServer = {
//      hot: false,
//      inline: false,
//  }
//  return config;
// };



//Create a slug for each recipe and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => {
    // console.log(node);
    const { createNodeField } = actions
    const slug = (node.path && node.path.alias) ? node.path.alias : '/node/' + node.drupal_id;
/*    createNodeField({
        node,
        name: `slug`,
        value: slug,
    })
*/
}

// Implement the Gatsby API "createPages". This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const articleTemplate = path.resolve(`src/pages/article.js`)
        const pageTemplate = path.resolve(`src/pages/recipe.js`)

        // page building queries
        // field_ragozin_sheet throws graphql errors
        resolve(
            graphql(
                `
query MyQuery {
  Drupal {
    nodeRecipes(first: 10) {
      edges {
        node {
          changed
          id
          cookingTime
          path
          status
          title
          preparationTime
          numberOfServings
          recipeInstruction {
            value
            processed
            format
          }
          ingredients
          summary {
            format
            processed
            value
          }
          created
        }
      }
    }
    nodeArticles(first: 10) {
      nodes {
        path
        title
        author {
          displayName
        }
        body {
          summary
          format
          processed
          value
        }
        id
      }
    }
  }
}
`
            ).then(result => {
                // shows during build/dev
                // console.log("RESULT");
                // console.log(result);
                if (result.errors) {
                    reject(result.errors)
                }
                //console.log("PAGES");
                //console.log(result.data.Drupal.nodeRecipes);
                const pages = result.data.Drupal.nodeRecipes.edges;
				const arts = result.data.Drupal.nodeArticles.nodes;
				console.log("ARTS")
				console.log(arts)

                //result.data.allNodeHorse.edges.forEach(({ node }, index) => {
                pages.forEach(({ node }, index) => {
                    // console.log(node);
                    //console.log("PATH: ");
                    //console.log(node.path);
                    // const page_path = (node.path && node.path.alias) ? node.path.alias : '/node/' + node.drupal_id;
                    const page_path = node.path
                    //console.log(page_path);
                    //console.log(node);
                                actions.createPage({
                        path: `${page_path}`,
                        component: pageTemplate,
                        context: {
                            nid: node.id,
                            data: node,
                        },
                    })
                })

                //result.data.allNodeHorse.edges.forEach(({ node }, index) => {
                arts.forEach(({ node }, index) => {
                    // console.log(node);
                    //console.log("PATH: ");
                    //console.log(node.path);
                    // const page_path = (node.path && node.path.alias) ? node.path.alias : '/node/' + node.drupal_id;
					console.log("***Art Node***")
					console.log(node)
                    const art_path = node.path
                    //console.log(page_path);
                    //console.log(node);
                                actions.createPage({
                        path: `${art_path}`,
                        component: articleTemplate,
                        context: {
                            nid: node.id,
                            data: node,
                        },
                    })
                })
            })
        )
    });
}