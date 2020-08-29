import React from "react";
import styled from 'styled-components';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FiSun, FiMoon } from 'react-icons/fi';

const DARKMODE = styled.div`
    display: inline-block;

    input {
        display: none;
    }

    label {
        cursor: pointer;
    }
`;

export default () => {
	return (
        <DARKMODE>
            <ThemeToggler>
                {({ theme, toggleTheme }) => (
                    <label>
                        <input
                            type="checkbox"
                            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                            checked={theme === 'dark'}
                        />{' '}
                        { theme === "dark" ? <FiMoon /> : <FiSun /> }
                    </label>
                )}
            </ThemeToggler>
        </DARKMODE>
	)
}