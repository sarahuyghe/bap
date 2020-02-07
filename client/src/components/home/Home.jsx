import React, { Component } from "react";
// import { Controller, Scene } from "react-scrollmagic";
// import ScrollMagic from "scrollmagic";
// import addIndicators from "plugins/debug.addIndicators";

import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";
import { inject, observer } from "mobx-react";
import styles from "./Home.module.css";

import Boobottle from "./Boobottle";
import Race from "./Race";
import Social from "./../social/Social";

import "./../../styles/index.css";

// const Home = ({ uiStore }) => {
const Home = () => {
	// componentDidMount() {
	// 	new ScrollMagic.Scene({ triggerElement: "#test", duration: 300 })
	// 		.setClassToggle("#test", "fade-in")
	// 		.addIndicators({ name: "1 (duration: 300)" }) // add indicators (requires plugin)
	// 		.addTo(this.controller);
	// 	// build scenes
	// }

	return (
		<>
			<header className={`panel ${styles.header}`}>
				<div>
					<h1>BOOBottle</h1>
					<p>Herbruikbare fles voor onvervangbare weldoeners</p>
				</div>
				<Social />
				<p className={styles.scroll}>Scroll om meer te weten te komen</p>
			</header>
			<Boobottle />
			<section className={styles.panel}>
				<Race />
			</section>
			<section className={styles.inschrijven}>
				<div className={styles.bg_inschrijven} />
				<div className={styles.callToAction}>
					<h4>Deelnemen</h4>
					<p>
						Wil jij graag deelnemen aan de Race for the Cure in team of liever
						individueel, schrijf je dan nu in!
					</p>
					<NavLink to={ROUTES.team}>Inschrijven</NavLink>
				</div>
				<div className={styles.callToAction}>
					<h4>Steunen</h4>
					<p>
						Kan je er niet bij zijn, maar je wil toch graag supporteren. Laat
						dan een message achter of sponsor de Race for the Cure.{" "}
					</p>
					<NavLink to={ROUTES.support}>Supporteren</NavLink>
				</div>
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
};

export default inject("uiStore")(observer(Home));
