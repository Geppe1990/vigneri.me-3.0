import { keyframes, createGlobalStyle } from 'styled-components';

const colors = {
	"black": "#222",
	"white": "#f9fafb",
}

const shadow = {
	"heading": `1px 0 0 ${colors.black}, -1px 0 0 ${colors.black}, 0 1px 0 ${colors.black}, 0 -1px 0 ${colors.black}, 1px 1px ${colors.black}, -1px -1px 0 ${colors.black}, 1px -1px 0 ${colors.black}, -1px 1px 0 ${colors.black}`,
	"heading_reverse": `1px 0 0 ${colors.white}, -1px 0 0 ${colors.white}, 0 1px 0 ${colors.white}, 0 -1px 0 ${colors.white}, 1px 1px ${colors.white}, -1px -1px 0 ${colors.white}, 1px -1px 0 ${colors.white}, -1px 1px 0 ${colors.white}`,
}

const blink = keyframes`
  from, to {
    color: transparent;
  }

  50% {
    color: inherit;
  }
`;

const GlobalStyles = createGlobalStyle`
	html, body {
		height: 100%;	
	}

	body {
		color: ${colors.black};
		background-color: ${colors.white};
		font-size: 16px;
		font-family: Source Code Pro;
		line-height: 1.5;
		margin: 0;
		padding: 0;
	}

	p {
		margin-bottom: 24px;
	}

	a {
		text-decoration: none;
		color: inherit;

		&:hover {
			text-decoration: underline;
		}
	}

	li {
		list-style: none;
	}

	/* width */
	::-webkit-scrollbar {
		width: 6px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: ${colors.white};
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: ${colors.black};
		border-radius: 1px;
	}

	.text-center {
		text-align: center;
	}

	.container {
		position: relative;
    	width: 90%;
    	max-width: 1024px;
	    margin: 0 auto;

		@media (max-width: 767px) {
			max-width: 100%;
			width: auto;
		}

		&-fluid {
			width: 100%;
			height: auto;
			position: relative;
			margin: 0;
			padding: 0;
		}
	}

	.section {
		display: flex;
		padding: 50px 0;
		flex-direction: column;
		justify-content: center;

		@media (max-width: 767px) {

			&:first-child {
				padding-top: 50px;
			}

			padding: 0;
			margin-top: 10px;
			margin-bottom: 10px;
		}
	}

	em,
	.tags {
		font-style: inherit;
    	background: ${colors.black};
    	color: ${colors.white};
	}

	.tags {
		margin-right: 10px;
		padding: 2px;
		text-decoration: none;

		&:hover {
			text-decoration: none;
		}
	}

	.card {
		padding: 40px;
		margin-bottom: 40px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 16px;
		position: relative;
		background: rgb(255, 255, 255);
		border-radius: 16px;
	
		@media (max-width: 767px) {
			padding: 30px;
			margin-left: 10px;
			margin-right: 10px;
		}

		&:last-child {
			margin-bottom: 0;
		}
	}

	.typing::after {
		content: "_";
		line-height: initial;
		font-size: 0.8em;
		animation: 1s ${blink} step-end infinite;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: Source Sans Pro;
		margin: 0;
		padding: 0;
	}

	.hero {
		font-size: 4rem;

		@media (max-width: 767px) {
			font-size: 3rem;
		}
	}

	h1, .h1 { 
		font-size: 2rem; 
	}

	h2, .h2 { 
		font-size: 1.5rem; 
	}

	h3, .h3 { 
		font-size: 1.17rem; 
	}
	
	h4, .h4 { 
		font-size: 1.12rem; 
	}
	
	h5, .h5 { 
		font-size: .83rem; 
	}
	
	h6, .h6 { 
		font-size: .75rem; 
	}
	
	.heading {
		font-family: Source Sans Pro;
		font-weight: 100;
		text-shadow: ${shadow.heading};
		color: #ffffff;

		&--reverse {
			text-shadow: ${shadow.heading_reverse};
		}
	}
`

export default GlobalStyles;