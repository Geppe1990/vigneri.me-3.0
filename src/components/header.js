import React from "react"
import styled from "styled-components";
import Menu from "./menu"

const HEADER = styled.header`
    position: fixed;
    width: 100%;
    top: 0%;
`;

export default () => {
    return (
        <HEADER>
            <Menu />
        </HEADER>
	)
}