import React from "react"
import styled from "styled-components";

const ABOUT = styled.ul`
    display: flex;

    li {
        padding: 0 10px 0 0;
    }
`;

export default () => {
	return (
        <div className="section">
            <div className="container">
                <h2 className="heading text-center">About me</h2>
                <div>
                    <h3>Social</h3>
                    <ABOUT>
                        <li><a href="mailto:geppe1990@gmail.com">Mail</a></li>
                        <li><a href="https://github.com/Geppe1990/">Github</a></li>
                        <li><a href="https://t.me/geppegram">Telegram</a></li>
                        <li><a href="https://www.instagram.com/geppegram">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/in/giuseppevigneri/">LinkedIn</a></li>
                        <li><a href="https://www.facebook.com/Giuseppe.geppe.vigneri">Facebook</a></li>
                    </ABOUT>
                </div>
                
                <div>
                    <h3>Skills</h3>
                    <ABOUT>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>GIT</li>
                            <li>node.js</li>
                            <li>Python</li>
                            <li>Bootstrap</li>
                    </ABOUT>
                </div>
                
                <div>
                    <h3>Clients</h3>
                    <ABOUT>
                            <li>Yoox</li>
                            <li>Valentino</li>
                            <li>Groupama</li>
                            <li>Città di Ravenna</li>
                            <li>Regione Toscana</li>
                            <li>HERA</li>
                    </ABOUT>
                </div>
                
                <div>
                    <h3>Tools</h3>
                    <ABOUT>
                            <li>Visual Studio Code</li>
                            <li>Github</li>
                            <li>Adobe Photoshop</li>
                            <li>Sketch</li>
                            <li>Bash</li>
                            <li>Google Chrome</li>
                    </ABOUT>
                </div>
            </div>
        </div>
	)
}
