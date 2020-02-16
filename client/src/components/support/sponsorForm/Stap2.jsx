import React, { Component } from "react";

import { ROUTES } from "./../../../constants/";
import { NavLink } from "react-router-dom";

import styles from "./../MessageForm.module.css";

class Stap2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			donate: false,
			amount: null
		};
	}
	render() {
		const { donate, amount } = this.state;
		return (
			<section id="sec2" className={styles.panel}>
				<div className="extraInfo">
					<h3>2. Selecteer een bedrag</h3>
					<p>
						Met uw donatie kunnen we meer onderzoek rond borstkanker finacieren
					</p>
				</div>
				<div className="deeltitel">Een team sponseren</div>
				<section className={styles.formSection}>
					<div>
						<label>
							<input
								type="checkbox"
								value="donate"
								onClick={() => this.setState({ donate: !donate })}
							/>
							Ik wil mijn geselecteerd team sponseren
						</label>
					</div>
					{donate ? (
						<div>
							<button
								value="5"
								onClick={e => this.setState({ amount: e.currentTarget.value })}
							>
								€5
							</button>
							<button
								value="10"
								onClick={e => this.setState({ amount: e.currentTarget.value })}
							>
								€10
							</button>
							<button
								value="15"
								onClick={e => this.setState({ amount: e.currentTarget.value })}
							>
								€15
							</button>
							<div>
								<p>Vrije bijdrage</p>
								<p>Kies zelf een bedrag</p>
								<input
									type="number"
									placeholder="20"
									value={amount}
									onChange={e =>
										this.setState({ amount: e.currentTarget.value })
									}
								/>
							</div>
						</div>
					) : null}
				</section>
				<NavLink to={ROUTES.confirmDonate} className="secondaireButton">
					Doneren
				</NavLink>
			</section>
		);
	}
}

export default Stap2;
