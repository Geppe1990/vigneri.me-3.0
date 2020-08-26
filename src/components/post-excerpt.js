import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const EXCERPT = styled.div`
	h3 {
		margin: 0;
	}

	.tags {
		font-size: 14px;
	}
`;

export default ({ id, img, title, excerpt, slug, category, date}) => {
	return (
		<EXCERPT className="card">
			<React.Fragment>
				<div>{date}</div>
				<h3>
					<Link to={slug}>{title}</Link>
				</h3>
				<p>{excerpt}</p>

				{category.map((cat, i) =>
					<span className="tags" key={i}>
						{cat}
					</span>
				)}
			</React.Fragment>
		</EXCERPT>
	)
}
