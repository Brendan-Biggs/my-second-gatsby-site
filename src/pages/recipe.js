import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const pageTemplate = props => {
    const data = {
        nodeFood: props.pageContext.data
    }

	console.log("RECIPE TEMPLATE DATA")
    console.log(data);

    return (
        <Layout pageTitle={data.nodeFood?.title}>
			
			<h3> Servings: {data.nodeFood?.numberOfServings}</h3>
			<h3> Cook Time(m): {data.nodeFood?.cookingTime}</h3>
			
			<h3> Description: </h3>
			<div
			  dangerouslySetInnerHTML={{__html: data.nodeFood?.summary.processed}}
			/>
			
			<h3> Ingredients: </h3>
			<p>{data.nodeFood?.ingredients}</p>
			
			<h3> Instructions:</h3>
			
			<div
			  dangerouslySetInnerHTML={{__html: data.nodeFood?.recipeInstruction.processed}}
			/>
            </Layout>
    )
}

export default pageTemplate;

