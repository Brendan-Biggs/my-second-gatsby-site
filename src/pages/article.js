import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const pageTemplate = props => {
    const data = {
        nodeArt: props.pageContext.data
    }

	console.log("RECIPE TEMPLATE DATA")
    console.log(data);

    return (
        <Layout pageTitle={data.nodeFood?.title}>
			
			<h3> Description: </h3>
			<div
			  dangerouslySetInnerHTML={{__html: data.nodeArt?.body.summary}}
			/>
			
            </Layout>
    )
}

export default pageTemplate;

