import React, { Component } from "react";
import group from "./../../images/group.png";
import connectTeam from "./../../images/group2.png";
import solo from "./../../images/solo.png";
import arrow from "./../../images/arrow.svg";
import arrowWhite from "./../../images/arrowWhite.svg";

import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";
import "./../../styles/index.css";

import styles from "./Home.module.css";
import Social from "./../social/Social";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeT: false,
			activeCTT: false,
			activeI: false,
			activeTeam: false,
			activeConnect: false,
			activePerson: false
		};
	}

	render() {
		const {
			activeT,
			activeCTT,
			activeI,
			activeTeam,
			activeConnect,
			activePerson
		} = this.state;
		return (
			<>
				<section className={styles.header}>
					<div>
						<h2>Inschrijven</h2>
						<p className="subTitle">Selecteer een inschrijvings-methode</p>
					</div>
					<div>
						<div
							className={styles.animation}
							onClick={() => {
								this.setState({
									activeT: !activeT,
									activeCTT: false,
									activeI: false
								});
							}}
							onMouseEnter={() => this.setState({ activeTeam: !activeTeam })}
							onMouseLeave={() => this.setState({ activeTeam: !activeTeam })}
						>
							<h3>Een team maken</h3>
							<img src={group} alt="" />
						</div>
						<div
							className={`${styles.opportunities} ${
								activeTeam ? null : styles.hide
							}`}
						>
							<img src={arrowWhite} alt="arrow up" />
							<ul>
								<li>
									Uw inschrijvings geld verminderd van €15 naar €12 per persoon
								</li>
								<li>
									U mag zal een BOOBottle personaliseren voor uw hele team.
								</li>
								<li>
									Vanaf je als team met 50 of meer bent ingeschreven bent krijgt
									u ook een party-tent om samen te verzamelen
								</li>
								<li>Het grootste team ook nog een prijs winnen</li>
							</ul>
						</div>
					</div>
					<div>
						<div
							className={styles.animation}
							onClick={() => {
								this.setState({
									activeT: false,
									activeCTT: !activeCTT,
									activeI: false
								});
							}}
							onMouseEnter={() =>
								this.setState({ activeConnect: !activeConnect })
							}
							onMouseLeave={() =>
								this.setState({ activeConnect: !activeConnect })
							}
						>
							<h3>Aansluiten aan een team</h3>
							<img src={connectTeam} alt="" />
						</div>
						<div
							className={`${styles.opportunities} ${
								activeConnect ? null : styles.hide
							}`}
						>
							<img src={arrowWhite} alt="arrow up" />
							<ul>
								<li></li>
							</ul>
						</div>
					</div>
					<div>
						<div
							className={styles.animation}
							onClick={() => {
								this.setState({
									activeT: false,
									activeCTT: false,
									activeI: !activeI
								});
							}}
							onMouseEnter={() =>
								this.setState({ activePerson: !activePerson })
							}
							onMouseLeave={() =>
								this.setState({ activePerson: !activePerson })
							}
						>
							<h3>Individueel inschrijven</h3>
							<img src={solo} alt="" />
						</div>
						<div
							className={`${styles.opportunities} ${
								activePerson ? null : styles.hide
							}`}
						>
							<img src={arrowWhite} alt="arrow up" />
							<ul>
								<li></li>
							</ul>
						</div>
					</div>
					<Social />
					{activeT ? (
						<NavLink
							to={ROUTES.stap1Team}
							className={`mainButton ${styles.nextButton}`}
						>
							Volgende
						</NavLink>
					) : null}
					{activeCTT ? (
						<NavLink
							to={ROUTES.stap1Connect}
							className={`mainButton ${styles.nextButton}`}
						>
							Volgende
						</NavLink>
					) : null}
					{activeI ? (
						<NavLink
							to={ROUTES.stap1Indi}
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
