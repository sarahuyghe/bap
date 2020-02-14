import React from "react";

import { ROUTES } from "./../../constants/";
import { NavLink } from "react-router-dom";

import styles from "./MessageForm.module.css";

const confirmDonate = () => {
	return (
		<section id="sec1" className={styles.panel}>
			<div className="extraInfo">
				<h3>3. Bedankt voor uw sponsering!</h3>
				<p>U zal nog een betalingslink ontvangen via email</p>
			</div>
			<div className="deeltitel">Een team sponseren</div>
			<NavLink to={ROUTES.home} className="secondaireButton">
				Startpagina
			</NavLink>
		</section>
	);
};

export default confirmDonate;
