import React from "react";
import { inject, observer } from "mobx-react";

import styles from "./Individueel.module.css";

const Individueel = ({ participantStore, teamStore }) => {
	const firstnameInput = React.createRef();
	const lastnameInput = React.createRef();
	const mailInput = React.createRef();
	const eventInput = React.createRef();
	const locatieInput = React.createRef();
	const kindInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();
		console.log(eventInput.current.checked);
		participantStore.addPerson({
			firstname: firstnameInput.current.value,
			name: lastnameInput.current.value,
			mail: mailInput.current.value,
			event: eventInput.current.value,
			location: locatieInput.current.value
			// kind: kindInput.current.checked
		});

		firstnameInput.current.value = "";
		lastnameInput.current.value = "";
		mailInput.current.value = "";
		console.log("individueel form toegevoegd");
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
									ref={firstnameInput}
								/>
							</label>
							<br />
							<label>
								en
								<input
									type="text"
									name="lastname"
									placeholder="Achternaam"
									className="form_input"
									ref={lastnameInput}
								/>
								is mijn achternaams
							</label>
						</div>
						<div>
							<h4>Wat is uw Email adres?</h4>
							<p className="uitlegTitle">
								Dit is zodat we u een bevestegings emal kunnen sturen
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
					</section>
					<a href="#sec2" className="secondaireButton">
						Volgende
					</a>
				</section>
				<section id="sec2" className={styles.panel}>
					<div className={styles.extraInfo}>
						<h3>2. Inschrijving specificaties</h3>
					</div>
					<div className="deeltitel">Individueel inschrijven</div>
					<section className={styles.formSection}>
						<div>
							<h4>Lopen of wandelen?</h4>
							<p className="uitlegTitle">
								Zo weten we hoeveel mensen we per route verwachten
							</p>
							<div ref={eventInput}>
								<label className="customRadio">
									<input
										type="radio"
										name="event"
										value="lopen"
										ref={eventInput}
									/>
									Ik ga 3km lopen
								</label>

								<label className="customRadio">
									<input
										type="radio"
										name="event"
										value="wandelen"
										ref={eventInput}
									/>
									Ik ga 6km wandelen
								</label>
							</div>
						</div>
						<div>
							<h4>Waar wilt u deelnemen?</h4>
							<p className="uitlegTitle">
								Zo kunnen we het aantal deelnemers per stad bijhouden
							</p>
							<select ref={locatieInput}>
								<option value="Antwerpen">Antwerpen</option>
								<option value="Brussel">Brussel</option>
								<option value="Charleroi">Charleroi</option>
								<option value="Namen">Namen</option>
							</select>
						</div>
					</section>
				</section>

				<input type="submit" value="Inschrijven" className="secondaireButton" />
			</form>
		</>
	);
};

export default inject("teamStore", "participantStore")(observer(Individueel));
