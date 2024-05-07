import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'


const RecipePage = ({ data }) => {
	
  return (
	<Layout pageTitle="My Food Articles">
      {
        data.Drupal.nodeArticles.nodes.map(node => (
          <article key={node.id}>
			
            <h2>
              <Link to={`${node.path}`}>
                {node.title}
              </Link>
            </h2>
			<p>Written by {node.author.displayName}</p>
			<p> {node.body.summary}</p>
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
    nodeArticles(first: 10) {
      nodes {
        path
        title
        author {
          displayName
        }
        body {
          summary
        }
		id
      }
    }
  }
}
`

export const Head = () => <Seo title="My Recipe Posts" />

export default RecipePage