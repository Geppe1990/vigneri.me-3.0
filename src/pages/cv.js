import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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

export default () => (
	<Layout>
		<CV className="section">
			<div className="container">
				
				<div className="cv-intro card">
					<h2 className="heading--reverse text-center hero">Giuseppe Vigneri</h2>
					<p className="h1 text-center">Web Developer</p>
					<p className="text-center">
						Da sempre appassionato e curioso del mondo tecnologico. Sono uno sviluppatore web con esperienza in ricerca di posizione nel campo dello sviluppo web e software, dove poter applicare le mie conoscenze e poter crescere professionalmente. Reputo che il costante aggiornamento sia una skill essenziale in questo settore, ed è per questo che dedico parte della mia settimana a corsi e ad aggiornamenti tecnici per accrescere le mie competenze.
					</p>
				</div>

				<div className="card-container">
					<div className="cv-informazioni card" style={{ 
						width: '33%', 
						marginRight: '20px'
					}}>
						<h2>Informazioni</h2>
						
						<div className="block">
							<h3>INDIRIZZO</h3>
							<span>Via Prove 16, Codigoro, 44021, Italia</span>
						</div>

						<div className="block">
							<h3>TELEFONO</h3>
							<span>3462364389</span>
						</div>

						<div className="block">
							<h3>E-MAIL</h3>
							<span>geppe1990@gmail.com</span>
						</div>

						<div className="block">
							<h3>DATA E LUOGO DI NASCITA</h3>
							<span>03/02/1990 - Codigoro</span>
						</div>

						<div className="block">
							<h3>NAZIONALITÀ</h3>
							<span>Italiana</span>
						</div>

					</div>

					<div className="cv-carriera card" style={{
						width: '66%'
					}}>
						<h2>Carriera Lavorativa</h2>
						<div className="block">
							<h3>Web Developer, YOOX NET-A-PORTER GROUP</h3>
							<small><span>Giu 2019 — Presente</span><span>Zola Predosa(BO)</span></small>
							<span>Sviluppo di flagagship excommerce nel settore luyury fashion che
							sfruttano la combinazione di un progetto MVC su framework .net per la
							parte ecommerce, e la piattaforma CoreMedia per landing page, news
							e blog.
							Per questi progetti ho sviluppato diversi componenti frontend in
							Javascript ES6, React, .net, SASS e task runner Javascript.</span>
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
					<div className="cv-lingue card" style={{
						width: '33%',
						marginRight: '20px'
					}}>
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
					<div className="cv-istruzione card" style={{
						width: '66%'
					}}>
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
							<em>Problem Solving</em>
							<em>Pensiero Laterale</em>
							<em>Capacità d'analisi</em>
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

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`
