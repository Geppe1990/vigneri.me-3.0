import React from "react"
import { Link } from "gatsby"

export default ({ id, img, title, excerpt, slug, category, date}) => {

	return (
		<div>
			<div style={{backgroundImage: `url(${img})`}}></div>
			<div>
				<div>
					{category.map((cat, i) =>
						<p key={i}>
							{cat}
						</p>
					)}
					<Link to={slug}>{title}</Link>
				<p>{excerpt}</p>
				</div>
				<div>
				 <div>
					 <p>Pubblicato il</p>
					 <p>{date}</p>
				 </div>
				</div>
			</div>
		</div>
	)
}
