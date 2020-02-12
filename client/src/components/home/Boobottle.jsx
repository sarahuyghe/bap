import React, { Component } from "react";
import styles from "./Boob.module.css";
import arrow from "./../../images/arrow.svg";

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
						<h3>Hydratatie</h3>
						<p>
							De BOOBottle is niet gewoon een fles, het is fles die vecht tegen
							borstkanker. Jaarlijks overwinnen er duizende vrouwen EN mannen de
							strijd tegen borstkanker niet.
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
						<h3>Evenement</h3>
						<p>
							De BOOBottle is niet gewoon een fles, het is fles die vecht tegen
							borstkanker. Jaarlijks overwinnen er duizende vrouwen EN mannen de
							strijd tegen borstkanker niet.
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
						<h3>Evenement</h3>
						<p>
							De BOOBottle is niet gewoon een fles, het is fles die vecht tegen
							borstkanker. Jaarlijks overwinnen er duizende vrouwen EN mannen de
							strijd tegen borstkanker niet.
						</p>
					</div>
				</div>
				<div className={styles.bg} />
			</section>
		);
	}
}

export default Boobottle;
