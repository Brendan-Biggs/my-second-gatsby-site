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
              <Link to={`${node.path}`}>
                {node.title}
              </Link>
            </h2>
			<p> <b>-------------------------------------- </b></p>
          </article>
        ))
      }
    </Layout>
  
  
  
  
  /*
    <Layout pageTitle="My Recipe Posts">
      <h1> Temporary Test content for Recipe splash page </h1>
	  <p> Hold Please </p>
	  <Link to={`{data.Drupal.nodeRecipes.edges.node.path}`}>
                This is test link text
              </Link>
    </Layout>
	*/
  )
}

export const Head = () => <Seo title="My Recipe Posts" />

export default RecipePage