import React from "react"
import { graphql } from "gatsby";
import LayoutCv from "../components/layout-cv";

const Cv = () => {
	return (
		<LayoutCv language="ita"/>
	)
}

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`

export default Cv;
