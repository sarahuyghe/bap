import React from "react";

import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";

import styles from "./Home.module.css";

const Home = () => {
	return (
		<section className={styles.bg}>
			<h2>Inschrijven</h2>
			<h3>Selecteer een inschrijvings-methode</h3>
			<div>
				<p>
					Als u in team inschrijft heeft u een aantal voordelen. Ten eerste
					verminderd uw inschrijvings geld van €15 naar €12, vervolgens krijgt
					uw nog een officeele think pink t-shirt. Elk team krijgt ook één zelf
					gepersonaliseerde drinkfles (als je een fles voor jezelf wilt kunt u
					deze bij bestellen). Vanaf je als team met 50 of meer bent
					ingeschreven krijgt u ook een party-tent om samen te verzamelen. Tot
					slot kan het grootste team ook nog een prijs winnen
				</p>
				<NavLink to={ROUTES.teamform}>Een team maken</NavLink>
				<NavLink to={ROUTES.connectTeam}>Aansluiten bij een team</NavLink>
			</div>
			<div>
				<h2>Alleen lopen/wandelen?</h2>
				<h3>Ongestoord en vrij</h3>
				<p>Liever zin om alleen deel te nemen? Geen probleem. </p>
				<NavLink to={ROUTES.individueel}>Individueel inschrijven</NavLink>
			</div>
		</section>
	);
};

export default Home;
