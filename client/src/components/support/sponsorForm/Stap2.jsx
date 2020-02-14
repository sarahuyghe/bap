import React from "react";

import { ROUTES } from "./../../../constants/";
import { NavLink } from "react-router-dom";

import styles from "./../MessageForm.module.css";

const Stap2 = () => {
	return (
		<section id="sec2" className={styles.panel}>
			<div className="extraInfo">
				<h3>1. Selecteer een team</h3>
				<p>
					Met uw donatie kunnen we meer onderzoek rond borstkanker finacieren
				</p>
			</div>
			<div className="deeltitel">Een team sponseren</div>
			<section className={styles.formSection}>
				<div></div>
			</section>
			<NavLink to={ROUTES.confirmDonate} className="secondaireButton">
				Doneren
			</NavLink>
		</section>
	);
};

export default Stap2;
