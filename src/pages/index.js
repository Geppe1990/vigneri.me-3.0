import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/SEO"
import Intro from "../templates/index/intro";
import Portfolio from "../templates/index/portfolio";

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
				<Portfolio />
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