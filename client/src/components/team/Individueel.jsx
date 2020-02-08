import React from "react";
import { inject, observer } from "mobx-react";

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
				<section id="sec1">
					<h3>1. Info opgeven</h3>
					<div className="deeltitel">Individueel inschrijven</div>
					<h3>Wat is uw naam?</h3>
					<p>Zo weten we wie we aan de startstreep mogen verwachten</p>
					<label>
						Mijn voornaam is
						<input type="text" name="firstname" ref={firstnameInput} />
					</label>
					<label>
						en
						<input type="text" name="lastname" ref={lastnameInput} />
						is mijn achternaams
					</label>
					<br />
					<h3>Wat is uw Email adres?</h3>
					<p>Dit is zodat we u een bevestegings emal kunnen sturen</p>
					<label>
						Mijn Email adres is
						<input type="text" name="mail" ref={mailInput} />
					</label>
					<a href="#sec2" className="secondaireButton">
						Volgende
					</a>
				</section>
				<section id="sec2">
					<h3>2. Inschrijving specificaties</h3>
					<div className="deeltitel">Individueel inschrijven</div>
				</section>
				<h3>Lopen of wandelen?</h3>
				<p>Zo weten we hoeveel mensen we per route verwachten</p>
				<div ref={eventInput}>
					<label>
						<input type="radio" name="event" value="lopen" ref={eventInput} />
						Ik ga 3km lopen
					</label>
					{/* </div>
				<div> */}
					<label>
						<input
							type="radio"
							name="event"
							value="wandelen"
							ref={eventInput}
						/>
						Ik ga 6km wandelen
					</label>
				</div>
				<h3>Waar wilt u deelnemen?</h3>
				<p>Zo kunnen we het aantal deelnemers per stad bijhouden</p>
				<select ref={locatieInput}>
					<option value="Antwerpen">Antwerpen</option>
					<option value="Brussel">Brussel</option>
					<option value="Charleroi">Charleroi</option>
					<option value="Namen">Namen</option>
				</select>
				<br />
				<input type="submit" value="Inschrijven" className="secondaireButton" />
			</form>
		</>
	);
};

export default inject("teamStore", "participantStore")(observer(Individueel));
