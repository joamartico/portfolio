import React from "react";
import styled from "styled-components";

const Button = ({ text, outlined }) => {
	return <Wrapper outlined={outlined}>{text}</Wrapper>;
};

export default Button;

const Wrapper = styled.div`
	margin-top: ${({ mt }) => mt || "5px"};
	margin-bottom: ${({ mb }) => mb || "5px"};
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${({ width }) => width || "100%"};
	height: ${({ height }) => height || "46px"};
	border-radius: 14px;
	border: 1px solid ${({ red, background }) => (red ? "red" : background)};
	cursor: pointer;
	background: ${({ outlined, red, background }) => {
		if (outlined) {
			return "#0000";
		} else {
			if (red) {
				return "red";
			} else {
				return (
					background ||
					"linear-gradient(174deg, rgba(93,152,255,1) 0%,  rgba(0,63,255,1) 80%, rgba(12,102,222,1) 100%)"
				);
			}
		}
	}};
	&:active {
		opacity: 0.8 !important;
	}
	font-size: 20px;
	font-weight: bold;
	color: ${({ outlined, red }) => {
		if (outlined) {
			if (red) return "red";
			else return COLORS.primary;
		} else {
			return "white";
		}
	}};
`;
