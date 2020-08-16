import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';

const NAV = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 20px;
`;

const LINK = styled(Link)`
	font-weight: bold;
	text-transform: uppercase;
	margin-right: 15px;
`;

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
		<NAV>
			<div>
				<span>
					<LINK to={`/`}>{`< ${data.site.siteMetadata.title} />`}</LINK>
				</span>
			</div>

			<div>
				<LINK to={`/blog/`}>
					Blog
				</LINK>
				<LINK to={`/about/`}>
					About
				</LINK>
				<LINK to={`/test/`}>
					Test
				</LINK>
			</div>
		</NAV>
	)
}