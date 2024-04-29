import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
	  <StaticImage
        alt="English Bulldog"
        src="../images/dog.jpg"
      />
	  <p> Head on over to the blog linked above to check it out!</p>
      
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />


export default IndexPage