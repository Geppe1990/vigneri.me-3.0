import React from "react";
import Header from "./header";
import Footer from "./footer";
import GlobalStyles from './styles/globalStyles';

export default ({ children }) => {
	return (
		<React.Fragment>
			<GlobalStyles />
				<div className="siteWrapper">
					<Header />
					<main>
						<div>
							{children}
						</div>
					</main>
					<Footer />
				</div>
		</React.Fragment>
	)
}
