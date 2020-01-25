import React from "react";
import { inject, observer } from "mobx-react";

const Home = ({ teamStore }) => {
	const { teams } = teamStore;
	const teamNameInput = React.createRef();
	const whyInput = React.createRef();
	const naamInput = React.createRef();
	const voornaamInput = React.createRef();
	const mailInput = React.createRef();
	const eventInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();
		teamStore.addTeam({
			teamnaam: teamNameInput.current.value,
			name: naamInput.current.value,
			firstname: voornaamInput.current.value,
			reason: whyInput.current.value,
			mail: mailInput.current.value,
			event: eventInput.current.value
		});

		teamNameInput.current.value = "";
		whyInput.current.value = "";
		naamInput.current.value = "";
		voornaamInput.current.value = "";
		mailInput.current.value = "";
	};

	return (
		<>
			<p>First testing of form</p>
			<form onSubmit={handleSubmit}>
				<label>
					TeamNaam
					<input type="text" name="teamnaam" ref={teamNameInput} />
				</label>
				<br />
				<label>
					Reason
					<input type="text" name="why" ref={whyInput} />
				</label>
				<br />
				<label>
					Naam
					<input type="text" name="Naam" ref={naamInput} />
				</label>
				<br />
				<label>
					Voornaam
					<input type="text" name="voornaam" ref={voornaamInput} />
				</label>
				<br />
				<label>
					Mail
					<input type="text" name="mail" ref={mailInput} />
				</label>
				<br />
				<label>
					Event
					<select ref={eventInput}>
						<option value="lopen">Lopen</option>
						<option value="wandelen">Wandelen</option>
					</select>
				</label>
				<br />
				<input type="submit" value="bevestigen" />
			</form>
		</>
	);
};

export default inject("teamStore")(observer(Home));
