import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'


const RecipePage = ({ data }) => {
	
  return (
	<Layout pageTitle="My Recipe Posts">
      {
        data.Drupal.nodeRecipes.edges.map(node => (
          <article key={node.id}>
			
            <h2>
              <Link to={`${node.node.path}`}>
                {node.node.title}
              </Link>
            </h2>
			<p> <b>-------------------------------------- </b></p>
          </article>
        ))
      }
    </Layout>
	)
	console.log("RECIPE INDEX DATA")
	console.log({data})
}
  
  
export const query = graphql`
query {
    Drupal {
                nodeRecipes(first: 15) {
                    edges {
                        node {
                            id
                            path
                            title
                        }
                    }
                }
            }
    }
`

export const Head = () => <Seo title="My Recipe Posts" />

export default RecipePage