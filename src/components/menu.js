import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
	const data= useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	)

	return (
		<nav>
			<div>
				<span>
					<Link to={`/`}>{`< ${data.site.siteMetadata.title} />`}</Link>
				</span>
			</div>

			<div>
				<Link to={`/blog/`}>
					Blog
				</Link>
				<Link to={`/about/`}>
					About
				</Link>
				<Link to={`/test/`}>
					Test
				</Link>
			</div>
		</nav>
	)
}