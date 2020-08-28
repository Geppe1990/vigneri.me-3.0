import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/SEO"
import Intro from "../templates/index/intro";
import About from "../templates/index/about";
import Portfolio from "../templates/index/portfolio";
import styled from "styled-components";

const INDEX = styled.div`
	.section {
		&:first-child {
			margin-top: 50px;

			@media (max-width: 767px) {
				margin-top: 20px;
			}
		}
	}
`;

export default ({ data }) => {
	return (
		<Layout>
			<SEO
				title={data.site.siteMetadata.title}
				description={data.site.siteMetadata.description || ''}
				pathname={data.site.siteMetadata.url}
			/>
			<INDEX>
				<Intro />
				<About />
				<Portfolio />
			</INDEX>
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