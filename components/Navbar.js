import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../styles/Home.module.css";

const Navbar = ({ isAboutMeActive, isProjectsActive }) => {
	const [section, setSection] = useState("");

	// useEffect(() => {
	// 	setActiveUrl(window.location.pathname);
	// }, [])

	return (
		<BlurNavBar>
			<NavButton
				active={isAboutMeActive}
				href="#aboutMe"
				onClick={() => setSection("aboutMe")}
			>
				About Me
			</NavButton>
			<NavButton active={isProjectsActive} href="#projects">
				Projects
			</NavButton>
			<NavButton
				href="https://www.linkedin.com/in/joamarticorena/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Contact Me
			</NavButton>
		</BlurNavBar>
	);
};

export default Navbar;

const NavButton = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	max-width: 180px;
	width: 25vw;
	/* background: red; */
	height: 70%;
	color: ${({ active }) => (active ? "#20d490" : "#666")};
	font-size: 75%;
	font-weight: bold;
	border-radius: 5px;
	margin-left: 10px;
	margin-right: 10px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	&:hover {
		background-color: #20d490;
		color: white;
	}
	&:target {
		opacity: 0.8 !important;
		background: red !important;
	}
`;

const BlurNavBar = styled.div`
	width: 100%;
	height: 70px;
	//background: linear-gradient(to right, #21EDB0 0%, #367DCF 100%);
	/* -webkit-background-clip: text; */
	background: #eaeaea50;

	// Blur background:
	-webkit-backdrop-filter: blur(8px);
	backdrop-filter: blur(8px);
	border-bottom: 0.01px solid #eaeaea;
	border-bottom: 0.01px solid #bbb;

	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	font-weight: 600;
	/* color: #20d490; */
`;
