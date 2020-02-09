import React from "react";
import { inject, observer } from "mobx-react";
import withAuthentication from "../auth/WithAuthentication";
import { ROUTES } from "../../constants";
import styles from "./TeamForm.module.css";
import Custom from "./Custom";

const TeamForm = ({ uiStore, teamStore, history }) => {
	const teamNameInput = React.createRef();
	const whyInput = React.createRef();
	const eventInput = React.createRef();
	const quoteInput = React.createRef();
	const kindInput = React.createRef();
	const locatieInput = React.createRef();
	const BottleInput = React.createRef();

	// var bottle = bottlePink;

	const handleSubmit = e => {
		e.preventDefault();
		teamStore.addTeam({
			teamnaam: teamNameInput.current.value,
			reason: whyInput.current.value,
			quote: quoteInput.current.value,
			event: eventInput.current.value,
			kind: kindInput.current.checked,
			location: locatieInput.current.value
		});

		teamNameInput.current.value = "";
		whyInput.current.value = "";
		quoteInput.current.value = "";
		kindInput.current.checked = false;
		console.log(locatieInput.current.value);
		history.push(ROUTES.register);
	};

	// const handleChange = e => {
	// 	console.log(e.currentTarget.value);
	// 	bottle = e.currentTarget.value;
	// 	console.log(bottle);
	// };

	return (
		<>
			<form onSubmit={handleSubmit}>
				<section className={styles.panel}>
					<Custom BottleInput={BottleInput} />
				</section>
				<section id="sec2" className={styles.panel}>
					<h3>2. Team instellen</h3>
					<div className="deeltitel">Een team aanmaken</div>
					<section className={styles.formSection}>
						<div>
							<h4>Kies een teamnaam</h4>
							<p className="uitlegTitle">
								1 naam dat uw hele team definieerd, dat kan niet makkelijk zijn.
								Veel succes
							</p>
							<label>
								De naam van mijn team is
								<input
									type="text"
									name="teamnaam"
									className="form_input"
									ref={teamNameInput}
									required
								/>
							</label>
						</div>
						<div>
							<h4>Lopen of wandelen?</h4>
							<p className="uitlegTitle">
								Zo weten we hoeveel mensen we per route verwachten
							</p>
							<div>
								<label className="customRadio">
									<input
										type="radio"
										name="event"
										value="lopen"
										ref={eventInput}
									/>
									Wij gaan 3km lopen
								</label>
							</div>
							<div>
								<label className="customRadio">
									<input
										type="radio"
										name="event"
										value="wandelen"
										ref={eventInput}
									/>
									Wij gaan 6km wandelen
								</label>
							</div>
						</div>
						<div>
							<h4>Gesloten team?</h4>
							<p className="uitlegTitle">
								Bij een gesloten team moet u als teamcaptain een elke
								inschrijving goedkeuren
							</p>
							<label>
								<input
									type="checkbox"
									name="reason"
									value="closedTeam"
									ref={kindInput}
								/>
								Ik wil een gesloten team
							</label>
						</div>

						<div>
							<h4>Aan welke race neemt uw team deel?</h4>
							<p className="uitlegTitle">
								Zo weten we waar en waneer we jullie mogen verwachten
							</p>
							<select ref={locatieInput}>
								<option value="Antwerpen">Antwerpen</option>
								<option value="Brussel">Brussel</option>
								<option value="Charleroi">Charleroi</option>
								<option value="Namen">Namen</option>
							</select>
							<br />
						</div>
					</section>
					<a href="#sec3" className="secondaireButton">
						Volgende
					</a>
				</section>
				<section id="sec3" className={styles.panel}>
					<h3>3. Team personaliseren</h3>
					<div className="deeltitel">Een team aanmaken</div>
					<section className={styles.formSection}>
						<div>
							<h4>Kies een teamgezegde</h4>
							<p className="uitlegTitle">
								heeft u een iconische zin of een zin dat perfect de sfeer in uw
								team beschrijft? Plaats hem dan hier.
							</p>
							<label>
								Ons team-gezegde is:
								<input
									type="text"
									name="quote"
									ref={quoteInput}
									className="form_input"
								/>
							</label>
						</div>
						<div>
							<h4>Wat is uw team’s motivatie?</h4>
							<p className="uitlegTitle">
								dit laat mensen weten waarom ze uw team zouden sponseren of
								aansluiten
							</p>
							<label>
								<input
									type="text"
									name="reason"
									ref={whyInput}
									placeholder="hey ..."
								/>
							</label>
						</div>
					</section>
					<input type="submit" value="Volgende" className="secondaireButton" />
				</section>

				{/* <input type="submit" value="Inschrijven" /> */}
			</form>
		</>
	);
};

export default inject(
	"teamStore",
	"uiStore"
)(
	// (withAuthentication
	observer(TeamForm)
);
