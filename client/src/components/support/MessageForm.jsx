import React from "react";
import { inject, observer } from "mobx-react";

import styles from "./MessageForm.module.css";

const MessageForm = ({ teamStore, messageStore }) => {
	const { teams } = teamStore;
	const messageInput = React.createRef();
	const naamInput = React.createRef();
	const teamInput = React.createRef();
	const sponsorInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();

		messageStore.addMessage({
			message: messageInput.current.value,
			name: naamInput.current.value,
			teamId: teamInput.current.value
		});

		messageInput.current.value = "";
		naamInput.current.value = "";
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<section className={styles.panel}>
					<h3>1. Selecteer een team</h3>
					<div className="deeltitel">Message in a BOOBottle</div>
					<p>Dit is het team dat uw steun bericht zal ontvangen</p>
					<section className={styles.formSection}>
						<select ref={teamInput}>
							{teams.map(team => (
								<option key={team.id} value={team.id}>
									{team.teamnaam}
								</option>
							))}
						</select>
					</section>
					<a href="#sec2" className="secondaireButton">
						Volgende
					</a>
				</section>
				<section id="sec2" className={styles.panel}>
					<h3>2. Inhoud van het steunbericht</h3>
					<div className="deeltitel">Message in a BOOBottle</div>
					<section className={styles.formSection}>
						<div>
							<h4>Wat is uw naam?</h4>
							<p className="uitlegTitle">
								Dit mag ook een koosnaam of roepnaam zijn. Dit is enkel zodat
								het team weet van wie het steun bericht komt
							</p>
							<label>
								Mijn naam is
								<input
									type="text"
									name="Naam"
									className="form_input"
									placeholder="naam"
									ref={naamInput}
								/>
							</label>
						</div>
						<div>
							<h3>Wat wilt u hen zeggen?</h3>
							<p className="uitlegTitle">
								Dit is het steunbericht dat uw geselecteerd team zal ontvangen
							</p>
							<label>
								<textarea
									name="message"
									ref={messageInput}
									placeholder="hey ..."
									cols="80"
									rows="5"
								/>
							</label>
						</div>
					</section>
					<a href="#sec3" className="secondaireButton">
						Volgende ? bevestigen
					</a>
				</section>
				<section id="sec3" className={styles.panel}>
					<h3>3. Wilt u alsnog sponseren?</h3>
					<p>
						Met uw donatie kunnen we meer onderzoek naar borstkanker financieren
					</p>
					<div className="deeltitel">Message in a BOOBottle</div>
					<label>
						<input
							type="checkbox"
							name="reason"
							value="checkedSponsering"
							onChange={() => handleChange()}
						/>
						Ik wil dit team financieel sponseren
					</label>
					<br />
					<>
						<div>
							<input type="radio" name="sponsor" value="5" ref={sponsorInput} />
							<label>€5</label>
						</div>
						<div>
							<input
								type="radio"
								name="sponsor"
								value="10"
								ref={sponsorInput}
							/>
							<label>€10</label>
						</div>
						<div>
							<input
								type="radio"
								name="sponsor"
								value="15"
								ref={sponsorInput}
							/>
							<label>€15</label>
						</div>
					</>
					<input
						type="submit"
						value="bevestigen"
						className="secondaireButton"
					/>
				</section>
			</form>
		</>
	);
};

export default inject("teamStore", "messageStore")(observer(MessageForm));
