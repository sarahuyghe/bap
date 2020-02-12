import React, { Component } from "react";

import styles from "./../MessageForm.module.css";

class Stap1 extends Component {
	render() {
		const { teams, teamId, handleChange } = this.props;
		if (this.props.currentStep !== 1) {
			// Prop: The current step
			return null;
		}
		return (
			<section className={styles.panel}>
				<h3>1. Selecteer een team</h3>
				<div className="deeltitel">Message in a BOOBottle</div>
				<p>Dit is het team dat uw steun bericht zal ontvangen</p>
				<section className={styles.formSection}>
					<select name="teamId" value={teamId} onChange={handleChange}>
						{teams.map(team => (
							<option key={team.id} value={team.id}>
								{team.teamnaam}
							</option>
						))}
					</select>
				</section>
				{/* <a href="#sec2" className="secondaireButton">
					Volgende
				</a> */}
			</section>
		);
	}
}

export default Stap1;
