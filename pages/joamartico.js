import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import SocialButtons from "../components/SocialButtons";
import { useObserver } from "../hooks/useObserver";

export default function Home() {
	const aboutMeRef = useRef();
	const projectsRef = useRef();

	const isAboutMeActive = useObserver(aboutMeRef);
	// console.log("is aboutMe in viewport: ", isAboutMeActive);

	const isProjectsActive = useObserver(projectsRef);
	// console.log("is projects in viewport: ", isProjectsActive);

	return (
		<>
			<Head>
				<title>Joa Martico</title>
				<meta
					name="description"
					content="Hi! I am Joaquin Marticorena, a creative and passionate frontend developer. 
					Welcome to my portfolio. joamartico"
				/>
				<link rel="icon" href="/profile.jpeg" />
				<meta
					name="google-site-verification"
					content="3XoSVdS7QLQWutddbE1sJ60XT3mFR-WXrP80V4AharU"
				/>
			</Head>

			<Navbar
				isAboutMeActive={isAboutMeActive}
				isProjectsActive={isProjectsActive}
			/>

			<Main>
				<Container>
					<Presentation>
						<Text>Hi, I am</Text>
						<Title>Joa Martico</Title>
					</Presentation>

					<Img src="/profile.jpeg" alt="profile" />
				</Container>

				<AboutMe id="aboutMe" ref={aboutMeRef}>
					<Text>About Me</Text>
					<Description>
						I am a passionate and creative frontend developer
						specialized in React.js motivated to grow and create
						products that people love to use. I am currently looking
						for my first job as a developer in order to apply
						everything I have learned both on platforms like Platzi
						and Udemy as well as creating my own projects.
					</Description>
					<SocialButtons />
				</AboutMe>

				<Skills>
					<Text>Skills</Text>
				</Skills>

				<Slider>
					<Slide>
						<SkillImg src="/js.png" alt="javascript" />
						<SkillImg src="/html.png" alt="html" />
						<SkillImg src="/css.svg.png" alt="css" />
						<SkillImg src="/react.png" alt="react" />
						<SkillImg src="/redux.png" alt="firebase" />
						<SkillImg src="/firebase.svg.png" alt="firebase" />
					</Slide>
					<Slide>
						<SkillImg src="/js.png" alt="javascript" />
						<SkillImg src="/html.png" alt="html" />
						<SkillImg src="/css.svg.png" alt="css" />
						<SkillImg src="/react.png" alt="react" />
						<SkillImg src="/redux.png" alt="firebase" />
						<SkillImg src="/firebase.svg.png" alt="firebase" />
					</Slide>
				</Slider>

				<Slider>
					<Slide>
						<SkillImg src="/nextjs.svg.png" alt="next" />
						<SkillImg src="/ionic.svg.png" alt="ionic" />
						<SkillImg src="/pwa.png" alt="solidity" />
						<SkillImg src="/solidity.svg" alt="solidity" />
						<SkillImg
							src="/styled-components.png"
							alt="styled-components"
						/>
						<SkillImg src="/mongodb.png" alt="mongodb" />
					</Slide>
					<Slide>
						<SkillImg src="/nextjs.svg.png" alt="next" />
						<SkillImg src="/ionic.svg.png" alt="ionic" />
						<SkillImg src="/pwa.png" alt="solidity" />
						<SkillImg src="/solidity.svg" alt="solidity" />
						<SkillImg
							src="/styled-components.png"
							alt="styled-components"
						/>
						<SkillImg src="/mongodb.png" alt="mongodb" />
					</Slide>
				</Slider>

				<Projects id="projects" ref={projectsRef}>
					<Text>Projects</Text>

					<Project
						title="MyWeeks"
						description="A great Progressive Web App (PWA) to use as a weekly calendar made with Next.js, Ionic and Firebase. Ideal to set daily and weekly goals, add notes for the week and also set monthly and yearly goals and notes."
						name="myweeks"
					/>
					<Project
						title="Nutros"
						description="Nutros is a great web app made with Next.js and Ionic to keep track of your daily nutrients and calories. You can also search for any food and see its nutrients based on real data."
						name="nutros"
					/>
					<Project
						title="BrainMath"
						description="BrainMath is a fun PWA made with React.js to train your mind with mathematical exercises. You can either read the math callenge or you can listen to it in the language of your choice to increase the difficulty."
						name="brainmath"
					/>
					<Project
						title="Foody"
						description="Foody is a nice restaurant searcher app (and PWA) made with React Native and expo."
						name="foodyy"
					/>
					<Project
						title="Smart Periodic Table"
						description="The best interactive perioidc table on the internet. You can search an element and read its properties and you can also classify the elements by one or multiple properties. Made with ReactJS and Ionic."
						name="smart-periodic-table"
					/>
					<Project
						title="MatchTeams"
						description="It is a PWA made with Next.js and Ionic where you can create a torunament, set the players, sort them, set the results and see the standings."
						name="matchteams"
					/>
				</Projects>
			</Main>
		</>
	);
}

const Main = styled.div`
	min-height: 100vh;
	padding: 4rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h1`
	margin: 0;
	width: 100%;
	height: 100%;
	//text-shadow: 0px 0px 500px #20d490;
	background: #21edb0;
	background: linear-gradient(to right, #21edb0 0%, #367dcf 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 450%;
	@media only screen and (max-width: 767px) {
		font-size: 15vw;
	}
`;

const Text = styled.p`
	font-size: 1.7rem;
	color: #20d490;
	margin: 0;
	margin-bottom: 10px;
	font-weight: 600;
	/* font-weight: bold; */
`;

const Description = styled.p`
	line-height: 2rem;
	font-size: 1.1rem;
`;

const Container = styled.div`
	display: flex;
	align-items: center;

	flex-wrap: wrap-reverse;
	align-items: left;
	justify-content: space-around;
	/* margin-top: 10%; */
	/* margin-bottom: 20vh; */
	width: 90%;
	height: 84vh;
	/* background: red; */
`;

const Presentation = styled.div`
	width: 100%;
	max-width: 500px;
	justify-content: center;
`;

const Grid = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	max-width: 800px;
	margin-top: 10vh;
`;

const Img = styled.img`
	border-radius: 50%;
	/* width: 350px; */
	width: 24vw;
	min-width: 250px;
	//box-shadow: 0px 0px 10000px #20d49060;
`;

const AboutMe = styled.div`
	width: 90%;
	max-width: 1050px;
	padding-top: 100px;
	margin-top: 100px;
`;

const Skills = styled.div`
	width: 90%;
	max-width: 1050px;
	margin-top: 140px;
`;

const SkillImg = styled.img`
	height: 8vh;
	/* height: 70px; */
	padding: 0 30px;
	margin-right: 6vw;
`;

const scroll = keyframes`
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-100%);
	}
`;

const Slider = styled.div`
	width: 100%;
	/* height: 100px; */
	/* position: absolute; */
	left: 0;
	margin-left: 0;
	background: white;
	display: flex;
	overflow: auto;
	justify-content: space-between;
	// hide scrolbar
	::-webkit-scrollbar {
		display: none;
	}
`;

const Slide = styled.div`
	display: flex;
	align-items: center;
	height: 20vh;
	animation: ${scroll} 15s linear infinite;
	justify-content: space-between;
`;

const Projects = styled.div`
	width: 90%;
	max-width: 1050px;
	margin-top: 100px;
	padding-top: 100px;
`;
