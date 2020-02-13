import React, { Component } from "react";
import styles from "./../ConnectTeam.module.css";

class Stap2 extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {
			name,
			firstname,
			email,
			buyBottle,
			handleSubmit,
			handleChange,
			backButton
		} = this.props;
		if (this.props.currentStep !== 2) {
			// Prop: The current step
			return null;
		}
		return (
			<section id="sec1" className={styles.panel}>
				<div className="extraInfo">
					<h3>2. Info opgeven</h3>
					<p>
						Uw data word niet doorgegeven aan externe bedrijven het is enkel
						voor technische doeleinden
					</p>
				</div>
				<div className="deeltitel">Aansluiten bij een team</div>
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
					<div>
						<h4>Ik wil ook een team-fles</h4>
						<p className="uitlegTitle">
							U kan ook een fles bestellen die je dan op het evenement ontvangt{" "}
						</p>
						<label>
							<input
								type="checkbox"
								name="buyBottle"
								className="checkbox"
								value={buyBottle}
								onChange={handleChange}
							/>
							Ik wil een team-fles bestellen
						</label>
					</div>
					<input
						type="submit"
						value="bevestigen"
						className="secondaireButton"
						onClick={handleSubmit}
					/>
				</section>
				{backButton}
			</section>
		);
	}
}
export default Stap2;
