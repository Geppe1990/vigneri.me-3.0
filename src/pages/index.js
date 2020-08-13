import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/SEO"
import Intro from "../components/index/intro";

export default ({ data }) => {
	return (
		<Layout>
			<SEO
				title={data.site.siteMetadata.title}
				description={data.site.siteMetadata.description || ''}
				pathname={data.site.siteMetadata.url}
			/>
			<div>
				<Intro />
				<h1 className="heading">{data.site.siteMetadata.title}</h1>
				<p>Questa è la homepage</p>
				<em>Pippo Franco</em>
				<h2 className="heading">About me</h2>
				<h2 className="heading--reverse">About me</h2>
			</div>
		</Layout>
	)
}

export const query = graphql`
	query MyQuery {
		site {
			siteMetadata {
				title
				description
				url
			}
		}
	}
`