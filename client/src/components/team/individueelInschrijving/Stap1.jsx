import React, { Component } from "react";
import styles from "./../Individueel.module.css";

import { ROUTES } from "./../../../constants/";
import { NavLink } from "react-router-dom";

class Stap1 extends Component {
	render() {
		const { email, name, firstname, handleChange, button } = this.props;
		if (this.props.currentStep !== 1) {
			// Prop: The current step
			return null;
		}
		return (
			<section id="sec1" className={styles.panel}>
				<div className="extraInfo">
					<h3>1. Info opgeven</h3>
					<p>
						Uw data word niet doorgegeven aan externe bedrijven het is enkel
						voor technische doeleinden
					</p>
				</div>
				<div className="deeltitel">Individueel inschrijven</div>
				<section className={styles.formSection}>
					<div>
						<h4>Wat is uw naam?</h4>
						<p className="uitlegTitle">
							Zo weten we wie we aan de startstreep mogen verwachten
						</p>
						<label>
							Mijn voornaam is
							<input
								type="text"
								name="firstname"
								placeholder="voornaam"
								className="form_input"
								onChange={handleChange}
								value={firstname}
							/>
						</label>
						<br />
						<label>
							en
							<input
								type="text"
								name="name"
								placeholder="Achternaam"
								className="form_input"
								onChange={handleChange}
								value={name}
							/>
							is mijn achternaam
						</label>
					</div>
					<div>
						<h4>Wat is uw Email adres?</h4>
						<p className="uitlegTitle">
							Dit is zodat we u een bevestegings email kunnen sturen
						</p>
						<label>
							Mijn Email adres is
							<input
								type="text"
								name="email"
								placeholder="mijnemail@domain.be"
								className="form_input"
								onChange={handleChange}
								value={email}
							/>
						</label>
					</div>
				</section>
				{button}
				<NavLink to={ROUTES.team} className="mainButton backButton">
					Terug
				</NavLink>
			</section>
		);
	}
}

export default Stap1;
