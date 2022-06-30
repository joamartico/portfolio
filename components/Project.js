import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Project = ({ title, name, description }) => {
	return (
		<Wrapper>
			<a
				href={"https://" + name + ".vercel.app"}
				target="_blank"
				rel="noopener noreferrer"
			>
				<Img src={name + ".png"} alt={title} />
			</a>

			<Info>
				<h2>{title}</h2>
				<p>{description}</p>
				<Row>
					 <Button
						outlined
						href={"https://github.com/joamartico/" + name }
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
				</Row>
			</Info>
		</Wrapper>
	);
};

export default Project;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap-reverse;
	margin-top: 80px;
	margin-bottom: 120px;
`;

const Img = styled.img`
	height: 70vh;
`;

const Info = styled.div`
	width: 50%;
	margin-left: auto;
	margin-right: auto;
	/* margin-left: 100px;
    margin-right: 100px;      */
	height: fit-content;
	margin: auto;
	line-height: 2.2rem;
`;

const Row = styled.div`
	display: flex;
`;

const Button = styled.a`
	margin-top: ${({ mt }) => mt || "5px"};
	margin-bottom: ${({ mb }) => mb || "5px"};
	margin-right: 13px;
	/* font-weight: normal; */
	padding: 13px;
	line-height: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	/* width: ${({ width }) => width || "100%"}; */
	/* height: ${({ height }) => height || "46px"}; */
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
`;
