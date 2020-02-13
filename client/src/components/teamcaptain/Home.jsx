import React, { Component } from "react";
import withAuthentication from "../auth/WithAuthentication";
import { inject, observer, renderReporter } from "mobx-react";

import planning from "./../../images/planning.png";

// import Bottle from "./../bottle/Bottle";
import Info from "./Info";
import Deelnemer from "./Deelnemer";
import Accepting from "./Accepting";

import styles from "./Home.module.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { activeItem: "Info" };
	}

	render() {
		const { currentTeam, updateTeam } = this.props.teamStore;
		const {
			currentParticipants,
			deleteParticipant,
			acceptingParticipants,
			updateParticipant
		} = this.props.participantStore;
		console.log(currentParticipants);
		const { activeItem } = this.state;
		return (
			<>
				<div>
					<h2>Instellingen</h2>
					<p className="subTitle">Selecteer een inschrijvings-methode</p>
				</div>
				<div>
					<button
						onClick={e => this.setState({ activeItem: e.currentTarget.value })}
						value="Info"
						className={
							activeItem === "Info"
								? `${styles.buttonsMenu} ${styles.active}`
								: styles.buttonsMenu
						}
					>
						Team informatie
					</button>
					<button
						onClick={e => this.setState({ activeItem: e.currentTarget.value })}
						value="Deelnemers"
						className={
							activeItem === "Deelnemers"
								? `${styles.buttonsMenu} ${styles.active}`
								: styles.buttonsMenu
						}
					>
						Deelnemers
					</button>
					<button
						onClick={e => this.setState({ activeItem: e.currentTarget.value })}
						value="Accepting"
						className={
							activeItem === "Accepting"
								? `${styles.buttonsMenu} ${styles.active}`
								: styles.buttonsMenu
						}
					>
						Aanvragen {acceptingParticipants.length}
					</button>
					<button
						onClick={e => this.setState({ activeItem: e.currentTarget.value })}
						value="Planning"
						className={
							activeItem === "Planning"
								? `${styles.buttonsMenu} ${styles.active}`
								: styles.buttonsMenu
						}
					>
						Praktische informatie
					</button>
				</div>

				{activeItem === "Info"
					? currentTeam.map((team, index) => (
							<Info team={team} onUpdate={updateTeam} key={index} />
					  ))
					: null}
				{activeItem === "Deelnemers" ? (
					<section className={styles.panelAccount}>
						<h3>Deelnemerslijst</h3>
						<p>Aantal deelnemers: {currentParticipants.length}</p>
						<div className={styles.overzicht}>
							<p>Namen</p>
							<p>BOOBottle</p>
							<p>Prijs/persoon</p>
							{currentParticipants.map((person, index) => (
								<Deelnemer
									key={index}
									person={person}
									onDelete={deleteParticipant}
								/>
							))}
						</div>
					</section>
				) : null}
				{activeItem === "Accepting" ? (
					<section className={styles.panelAccount}>
						<h3>Aanvraaglijst</h3>
						<p>Dit zijn mensen die uw team willen aansluiten</p>
						{acceptingParticipants.map((person, index) => (
							<Accepting
								index={index}
								person={person}
								onDelete={deleteParticipant}
								onUpdate={updateParticipant}
							/>
						))}
					</section>
				) : null}

				{activeItem === "Planning" ? (
					<section className={styles.panelAccount}>
						<h2>Planning</h2>
						<img src={planning} alt="overzicht dagplanning" width="1131" />
					</section>
				) : null}
			</>
		);
	}
}

export default inject(
	"teamStore",
	"participantStore"
)(withAuthentication(observer(Home)));
