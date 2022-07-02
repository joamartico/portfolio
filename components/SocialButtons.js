import React from "react";
import styled from "styled-components";

const SocialButtons = () => {
	return (
		<Row>
			<a
				href="https://www.linkedin.com/in/joamarticorena/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Img src="/linkedin.png" />
			</a>
			<a
				href="https://github.com/joamartico"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Img src="/github.png" />
			</a>
		</Row>
	);
};

export default SocialButtons;

const Row = styled.div`
	display: flex;
	width: 80px;
	justify-content: space-between;
`;

const Img = styled.img`
	height: 30px;
`;
