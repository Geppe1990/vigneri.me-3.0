import { keyframes, createGlobalStyle } from 'styled-components';

const colors = {
	"black": "#222",
	"white": "#ffffff",
}

const heading = {
	"normal": `1px 0 0 ${colors.black}, -1px 0 0 ${colors.black}, 0 1px 0 ${colors.black}, 0 -1px 0 ${colors.black}, 1px 1px ${colors.black}, -1px -1px 0 ${colors.black}, 1px -1px 0 ${colors.black}, -1px 1px 0 ${colors.black}`,
	"reverse": `1px 0 0 ${colors.white}, -1px 0 0 ${colors.white}, 0 1px 0 ${colors.white}, 0 -1px 0 ${colors.white}, 1px 1px ${colors.white}, -1px -1px 0 ${colors.white}, 1px -1px 0 ${colors.white}, -1px 1px 0 ${colors.white}`,
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
	body {
		color: ${colors.black};
		background-color: ${colors.white};
		font-size: 18px;
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

	.text-center {
		text-align: center;
	}

	.container {
		position: relative;
    	width: 90%;
    	max-width: 1024px;
	    margin: 0 auto;

		&-fluid {
			width: 100%;
			height: auto;
			position: relative;
			margin: 0;
			padding: 0;
		}
	}

	.section:first-child {
		border-top: 0;
	}

	.section {
		display: flex;
		border-top: 1px solid ${colors.black};
		padding: 50px 0;
		min-height: 100vh;
		flex-direction: column;
		justify-content: center;
	}

	.heading {
		font-family: Source Sans Pro;
	}

	em {
		font-style: inherit;
    	background: ${colors.black};
    	color: ${colors.white};
	}

	.typing::after {
		content: "_";
		line-height: initial;
		font-size: 0.8em;
		animation: 1s ${blink} step-end infinite;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: Source Sans Pro;
	}

	h1 {
		font-size: 64px;
	}

	h2{
		font-size: 64px;
	}

	h3 {
		font-size: 42px;
	}
	
	.heading {
		font-weight: 100;
		text-shadow: ${heading.normal};
		color: #ffffff;

		&--reverse {
			text-shadow: ${heading.reverse};
		}
	}
`

export default GlobalStyles;