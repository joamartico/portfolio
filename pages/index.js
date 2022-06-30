import Head from "next/head";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Joa Marticorena</title>
				<meta
					name="description"
					content="Hi! I am Joa Marticorena, a creative and passionate frontend developer. 
					Welcome to my portfolio"
				/>
				<link rel="icon" href="/profile.jpeg" />


				<meta
					name="google-site-verification"
					content="3XoSVdS7QLQWutddbE1sJ60XT3mFR-WXrP80V4AharU"
				/>
			</Head>
			<Navbar />
			<Main>
				<Container>
					<Presentation>
						<Text>Hi, I am</Text>
						<Title>Joa Marticorena</Title>
					</Presentation>

					<Img src="/profile.jpeg" alt="profile" />
				</Container>

				<AboutMe>
					<Text>About Me</Text>
					<Description>
						I am a passionate and creative frontend developer
						specialized in React.js motivated to grow and create
						products that people love to use. I am currently looking
						for my first job as a developer in order to apply
						everything I have learned both on platforms like Platzi
						and Udemy as well as creating my own projects.
					</Description>
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
						<SkillImg src="/firebase.svg.png" alt="firebase" />
					</Slide>
					<Slide>
						<SkillImg src="/js.png" alt="javascript" />
						<SkillImg src="/html.png" alt="html" />
						<SkillImg src="/css.svg.png" alt="css" />
						<SkillImg src="/react.png" alt="react" />
						<SkillImg src="/firebase.svg.png" alt="firebase" />
					</Slide>
				</Slider>

				<Slider>
					<Slide>
						<SkillImg src="/nextjs.svg.png" alt="next" />
						<SkillImg src="/ionic.svg.png" alt="ionic" />
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
						<SkillImg src="/solidity.svg" alt="solidity" />
						<SkillImg
							src="/styled-components.png"
							alt="styled-components"
						/>
						<SkillImg src="/mongodb.png" alt="mongodb" />
					</Slide>
				</Slider>

				<Projects>
					<Text>Projects</Text>

					<Project
						title="MyWeeks"
						description="A great Progressive Web App (PWA) to use as a weekly calendar made with Next.js, Ionic and Firebase. Ideal to set daily and weekly goals, add notes for the week and also set monthly and yearly goals and notes."
						name="myweeks"
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

				{/* <Grid>
					<a href="https://nextjs.org/docs" className={styles.card}>
						<h2>Documentation &rarr;</h2>
						<p>
							Find in-depth information about Next.js features and
							API.
						</p>
					</a>

					<a href="https://nextjs.org/learn" className={styles.card}>
						<h2>Learn &rarr;</h2>
						<p>
							Learn about Next.js in an interactive course with
							quizzes!
						</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/canary/examples"
						className={styles.card}
					>
						<h2>Examples &rarr;</h2>
						<p>
							Discover and deploy boilerplate example Next.js
							projects.
						</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
					>
						<h2>Deploy &rarr;</h2>
						<p>
							Instantly deploy your Next.js site to a public URL
							with Vercel.
						</p>
					</a>
				</Grid> */}
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
	height: 88vh;
	/* font-size: 180px; */
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
	width: 100%;
	max-width: 50vw;
	max-width: 350px;

	//box-shadow: 0px 0px 10000px #20d49060;
`;

const AboutMe = styled.div`
	width: 90%;
	max-width: 1050px;
	margin-top: 100px;
`;

const Skills = styled.div`
	width: 90%;
	max-width: 1050px;
	margin-top: 150px;
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
	overflow: hidden;
	justify-content: space-between;
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
	margin-top: 200px;
	margin-bottom: 1200px;
`;
