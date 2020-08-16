import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/SEO"
import Intro from "../templates/intro";
import About from "../templates/about";
import Portfolio from "../templates/portfolio";

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
				<About />
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