import React from "react";

import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";
import { inject, observer } from "mobx-react";
import styles from "./Home.module.css";
import arrow from "./../../images/arrow.svg";

import Boobottle from "./Boobottle";
import Race from "./Race";
import Preventie from "./Preventie";

import Social from "./../social/Social";

import "./../../styles/index.css";

const Home = () => {
	return (
		<>
			<header className={`panelHome ${styles.header}`}>
				<div>
					<h1>BOOBottle</h1>
					<p>Herbruikbare fles voor onvervangbare weldoeners</p>
				</div>
				<Social />
				<div className={styles.scroll}>
					<p>Scroll om meer te weten te komen</p>
					<img src={arrow} alt="arrow down" className={styles.bounce} />
				</div>
			</header>
			<Boobottle />
			<Race />
			<section className={styles.inschrijven}>
				<div className={styles.bg_inschrijven} />
				<div className={styles.callToAction}>
					<h4>Deelnemen</h4>
					<p>
						Wil jij graag deelnemen aan de Race for the Cure in team of liever
						individueel, schrijf je dan nu in!
					</p>
					<NavLink to={ROUTES.team} className="mainButton">
						Inschrijven
					</NavLink>
				</div>
				<div className={styles.callToAction}>
					<h4>Steunen</h4>
					<p>
						Kan je er niet bij zijn, maar je wil toch graag supporteren. Laat
						dan een message achter of sponsor de Race for the Cure.{" "}
					</p>
					<NavLink to={ROUTES.support} className="mainButton">
						Supporteren
					</NavLink>
				</div>
			</section>
			<Preventie />
		</>
	);
};

export default inject("uiStore")(observer(Home));
