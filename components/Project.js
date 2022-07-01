import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Project = ({ title, name, description }) => {
	return (
		<Grid>
			{/* <div></div>
			<div></div> */}

			<ImgLink
				href={"https://" + name + ".vercel.app"}
				target="_blank"
				rel="noopener noreferrer"
			>
				<Img src={name + ".png"} alt={title} />
			</ImgLink>
			{/* <Info> */}
			<Title>{title}</Title>
			<Description>{description}</Description>
			<ButtonsRow>
				<Button
					outlined
					href={"https://github.com/joamartico/" + name}
					target="_blank"
					rel="noopener noreferrer"
				>
					View Code
				</Button>

				<Button
					href={"https://" + name + ".vercel.app"}
					target="_blank"
					rel="noopener noreferrer"
				>
					Visit Site
				</Button>
			</ButtonsRow>
			{/* </Info> */}
		</Grid>
	);
};

export default Project;

const Grid = styled.div`
	/* width: 100%; */
	/* display: flex; */
	/* flex-wrap: wrap-reverse;
    justify-content: center; */
	/* align-items: center; */
	/* align-content: center; */
	margin-top: 80px;
	margin-bottom: 120px;
	display: grid;
	grid-template-areas:
		"img title"
		"img description"
		"img buttons";
	// column on mobile
	@media (max-width: 768px) {
		grid-template-areas:
			"title"
			"img"
			"description"
			"buttons";

		grid-template-columns: 100%;
	}
	grid-template-columns: auto auto;
	/* grid-gap: 0; */
	grid-column-gap: 120px;
	justify-content: start; // iphone siempre a la izquierda
	align-items: center;
`;

const ImgLink = styled.a`
	grid-area: img;
	display: flex;
	margin: auto;
`;

const Img = styled.img`
	height: 70vh;
	border: none;
	@media (max-width: 768px) {
		margin-top: 15px;
	}
`;

const Info = styled.div`
	width: 50%;
	min-width: 290px;
	margin-left: auto;
	margin-right: auto;
	/* margin-left: 100px;
    margin-right: 100px;      */
	height: fit-content;
	margin: auto;
	line-height: 2.2rem;
`;

const Title = styled.h2`
	grid-area: title;
	display: flex;
	flex-direction: column;
	justify-content: end;
	height: 100%;
	margin-top: auto;
	padding-top: 20%;
	/* padding-left: 20%; */
	@media (max-width: 768px) {
		text-align: center;
		height: fit-content;
		padding-top: 0;
	}
`;

const Description = styled.p`
	@media (max-width: 768px) {
		display: none;
	}
	grid-area: description;
	line-height: 2.2rem;
	/* padding-left: 20%; */
`;

const ButtonsRow = styled.div`
	display: flex;
	width: 100%;
	/* @media (max-width: 768px) {
		display: none;
	} */
	grid-area: buttons;
	height: 100%;
	margin-bottom: auto;
	padding-bottom: 20%;
	/* padding-left: 20%; */
	margin-bottom: 0;
	margin-top: auto;
	@media (max-width: 768px) {
		justify-content: center;
	}
`;

const Button = styled.a`
	margin-top: ${({ mt }) => mt || "5px"};
	margin-bottom: ${({ mb }) => mb || "5px"};
	margin-right: 13px;
	@media (max-width: 768px) {
		margin-left: 6px;
		margin-right: 6px;
		margin-top: 10px;
	}
	padding: 13px;
	line-height: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	border: 1px solid ${({ red, background }) => (red ? "red" : background)};
	cursor: pointer;
	background: ${({ outlined, red, background }) => {
		if (outlined) {
			return "#0000";
		} else {
			if (red) {
				return "red";
			} else {
				return "#20d490";
			}
		}
	}};
	&:active {
		opacity: 0.8 !important;
	}
	/* font-size: 20px; */
	font-weight: bold;
	color: ${({ outlined, red }) => {
		if (outlined) {
			if (red) return "red";
			else return "#20d490";
		} else {
			return "white";
		}
	}};
	min-width: 120px;
	height: fit-content;
`;
