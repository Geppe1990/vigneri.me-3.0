import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPrint, faFlag } from '@fortawesome/free-solid-svg-icons'
import labels from "../../labels.json";

const CV = styled.div`
	.block {
		margin-top: 20px;

		span {
			font-size: 14px;
		}

		small {
			display: flex;
			justify-content: space-between;
			font-weight: bold;

			span {
				font-size: inherit;
			}
		}
	}

	.cv {
		&-intro {
			.ctaWrapper {
				display: flex;
				flex-direction: column;
				align-items: center;

				button {
					margin-top: 10px;

					&:first-child {
						margin-top: 0;
					}
				}
			}
		}

		&-contatti {
			.wrapper {
				display: flex;
				justify-content: center;

				@media print {
					flex-direction: column;
				}

				a {
					padding: 0 20px;

					@media print {
						padding: 0;
					}

					span {
						@media print {
							display: inline-block;
							margin-left: 10px;
						}
					}
				}
			}
		}

		&-competenze {
			.wrapper {
				display: flex;
				flex-wrap: wrap;
			}

			em {
				margin: 2px;
				padding: 10px;

				@media (max-width: 767px) {
					padding: 0;
				}
			}
		}
	}
`;
const Cv = () => {
	const [isMainLanguage, setIsMainLanguage] = useState(true);
	const toggleLanguage = () => setIsMainLanguage(!isMainLanguage);
	let label = isMainLanguage ? labels.cv.ita : labels.cv.eng;
	
	return (
		<Layout>
			<CV className="section">
				<div className="container">
					
					<div className="cv-intro card">
						<h2 className="heading--reverse text-center hero">Giuseppe Vigneri</h2>
						<p className="h1 text-center">Web Developer</p>
						<p className="text-center">
							{label.intro}
						</p>
						<div className="text-center ctaWrapper">
							<button onClick={ () => toggleLanguage() } className="no-print">
								<FontAwesomeIcon icon={faFlag} style={{marginRight: "10px"}} />
								{label.cta}
							</button>
							<button onClick={ () => window.print() } className="no-print">
								<FontAwesomeIcon icon={faPrint} style={{marginRight: "10px"}} />
								{label.print}
							</button>
						</div>
					</div>

					<div className="card-container">
						<div className="cv-informazioni card card--left">
							<h2>{label.headingInfo}</h2>
							
							<div className="block">
								<h3>{label.address}</h3>
								<span>{label.addressDescription}</span>
							</div>

							<div className="block">
								<h3>{label.phone}</h3>
								<span>+39 3462364389</span>
							</div>

							<div className="block">
								<h3>E-mail</h3>
								<span>geppe1990@gmail.com</span>
							</div>

							<div className="block">
								<h3>{label.birth}</h3>
								<span>{label.birthDescription}</span>
							</div>

							<div className="block">
								<h3>{label.nationality}</h3>
								<span>{label.nationalityDescription}</span>
							</div>

						</div>

						<div className="cv-carriera card card--right">
							<h2>{label.work}</h2>
							<div className="block">
								<h3>Web Developer, YOOX NET-A-PORTER GROUP</h3>
								<small><span>{label.ynapDate}</span><span>Zola Predosa(BO)</span></small>
								<span>{label.ynapDescription}</span>
							</div>
							<div className="block">
								<h3>Web Developer, PRONESIS</h3>
								<small><span>{label.pronesisDate}</span> <span>Ferrara</span></small>
								<span>{label.pronesisDescription}</span>
							</div>
							<div className="block">
								<h3>Web Developer, OFFICINE DIGITALI</h3>
								<small><span>{label.ODDate}</span><span>Bologna</span></small>
								<span>{label.ODDescription}</span>
							</div>
						</div>
					</div>
					<div className="card-container">
						<div className="cv-lingue card card--left">
							<h2>{label.languages}</h2>
							<div className="block">
								{label.it}
							</div>
							<div className="block">
								{label.en}
							</div>
							<div className="block">
								{label.fr}
							</div>
						</div>
						<div className="cv-istruzione card card--right">
							<h2>{label.education}</h2>
							<div className="block">
								<h3>{label.eciparTitle}</h3>
								<small><span>Ecipar</span><span>Ferrara</span></small>
								<span>{label.eciparDescription}</span>
							</div>
							<div className="block">
								<h3>{label.itiTitle}</h3>
								<small><span>ITI N. Copernico - A. Carpeggiani</span><span>Ferrara</span></small>
							</div>
						</div>
					</div>

					<div className="cv-competenze card">
						<h2>{label.skills}</h2>
						<div className="block">
							<div className="wrapper">
								<em>HTML</em>
								<em>CSS</em>
								<em>Bootstrap</em>
								<em>Bulma</em>
								<em>Materialize</em>
								<em>Javascript ES6</em>
								<em>ReactJS</em>
								<em>NodeJS</em>
								<em>ExpressJS</em>
								<em>jQuery</em>
								<em>AngularJS</em>
								<em>GatsbyJS</em>
								<em>Gulp</em>
								<em>Grunt</em>
								<em>WebPack</em>
								<em>PHP</em>
								<em>Python</em>
								<em>C#</em>
								<em>git</em>
								<em>WordPress</em>
								<em>PrestaShop</em>
								<em>Coremedia</em>
								<em>MacOS</em>
								<em>Linux</em>
								<em>Windows</em>
								<em>SEO</em>
								<em>Photoshop</em>
								<em>Sketch</em>
							</div>
						</div>
					</div>

					<div className="cv-contatti card">
						<h2>{label.contacts}</h2>
						<div className="block">
							<div className="wrapper">
								<a href="https://www.linkedin.com/in/giuseppevigneri/">
									<FontAwesomeIcon icon={faLinkedin} />
									<span className="print">https://www.linkedin.com/in/giuseppevigneri/</span>
								</a>
								<a href="https://github.com/Geppe1990">
									<FontAwesomeIcon icon={faGithub} />
									<span className="print">https://github.com/Geppe1990</span>
								</a>
								<a href="https://twitter.com/ioSonoGeppe">
									<FontAwesomeIcon icon={faTwitter} />
									<span className="print">https://twitter.com/ioSonoGeppe</span>
								</a>
								<a href="https://www.instagram.com/geppegram/">
									<FontAwesomeIcon icon={faInstagram} />
									<span className="print">https://www.instagram.com/geppegram/</span>
								</a>
								<a href="tg://resolve?domain=geppegram">
									<FontAwesomeIcon icon={faTelegramPlane} />
									<span className="print">geppegram</span>
								</a>
								<a href="mailto:geppe1990@gmail.com">
									<FontAwesomeIcon icon={faEnvelope} />
									<span className="print">geppe1990@gmail.com</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</CV>
		</Layout>
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
