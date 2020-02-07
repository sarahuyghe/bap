import React, { Component } from "react";
import { Controller, Scene } from "react-scrollmagic";
import ScrollMagic from "scrollmagic";
// import addIndicators from "plugins/debug.addIndicators";

import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";
import { inject, observer } from "mobx-react";
import Boobottle from "./Boobottle";
import "./../../styles/index.css";

import Social from "./../social/Social";

import styles from "./Home.module.css";

// const Home = ({ uiStore }) => {
class Home extends Component {
	constructor(props) {
		super(props);
		// this.controller = new ScrollMagic.Controller();
	}

	// componentDidMount() {
	// 	new ScrollMagic.Scene({ triggerElement: "#test", duration: 300 })
	// 		.setClassToggle("#test", "fade-in")
	// 		.addIndicators({ name: "1 (duration: 300)" }) // add indicators (requires plugin)
	// 		.addTo(this.controller);
	// 	// build scenes
	// }
	render() {
		const test = {
			color: "white",
			backgroundColor: "DodgerBlue"
			// padding: "10px",
			// fontFamily: "Arial"
		};
		return (
			<>
				{/* <Controller globalSceneOptions={{ triggerHook: "onLeave" }} reverse> */}
				{/* <Scene pin> */}
				{/* <Controller> */}
				<header className={`${styles.panel} ${styles.header}`}>
					<div>
						<h1>BOOBottle</h1>
						<p>Herbruikbare fles voor onvervangbare weldoeners</p>
					</div>
					<Social />
					<p className={styles.scroll}>Scroll om meer te weten te komen</p>
				</header>
				{/* </Scene> */}
				{/* <Scene pin> */}
				<Boobottle />

				<section
					className={`${styles.panel} ${styles.boob}`}
					id="#test"
				></section>
				{/* <Scene pin> */}
				<section className={`${styles.panel} ${styles.race}`}>
					<div className={styles.infoRace}>
						<h2>Race for the Cure</h2>
						<p>
							Wereldwijd het grootste evenement in de strijd tegen borstkanker.
						</p>
					</div>
					<section>
						<h3>Wat is het?</h3>
						<p>
							De Race for the Cure is wereldwijd het grootste evenement in de
							strijd tegen borstkanker. Op het programma staat een wandeltocht
							(3 km) en een looptocht (6 km). Daarnaast wordt ook een groot dorp
							opgetrokken. De hele dag is gevuld met animatie en intense
							emoties. Op deze dag vieren lotgenoten in Antwerpen, Brussel en
							Namur het leven, toont iedereen solidair steun aan lotgenoten en
							staan we samen stil bij iedereen die er jammer genoeg niet meer
							is.
						</p>
					</section>

					<NavLink to={ROUTES.team}>Inschrijven</NavLink>

					<NavLink to={ROUTES.support}>Supporteren</NavLink>
				</section>
				{/* </Scene> */}
				{/* <Scene pin>
					<div className={`${styles.panel} ${styles.boob}`}>
						<section>
							<h2>Preventie</h2>
							<h4>Want voorkomen is beter dan genezen</h4>
							<p>
								Uit studies is gebleken dat beweging 1 van de meest effectieve
								preventie maatregeling is tegen borstkanker. Moest je nog geen
								reden hebben om deel te nemen aan de Race for the Cure heb je er
								nu alvast één. Maar je ook frequent checken en er dus
								vroegtijdig bij zijn kan jou mogelijke interactie met deze
								ziekte verkorten. Hieronder kan je een aantal symptomen
								terugvinden waarop jijzelf kan controleren
							</p>
						</section>
						<section>
							<h2>Symptomen</h2>
							<h4>dit zijn de symtopen dat je bij jezelf kan checken </h4>
							<img src="" alt="" />

							<h5>Knobbels op de borst huid</h5>
							<p>
								Met een knobbeltje in de borst wordt een verdikking bedoeld die
								anders is dan de bobbeligheid die je normaal voelt in de borst.
								Een knobbeltje kan aanvoelen als een knikker, en voelt harder en
								stugger aan dan de rest van de borst. Een knobbel in de borst
								kan ook aanvoelen als een wat harder of stugger plekje, dat
								anders voelt dan de rest van de borst.
							</p>
						</section>
					</div>
				</Scene> */}
				{/* </Controller> */}
			</>
		);
	}
}

export default inject("uiStore")(observer(Home));
