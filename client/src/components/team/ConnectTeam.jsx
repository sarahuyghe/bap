import React from "react";
import { inject, observer } from "mobx-react";

import styles from "./ConnectTeam.module.css";

const ConnectTeam = ({ participantStore, teamStore }) => {
	const { teams, search, searching } = teamStore;

	const teamIdInput = React.createRef();
	const naamInput = React.createRef();
	const voornaamInput = React.createRef();
	const mailInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();
		console.log(teamIdInput.current.value);
		participantStore.addPerson({
			teamId: teamIdInput.current.value,
			name: naamInput.current.value,
			firstname: voornaamInput.current.value,
			mail: mailInput.current.value
		});

		naamInput.current.value = "";
		voornaamInput.current.value = "";
		mailInput.current.value = "";
	};

	const handleChange = e => {
		search(e.target.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<section id="sec1" className={styles.panel}>
					<div className={styles.extraInfo}>
						<h3>1. Info opgeven</h3>
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
									name="voornaam"
									placeholder="voornaam"
									className="form_input"
									ref={voornaamInput}
								/>
							</label>
							<br />
							<label>
								en
								<input
									type="text"
									name="Naam"
									placeholder="Achternaam"
									className="form_input"
									ref={naamInput}
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
									name="mail"
									placeholder="mijnemail@domain.be"
									className="form_input"
									ref={mailInput}
								/>
							</label>
						</div>
						<input
							type="submit"
							value="bevestigen"
							className="secondaireButton"
						/>
					</section>
				</section>
				<section id="sec2" className={styles.panel}>
					<h3>2. Selecteer een team</h3>
					<div className="deeltitel">Aansluiten bij een team</div>
					<input type="text" className="form_input" onChange={handleChange} />
					<select ref={teamIdInput}>
						{searching.map(team =>
							team.map(test => (
								<>
									{test.teamnaam ? (
										<option key={test.id} value={test.id}>
											{test.teamnaam}
										</option>
									) : (
										<option key={test.id} value={test.teamId}>
											{test.name}
										</option>
									)}
								</>
							))
						)}
						{/* {teams.map(team => */}
						{/* {teams.map(test => (
						<>
							{test.teamnaam ? (
								<option key={test.id} value={test.id}>
									{test.teamnaam}
								</option>
							) : (
								<option key={test.id} value={test.teamId}>
									{test.name}
								</option>
							)}
						</>
					))} */}
					</select>
					<div>
						{searching.map(team =>
							team.map(test => (
								<p key={test.id} value={test.teamId}>
									{test.teamnaam ? test.teamnaam : test.name}
								</p>
							))
						)}
					</div>
					<a href="#sec2" className="secondaireButton">
						Volgende
					</a>

					<a href="#sec3" className="secondaireButton">
						Volgende
					</a>
				</section>
			</form>
		</>
	);
};

export default inject("participantStore", "teamStore")(observer(ConnectTeam));
