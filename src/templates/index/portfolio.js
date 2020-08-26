import React from "react";
import styled from "styled-components";
import redvalentino from '../../assets/images/redvalentino.png';
import valentino from '../../assets/images/valentino.png';
import accenti from '../../assets/images/accenti.png';


const PORTFOLIOS = styled.div`
	.portfolio {
		min-height: 400px;
		position: relative;
		margin-bottom: 80px;
		background-repeat: no-repeat;
		background-size: cover;

		&.redvalentino {
			background-image: url(${redvalentino});
			background-position-y: 50%;
		}

		&.valentino {
			background-image: url(${valentino});
			background-position-y: 20%;
		}

		&.accenti {
			background-image: url(${accenti});
			background-position-y: 60%;
		}

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
					<div className="portfolio redvalentino">
						<div className="website">
							<a href="https://www.redvalentino.com" className="heading--reverse">redvalentino.com</a>
						</div>
						<a className="portfolio--link heading--reverse" href="https://www.redvalentino.com">red<br />valentino</a>
					</div>

					<div className="portfolio valentino">
						<div className="website">
							<a href="https://www.valentino.com" className="heading--reverse">valentino.com</a>
						</div>
						<a className="portfolio--link heading--reverse" href="https://www.valentino.com">valentino</a>
					</div>
					<div className="portfolio accenti">
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
