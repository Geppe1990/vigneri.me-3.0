import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const EXCERPT = styled.div`
	margin-bottom: 50px;
	
	h2 {
		margin: 0;
	}

	.tags {
		font-size: 14px;
	}
`;

export default ({ id, img, title, excerpt, slug, category, date}) => {
	return (
		<EXCERPT>
			<React.Fragment>
				<h2><Link to={slug}>{title}</Link></h2>
				<small>{date}</small>
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
