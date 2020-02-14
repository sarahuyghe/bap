import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";
import Social from "./../social/Social";
import arrow from "./../../images/arrow.svg";
import arrowWhite from "./../../images/arrowWhite.svg";
import messageBottle from "./../../images/messageBottle.png";
import moneyBottle from "./../../images/moneyBottle.png";

import MessageForm from "./MessageForm";
import Sponsor from "./Sponsor";

import styles from "./Home.module.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeM: false,
			activeD: false,
			activeMessage: false,
			activeDoneer: false
		};
	}
	render() {
		const { activeM, activeD, activeDoneer, activeMessage } = this.state;
		return (
			<>
				<section className={styles.header}>
					<div>
						<h1>Supporteren</h1>
						<p className="subTitle">Selecteer een supporters-methode</p>
					</div>
					<div>
						<div
							className={styles.animation}
							onClick={() => {
								this.setState({
									activeM: !activeM,
									activeD: false
								});
							}}
							onMouseEnter={() =>
								this.setState({ activeMessage: !activeMessage })
							}
							onMouseLeave={() =>
								this.setState({ activeMessage: !activeMessage })
							}
						>
							<img src={messageBottle} alt="message in a bottle" width="108" />
							<h3>Message in a BOOBottle</h3>
						</div>
						<div
							className={`${styles.opportunities} ${
								activeMessage ? null : styles.hide
							}`}
						>
							<img src={arrowWhite} alt="arrow up" />
							<p>
								Via message in a bottle kun je een team steunen naar keuze. Dit
								doe je door een steunbericht te schrijven die het team dan kan
								lezen op de dag zelf. Tijdens het inschrijven van een team maakt
								de teamcaptain zijn/haar gepersonaiseerde drinkfles. In deze
								drinkfles kunnen ze op het evenement jou steun bericht terug
								vinden om hun succes te wens op de race.
							</p>
						</div>
					</div>
					<div>
						<div
							className={styles.animation}
							onClick={() => {
								this.setState({
									activeM: false,
									activeD: !activeD
								});
							}}
							onMouseEnter={() =>
								this.setState({ activeDoneer: !activeDoneer })
							}
							onMouseLeave={() =>
								this.setState({ activeDoneer: !activeDoneer })
							}
						>
							<img src={moneyBottle} alt="donate bottle" width="108" />
							<h3>Een team sponseren</h3>
						</div>
						<div
							className={`${styles.opportunities} ${
								activeDoneer ? null : styles.hide
							}`}
						>
							<img src={arrowWhite} alt="arrow up" />
							<p>
								België is wereldkampioen borstkanker. Toch is het voor
								onderzoekers van bij ons die innovatieve wetenschappelijke
								projecten opzetten rond borstkanker, vaak moeilijk om aan de
								nodige financiële middelen te geraken. Op kleine en middelgrote
								schaal wordt gezocht naar nieuwe methodes op het vlak van
								screening, behandeling en nazorg. Met andere woorden uw
								bijdrage, groot of klein, is steeds zeer welkom. Op deze manier
								toon je ook aan het team dat je wilt steunen dat je er ook iet
								voor over hebt.
							</p>
						</div>
					</div>

					<Social />
					{activeM ? (
						<NavLink
							to={ROUTES.messageForm}
							className={`mainButton ${styles.nextButton}`}
						>
							Volgende
						</NavLink>
					) : null}
					{activeD ? (
						<NavLink
							to={ROUTES.stap1Connect}
							className={`mainButton ${styles.nextButton}`}
						>
							Volgende
						</NavLink>
					) : null}
				</section>
			</>
		);
	}
}

export default Home;
