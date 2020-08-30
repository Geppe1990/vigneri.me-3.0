import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
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
		&-contatti {
			.wrapper {
				display: flex;
				justify-content: center;

				a {
					padding: 0 20px;
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
						<div class="text-center">
							<button onClick={ () => toggleLanguage() } class="primary-button">{label.cta}</button>
						</div>
					</div>

					<div className="card-container">
						<div className="cv-informazioni card card--left">
							<h2>{label.headingInfo}</h2>
							
							<div className="block">
								<h3>{label.address}</h3>
								<span>Via Prove 16, Codigoro, 44021, Italia</span>
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
							<h2>{isMainLanguage ? "Carriera Lavorativa" : ""}</h2>
							<div className="block">
								<h3>Web Developer, YOOX NET-A-PORTER GROUP</h3>
								<small><span>{isMainLanguage ? "Giu 2019 — Presente" : ""}</span><span>Zola Predosa(BO)</span></small>
								<span>
									{isMainLanguage ? 
										"Sviluppo di flagagship excommerce nel settore luyury fashion che sfruttano la combinazione di un progetto MVC su framework .net per la parte ecommerce, e la piattaforma CoreMedia per landing page, news e blog. Per questi progetti ho sviluppato diversi componenti frontend in Javascript ES6, React, .net, SASS e task runner Javascript." 
										: 
										""
									}
								</span>
							</div>
							<div className="block">
								<h3>Web Developer, PRONESIS</h3>
								<small><span>Gen 2017 — Giu 2019</span> <span>Ferrara</span></small>
								<span>Sviluppo di excommerce e siti istituzionali con CES PrestaShop e
								WordPress sviluppando principalmente in PHP (e relativo motore di
								markup Smarty), Javascript, jQuery e SASS.</span>
							</div>
							<div className="block">
								<h3>Web Developer, OFFICINE DIGITALI</h3>
								<small><span>Giu 2016 — Gen 2017</span><span>Bologna</span></small>
								<span>Sviluppo di siti istituzionali legati alla PA sfruttando i CES WordPress e
								Drupal o creando soluzioni adxhoc in PHP per quanto riguarda la parte
								backend e Javascript, SASS e jQuery per la parte frontend</span>
							</div>
						</div>
					</div>
					<div className="card-container">
						<div className="cv-lingue card card--left">
							<h2>Lingue</h2>
							<div className="block">
								Italiano (Madrelingua)
							</div>
							<div className="block">
								Inglese (Intermedio)
							</div>
							<div className="block">
								Francese (Base)
							</div>
						</div>
						<div className="cv-istruzione card card--right">
							<h2>Istruzione e Formazione</h2>
							<div className="block">
								<h3>Tecnico di Comunicazione e Informazione</h3>
								<small><span>Ecipar</span><span>Ferrara</span></small>
								<span>Come tecnico della comunicazione C Informazione sono in grado di
									progettare, sviluppare, gestire e coordinare azioni comunicative in
									funzione dei fabbisogni rilevati, di predisporre testi scritti e adottare stili
									e concetti comunicativi efDcaci e adeguati al contesto.
								</span>
							</div>
							<div className="block">
								<h3>Diploma in Elettronica & telecomunicazioni</h3>
								<small><span>ITI N. Copernico - A. Carpeggiani</span><span>Ferrara</span></small>
							</div>
						</div>
					</div>

					<div className="cv-competenze card">
						<h2>Competenze</h2>
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
						<h2>Contatti</h2>
						<div className="block">
							<div className="wrapper">
								<a href="https://www.linkedin.com/in/giuseppevigneri/">
									<FontAwesomeIcon icon={faLinkedin} />
								</a>
								<a href="https://github.com/Geppe1990">
									<FontAwesomeIcon icon={faGithub} />
								</a>
								<a href="https://twitter.com/ioSonoGeppe">
									<FontAwesomeIcon icon={faTwitter} />
								</a>
								<a href="https://www.instagram.com/geppegram/">
									<FontAwesomeIcon icon={faInstagram} />
								</a>
								<a href="tg://resolve?domain=geppegram">
									<FontAwesomeIcon icon={faTelegramPlane} />
								</a>
								<a href="mailto:geppe1990@gmail.com">
									<FontAwesomeIcon icon={faEnvelope} />
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
