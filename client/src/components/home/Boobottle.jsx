import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const ClassToggleStyled = styled.div`
	.section {
		height: 100vh;
	}

	.first {
		color: #c4c4c4;

		& p {
			visibility: hidden;
		}
	}

	.sec {
		color: #c4c4c4;

		& p {
			visibility: hidden;
		}
	}
	.third {
		color: #c4c4c4;

		& p {
			visibility: hidden;
		}
	}
	.four {
		color: #c4c4c4;

		& p {
			visibility: hidden;
		}
	}

	.check {
		color: black;
		& p {
			visibility: visible;
		}
	}

	.zap {
		width: 100%;
	}
`;

const Boobottle = () => (
	<ClassToggleStyled>
		<div id="trigger" />
		{/* <h2>Show first titel</h2>
		</div> */}
		<Controller>
			<Scene
				// duration={600}
				// classToggle="zap"
				triggerElement="#trigger"
				indicators={true}
				pin
			>
				<section id="trigger" style={{ height: "5vh" }}>
					<h3>Wat is BOOBottle</h3>
					<p>
						De BOOBottle is niet gewoon een fles, het is fles die vecht tegen
						borstkanker.
					</p>

					<div>Toggle other class</div>
				</section>
			</Scene>
			<Scene>
				<>
					<div className="first">
						<h2 id="ek">Wat is er te doen</h2>
						<p className="showText1">
							De BOOBottle is niet gewoon een fles, het is fles die vecht tegen
							borstkanker. Jaarlijks overwinnen er duizende vrouwen EN mannen de
							strijd tegen borstkanker niet.
						</p>
					</div>
					<div className="sec">
						<h2 id="ek">Waarom doen we het?</h2>
						<p className="showText1">
							De BOOBottle is niet gewoon een fles, het is fles die vecht tegen
							borstkanker. Jaarlijks overwinnen er duizende vrouwen EN mannen de
							strijd tegen borstkanker niet.
						</p>
					</div>
					<div className="third">
						<h2 id="ek">Waarom doen we het?</h2>
						<p className="showText1">
							De BOOBottle is niet gewoon een fles, het is fles die vecht tegen
							borstkanker. Jaarlijks overwinnen er duizende vrouwen EN mannen de
							strijd tegen borstkanker niet.
						</p>
					</div>
					<div className="four">
						<h2 id="ek">Waarom doen we het?</h2>
						<p className="showText">
							De BOOBottle is niet gewoon een fles, het is fles die vecht tegen
							borstkanker. Jaarlijks overwinnen er duizende vrouwen EN mannen de
							strijd tegen borstkanker niet.
						</p>
					</div>
				</>
				{/* )} */}
			</Scene>
			<Scene
				classToggle={[".first", "check"]}
				// classToggle="check"
				// triggerElement="#ek"
				reverse={true}
				indicators={true}
				duration={100}
				pin
			>
				<div></div>
			</Scene>
			<Scene
				// classToggle="check"
				// triggerElement="#trigger"
				classToggle={[".sec", "check"]}
				reverse={true}
				indicators={true}
				duration={100}
				pin
			>
				{/* <div style={{ height: "5vh" }}>Toggle other class</div> */}
				<div></div>
			</Scene>
			<Scene
				// classToggle="check"
				// triggerElement="#trigger"
				classToggle={[".third", "check"]}
				reverse={true}
				indicators={true}
				duration={100}
				pin
			>
				<div></div>
				{/* <div style={{ height: "5vh" }}>Toggle other class</div> */}
			</Scene>
			<Scene
				// classToggle="check"
				// triggerElement="#trigger"
				classToggle={[".four", "check"]}
				reverse={true}
				indicators={true}
				duration={100}
				pin
			>
				<div></div>

				{/* <div style={{ height: "5vh" }}>Toggle other class</div> */}
			</Scene>
		</Controller>
	</ClassToggleStyled>
);

export default Boobottle;
