import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";
import Social from "./../social/Social";
import arrow from "./../../images/arrow.svg";
import arrowWhite from "./../../images/arrowWhite.svg";

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
						<h2>Supporteren</h2>
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
							<h3>Message in a BOOBottle</h3>
							<img src="" alt="" />
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
							<h3>Een team sponseren</h3>
							<img src="" alt="" />
						</div>
						<div
							className={`${styles.opportunities} ${
								activeDoneer ? null : styles.hide
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

					<Social />
					<div className={styles.scrollAction}>
						<p>Scroll om een steunbericht aan te maken</p>
						<img src={arrow} alt="arrow down" />
					</div>
				</section>
				{activeM ? <MessageForm /> : null}
				{activeD ? <Sponsor /> : null}
			</>
		);
	}
}

export default Home;
