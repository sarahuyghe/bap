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
						Beweging, bewustwording en steun. De 3 grote peilers van de Race for
						the Cure. Beweging is een belangrijk element bij borstkanker, zowel
						voor, tijdens als na de diagnose. Bewustmaking, mensen bewustmaken
						van borstkanker. Wat kan men doen als preventie, wat zijn de
						symptomen en 'oh nee, de diagnose is gesteld wat nu?' . Steun, de
						race for the cure is een belangrijk evenement voor lotgenoten en hun
						familie. Steun bieden doorheen de ziekte helpt lotgenoten om hen te
						motiveren de hoop niet op te geven. Kom jij mee lopen of mee
						wandelen om lotgenoten steunt te bieden? Of kan jij er niet bij zijn
						door praktische of fysische beperking, maar wil jij wel heel graag
						steun bieden? Dan kan u altijd een message in the bottle sturen.
					</p>
					<p className={showVoor ? styles.fadeIn : styles.hide}>
						De race for the Cure is helemaal geen race, het is een evenement
						waarbij men wil aanzetten tot beweging. Je hoeft helemaal geen
						sportieveling of nog fris jong en fit te zijn om deel te nemen.
						Deelnemen en andere steunen is belangrijk dan de eindmeet halen. Met
						een kids run van 850m, een wandeltocht van 3km en een looptocht van
						6km, is er voor iedereen wel wat wils. Ook honden zijn toegelaten,
						breng dus gerust je volledige familie mee.
					</p>
					<p className={showWaar ? styles.fadeIn : styles.hide}>
						De race vind plaats op 4 verschillende locaties over heel België. Op
						27 september vind het evenement zowel plaats in Antwerpen ,
						Charleroi als in Namen. In Brussel neemt de Race for the Cure op 4
						oktober plaats.
					</p>
				</div>
			</section>
		);
	}
}

export default Race;
