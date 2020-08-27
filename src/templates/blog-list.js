import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import PostExcerpt from "../components/post-excerpt";
import SEO from "../components/SEO";
import styled from "styled-components";

const PAGINATION = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 0 0;

	a {
		margin: 0 5px;

		&:hover {
			background-color: #222;
			color: #f9fafb;				
		} 
	}

	[aria-current="page"] {
		background-color: #222;
		color: #f9fafb;
	}
`;

const H1 = styled.h1`
	margin-bottom: 20px;
`;

export default ({ data, pageContext }) => {
	const { currentPage, numPages } = pageContext;
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
	const nextPage = (currentPage + 1).toString();


	return (
		<Layout>
			<SEO
				title={`${data.site.siteMetadata.title} - Blog`}
			/>
			<div className="section">
				<div className="container">
					<H1>Blog {data.site.siteMetadata.title}</H1>
					<div>
						<div>
							{data.allMdx.edges.map(({ node }) => (
								<PostExcerpt
									key={node.id}
									id={node.id}
									img={node.frontmatter.image.childImageSharp.fluid.src}
									title={node.frontmatter.title}
									excerpt={node.excerpt}
									slug={node.fields.slug}
									category={node.frontmatter.category}
									date={node.frontmatter.date}
								/>
							))}
						</div>
						<PAGINATION>
							{!isFirst && (
								<Link
									to={`/blog/${prevPage}`} rel="next">← Previous Page</Link>
							)}
							{Array.from({ length: numPages }, (_, i) => (
								<Link 
									key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? "" : i + 1}`}>
								{i + 1}
								</Link>
							))}
							{!isLast && (
								<Link 
								to={`/blog/${nextPage}`} rel="next">Next Page →</Link>
							)}
						</PAGINATION>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export const query = graphql`
	query blogListQuery($skip: Int!, $limit: Int!) {
		site {
			siteMetadata {
				title
			}
		}
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		  ) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						category
						title
						date(formatString: "DD MMMM, YYYY", locale: "it")
						image {
							childImageSharp {
								fluid(maxWidth: 800) {
									...GatsbyImageSharpFluid
									src
								}
							}
						}
					}
					fields {
						slug
					}
					excerpt
					timeToRead
				}
			}
		}
	}
`