import React from "react";
import { inject, observer } from "mobx-react";

const Individueel = ({ teamStore }) => {
	const firstnameInput = React.createRef();
	const lastnameInput = React.createRef();
	const mailInput = React.createRef();
	const eventInput = React.createRef();
	const locatieInput = React.createRef();
	const kindInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();
		console.log(eventInput.current.checked);
		teamStore.addPerson({
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
			<h3>Uw team instellen</h3>
			<form onSubmit={handleSubmit}>
				<h3>Wat is uw naam?</h3>
				<p>Zo kunnen we je bij naam aanspreken</p>
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
				<p>
					We hebben uw Email adres nodig om u een bevestigingsbericht te sturen
				</p>
				<label>
					Mijn Email adres is
					<input type="text" name="mail" ref={mailInput} />
				</label>
				<br />
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
				<h3>Aan welke race neemt uw team deel?</h3>
				<p>Zo weten we waar en waneer we jullie mogen verwachten</p>
				<select ref={locatieInput}>
					<option value="Antwerpen">Antwerpen</option>
					<option value="Brussel">Brussel</option>
					<option value="Charleroi">Charleroi</option>
					<option value="Namen">Namen</option>
				</select>
				<br />
				<input type="submit" value="Inschrijven" />
			</form>
		</>
	);
};

export default inject("teamStore")(observer(Individueel));
