import React, { Component } from "react";
import styles from "./Race.module.css";
import arrow from "./../../images/arrow.svg";

import BelgieMap from "./../../images/belgie.mp4";

class Race extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showWat: true,
			showWar: false,
			showVoor: false,
			showWaar: false
		};
	}
	render() {
		const { showWat, showWar, showVoor, showWaar } = this.state;

		return (
			<section className={`panelHome ${styles.race}`}>
				<div className={styles.infoRace}>
					<h2>Race for the Cure</h2>
					<p className="titleMini">
						Wereldwijd het grootste evenement in de strijd tegen borstkanker.
					</p>
				</div>
				<div className={styles.border} />
				<video autoPlay width="657" className={styles.videoMap}>
					<source src={BelgieMap} type="video/mp4" />
				</video>
				<div className={styles.raceSteps}>
					<div>
						<img
							src={arrow}
							alt="pijltje voor te tonen"
							className={
								showWat ? styles.arrowShow : `${styles.arrowShow} hide`
							}
							width="30"
						/>
						<h3
							className={showWat ? null : styles.notSelected}
							onClick={() =>
								this.setState({
									showWat: !showWat,
									showWar: false,
									showVoor: false,
									showWaar: false
								})
							}
						>
							Wat is het?
						</h3>
					</div>
					<div>
						<img
							src={arrow}
							alt="pijltje voor te tonen"
							className={
								showWar ? styles.arrowShow : `${styles.arrowShow} hide`
							}
							width="30"
						/>
						<h3
							className={showWar ? null : styles.notSelected}
							onClick={() =>
								this.setState({
									showWat: false,
									showWar: !showWar,
									showVoor: false,
									showWaar: false
								})
							}
						>
							Waarom doen we het?
						</h3>
					</div>
					<div>
						<img
							src={arrow}
							alt="pijltje voor te tonen"
							className={
								showVoor ? styles.arrowShow : `${styles.arrowShow} hide`
							}
							width="30"
						/>
						<h3
							className={showVoor ? null : styles.notSelected}
							onClick={() =>
								this.setState({
									showWat: false,
									showWar: false,
									showVoor: !showVoor,
									showWaar: false
								})
							}
						>
							Voor wie doen we het?
						</h3>
					</div>
					<div>
						<img
							src={arrow}
							alt="pijltje voor te tonen"
							className={
								showWaar ? styles.arrowShow : `${styles.arrowShow} hide`
							}
							width="30"
						/>
						<h3
							className={showWaar ? null : styles.notSelected}
							onClick={() =>
								this.setState({
									showWat: false,
									showWar: false,
									showVoor: false,
									showWaar: !showWaar
								})
							}
						>
							Waar is het?
						</h3>
					</div>
				</div>
				<div className={styles.raceStepsUitleg}>
					<p className={showWat ? styles.fadeIn : styles.hide}>
						De Race for the Cure is wereldwijd het grootste evenement in de
						strijd tegen borstkanker. Op het programma staat een wandeltocht (3
						km) en een looptocht (6 km). Daarnaast wordt ook een groot dorp
						opgetrokken. De hele dag is gevuld met animatie en intense emoties.
						Op deze dag vieren lotgenoten in Antwerpen, Brussel en Namur het
						leven, toont iedereen solidair steun aan lotgenoten en staan we
						samen stil bij iedereen die er jammer genoeg niet meer is.
					</p>
					<p className={showWar ? styles.fadeIn : styles.hide}>
						De BOOBottle is niet gewoon een fles, het is fles die vecht tegen
						borstkanker. Jaarlijks overwinnen er duizende vrouwen EN mannen de
						strijd tegen borstkanker niet.
					</p>
					<p className={showVoor ? styles.fadeIn : styles.hide}>
						De Race for the Cure is wereldwijd het grootste evenement in de
						strijd tegen borstkanker. Op het programma staat een wandeltocht (3
						km) en een looptocht (6 km). Daarnaast wordt ook een groot dorp
						opgetrokken. De hele dag is gevuld met animatie en intense emoties.
						Op deze dag vieren lotgenoten in Antwerpen, Brussel en Namur het
						leven, toont iedereen solidair steun aan lotgenoten en staan we
						samen stil bij iedereen die er jammer genoeg niet meer is.
					</p>
					<p className={showWaar ? styles.fadeIn : styles.hide}>
						De BOOBottle is niet gewoon een fles, het is fles die vecht tegen
						borstkanker. Jaarlijks overwinnen er duizende vrouwen EN mannen de
						strijd tegen borstkanker niet.
					</p>
				</div>
			</section>
		);
	}
}

export default Race;
