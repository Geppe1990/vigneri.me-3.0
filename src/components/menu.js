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
			<React.Fragment>
				<span>
					<LINK to={`/`} className="heading--reverse">{`< ${data.site.siteMetadata.title} />`}</LINK>
				</span>
			</React.Fragment>

			<React.Fragment>
				<LINK to={`/blog/`} className="heading--reverse">
					Blog
				</LINK>
				<LINK to={`/about/`} className="heading--reverse">
					About
				</LINK>
				<LINK to={`/test/`} className="heading--reverse">
					Test
				</LINK>
			</React.Fragment>
		</NAV>
	)
}