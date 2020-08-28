import React from "react"
import styled from "styled-components";

const INTRO = styled.div`
    .hero {
        @media (max-width: 767px) {
			text-align: center;
		}

        > span {
            @media (max-width: 767px) {
                font-size: 2rem;
                display: block;
            }
        }
    }
`;

export default () => {
	return (
        <INTRO className="section">
            <div className="container card">
                <h1 className="hero"><em>Giuseppe Vigneri</em>, <span className="typing">Front-end Web Developer</span></h1>
                <p>
                    Ciao e benvenuto nel mio sito! Mi chiamo Giuseppe e sono uno sviluppatore Web. Progetto e realizzo siti Web ad-hoc o anche tramite CMS come WordPress e PrestaShop. Principalmente lavoro direttamente per e con altre agenzie per tradurre il loro lavoro in siti web altamente performanti. Le mie skills spaziano da <em>Javascript</em> a <em>PHP</em>, <em>SASS</em>, <em>Python</em>, <em>GIT</em> e ovviamente <em>HTML5</em> e <em>CSS3</em>. Lavoro seguendo una metodologia di lavoro Kanban / Agile.
                    Mi sono specializzato nella creazione di siti web ed ecommerce nel segmento Luxury Fashion, lavorando per brand di tiratura nazionale e mondiale.
                    Durante la mia carriera mi sono occupato della <em>creazione di siti Web a Ferrara e a Bologna.</em>
                </p>
                <p><em>Al momento sono disponibile per progetti a medio-breve termine</em></p>
            </div>
        </INTRO>
	)
}
