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
			<p>{data.nodeFood?.summary.value}</p>
			
			<h3> Ingredients: </h3>
			<p>{data.nodeFood?.ingredients}</p>
			
			<h3> Instructions - no valid display method available</h3>
			<h2>VALUE</h2>
			<p>{data.nodeFood?.recipeInstruction.value}</p>
			<h2>PROCESSED</h2>
			<p>{data.nodeFood?.recipeInstruction.processed}</p>
			<h2>FORMAT</h2>
			<p>{data.nodeFood?.recipeInstruction.format}</p>
            </Layout>
    )
}

export default pageTemplate;

