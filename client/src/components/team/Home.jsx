import React, { Component } from "react";
import group from "./../../images/group.png";
import connectTeam from "./../../images/group2.png";
import solo from "./../../images/solo.png";

import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";
import "./../../styles/index.css";

import styles from "./Home.module.css";
import Social from "./../social/Social";
import TeamForm from "./TeamForm";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { active: false };
	}
	render() {
		const { active } = this.state;
		return (
			<>
				<section className={styles.header}>
					<div>
						<h2>Inschrijven</h2>
						<p>Selecteer een inschrijvings-methode</p>
					</div>
					<div>
						<div
							className={styles.animation}
							onClick={() => {
								console.log(active);
								this.setState({ active: !active });
							}}
						>
							<h3>Een team maken</h3>
							<img src={group} alt="" />
						</div>
					</div>
					<div>
						<div className={styles.animation}>
							<h3>Aansluiten aan een team</h3>
							<img src={connectTeam} alt="" />
						</div>
					</div>
					<div>
						<div className={styles.animation}>
							<h3>Individueel inschrijven</h3>
							<img src={solo} alt="" />
						</div>
					</div>
					<Social />
					<p>Scroll om meer te weten te komen</p>
				</section>
				{active ? <TeamForm /> : null}
			</>
		);
	}
}

export default Home;
