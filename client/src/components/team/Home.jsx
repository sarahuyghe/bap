import React, { Component } from "react";

import arrow from "./../../images/arrow.svg";
import arrowWhite from "./../../images/arrowWhite.svg";

import teamVideo from "./../../images/createTeam.mp4";
import joinIndividually from "./../../images/joinIndividually.mp4";
import joinTeam from "./../../images/joinTeam.mp4";

import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";
import "./../../styles/index.css";

import styles from "./Home.module.css";
import Social from "./../social/Social";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTeam: false,
			activeConnect: false,
			activePerson: false,
			activeItem: "team"
		};
	}

	render() {
		const { activeTeam, activeConnect, activePerson, activeItem } = this.state;
		return (
			<>
				<section className={styles.header}>
					<div>
						<h1>Inschrijven</h1>
						<p className="subTitle">Selecteer een inschrijvings-methode</p>
					</div>
					<div>
						<div
							id="team"
							className={styles.animation}
							onClick={e => {
								this.setState({
									activeT: true,
									activeCTT: false,
									activeI: false,
									activeItem: e.currentTarget.id
								});
							}}
							onMouseEnter={e => {
								this.setState({ activeTeam: !activeTeam });
							}}
							onMouseLeave={() => this.setState({ activeTeam: !activeTeam })}
						>
							<h3>Een team maken</h3>
							<video autoPlay muted width="330">
								<source src={teamVideo} type="video/mp4" />
							</video>
						</div>
						<div
							className={`${styles.opportunities} ${
								activeItem === "team" ? null : styles.hide
							} `}
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
							id="connect"
							className={styles.animation}
							onClick={e => {
								this.setState({
									activeT: false,
									activeCTT: true,
									activeI: false,
									activeItem: e.currentTarget.id
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
							<video autoPlay muted width="330">
								<source src={joinTeam} type="video/mp4" />
							</video>
						</div>
						<div
							className={`${styles.opportunities} ${
								activeItem === "connect" ? null : styles.hide
							}`}
						>
							<img src={arrowWhite} alt="arrow up" />
							<ul>
								<li>
									Uw inschrijvings geld verminderd van €15 naar €12 per persoon
								</li>
								<li>Je leert nieuwe mensen kennen</li>
								<li>Je leert nieuwe mensen kennen</li>
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
							id="indi"
							className={styles.animation}
							onClick={e => {
								this.setState({
									activeT: false,
									activeCTT: false,
									activeI: true,
									activeItem: e.currentTarget.id
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
							<video autoPlay muted width="330">
								<source src={joinIndividually} type="video/mp4" />
							</video>
						</div>
						<div
							className={`${styles.opportunities} ${
								activeItem === "indi" ? null : styles.hide
							}`}
						>
							<img src={arrowWhite} alt="arrow up" />
							<ul>
								<li>U betaalt €15 inschrijvingsgeld</li>
								<li>Je leert nieuwe mensen kennen</li>
								<li>Ongestoord en vrij</li>
							</ul>
						</div>
					</div>
					<Social />
					{activeItem === "team" ? (
						<NavLink
							to={ROUTES.stap1Team}
							className={`mainButton ${styles.nextButton}`}
						>
							Volgende
						</NavLink>
					) : null}
					{activeItem === "connect" ? (
						<NavLink
							to={ROUTES.stap1Connect}
							className={`mainButton ${styles.nextButton}`}
						>
							Volgende
						</NavLink>
					) : null}
					{activeItem === "indi" ? (
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
