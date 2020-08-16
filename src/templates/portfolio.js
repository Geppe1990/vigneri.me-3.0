import React from "react";
import styled from "styled-components";

const PORTFOLIOS = styled.div`
	.portfolio {
		min-height: 400px;
		position: relative;
		margin-bottom: 80px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 50%;
		background-image: url('../assets/images/redvalentino.png');

		&--link {
			position: absolute;
			width: 100%;
			margin: 0;
			padding: 0;
			bottom: 70px;
			right: 30px;
			display: block;
			text-align: right;
			letter-spacing: -0.03em;
			z-index: 2;
			line-height: 0.80em;
			font-size: 160px;

			&:hover {
				text-decoration: none;
			}
		}

		&:last-child {
			margin-bottom: 0;
		}

		.website {
			position: absolute;
			font-size: 20px;
			z-index: 999999;
			width: auto;
			top: 0;
			left: 0;
		}
	}
`;

export default () => {
	return (
		<div className="section">
			<div className="container-fluid">
				<h2 className="heading text-center">Portfolio</h2>

				<PORTFOLIOS>
					<div className="portfolio">
						<div className="website">
							<a href="https://www.redvalentino.com" className="heading--reverse">redvalentino.com</a>
						</div>
						<a className="portfolio--link heading--reverse" href="https://www.redvalentino.com">red<br />valentino</a>
					</div>

					<div className="portfolio">
						<div className="website">
							<a href="https://www.valentino.com" className="heading--reverse">valentino.com</a>
						</div>
						<a className="portfolio--link heading--reverse" href="https://www.valentino.com">valentino</a>
					</div>
					<div className="portfolio">
						<div className="website">
							<a href="https://giovanisi.it/accenti/" className="heading--reverse">giovanisi.it</a>
						</div>
						<a className="portfolio--link heading--reverse" href="https://giovanisi.it/accenti/">accènti<br />giovanisi</a>
					</div>
				</PORTFOLIOS>
			</div>
		</div>
	)
}
