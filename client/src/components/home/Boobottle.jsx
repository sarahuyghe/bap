import React, { Component } from "react";
import styles from "./Boob.module.css";
import arrow from "./../../images/arrow.svg";

import BOOBottle from "./../../images/BOOBottle.png";

class Boobottle extends Component {
	constructor(props) {
		super(props);
		this.state = { showHyd: true, showEv: false, showEve: false };
	}

	render() {
		const { showHyd, showEv, showEve } = this.state;
		return (
			<section className={`panelHome ${styles.boob}`} id="#test">
				<div className={styles.infoBoob}>
					<h2>Wat is BOOBottle</h2>
					<p className="titleMini">
						De BOOBottle is niet gewoon een fles, het is fles die vecht tegen
						borstkanker.
					</p>
				</div>
				<div className={styles.boobSteps}>
					<div
						className={showHyd ? null : styles.notSelected}
						onClick={() =>
							this.setState({
								showHyd: !showHyd,
								showEv: false,
								showEve: false
							})
						}
					>
						<img
							src={arrow}
							alt="pijltje voor te tonen"
							className={
								showHyd ? styles.arrowShow : `${styles.arrowShow} hide`
							}
							width="30"
						/>
						<h3>Bewustmaking</h3>
						<p>
							Preventief uw borsten controleren is van uiterste belang, hoe
							vroeger de diagnose kan gesteld worden, hoe meer kans de patiënt
							heeft om van de ziekte te herstellen.
						</p>
					</div>
					<div
						className={showEv ? null : styles.notSelected}
						onClick={() =>
							this.setState({ showHyd: false, showEv: !showEv, showEve: false })
						}
					>
						<img
							src={arrow}
							alt="pijltje voor te tonen"
							className={showEv ? styles.arrowShow : `${styles.arrowShow} hide`}
							width="30"
						/>
						<h3>Beweging</h3>
						<p>
							Beweging is een zeer belangrijke factor en heeft een positieve
							impact in elke fase van borstkanker. Dus zowel bij de preventie
							tegen borstkanker, als tijdens de behandeling en bij herstel.
						</p>
					</div>
					<div
						className={showEve ? null : styles.notSelected}
						onClick={() =>
							this.setState({
								showHyd: false,
								showEv: false,
								showEve: !showEve
							})
						}
					>
						<img
							src={arrow}
							alt="pijltje voor te tonen"
							className={
								showEve ? styles.arrowShow : `${styles.arrowShow} hide`
							}
							width="30"
						/>
						<h3>Steunen</h3>
						<p>
							Lotgenoten kampen vaak met angststoornissen en depressie, door hen
							steun te bieden kan u de lotgenoot helpen motiveren om positief te
							blijven, de moed niet op te geven en hen aanzetten tot beweging.
						</p>
					</div>
				</div>
				<div className={styles.bg} />
				<img src={BOOBottle} alt="boobottle" className={styles.boobottle} />
			</section>
		);
	}
}

export default Boobottle;
