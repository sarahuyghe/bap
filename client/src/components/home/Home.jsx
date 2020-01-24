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
					Why
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

// class Home extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.teamNameInput = React.createRef();
// 		this.whyInput = React.createRef();
// 		this.naamInput = React.createRef();
// 		this.voornaamInput = React.createRef();
// 		this.mailInput = React.createRef();
// 		this.eventInput = React.createRef();
// 	}

// handleSubmit = e => {
// 	e.preventDefault();
// 	console.log(this.teamNameInput.current.value);
// 	console.log(this.whyInput.current.value);
// 	console.log(this.naamInput.current.value);
// 	console.log(this.voornaamInput.current.value);
// 	console.log(this.mailInput.current.value);
// 	console.log(this.eventInput.current.value);
// };
// render() {
// 	return (
// 		<>
// 			<p>First testing of form</p>
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					TeamNaam
// 					<input type="text" name="teamnaam" ref={this.teamNameInput} />
// 				</label>
// 				<br />
// 				<label>
// 					Why
// 					<input type="text" name="why" ref={this.whyInput} />
// 				</label>
// 				<br />
// 				<label>
// 					Naam
// 					<input type="text" name="Naam" ref={this.naamInput} />
// 				</label>
// 				<br />
// 				<label>
// 					Voornaam
// 					<input type="text" name="voornaam" ref={this.voornaamInput} />
// 				</label>
// 				<br />
// 				<label>
// 					Mail
// 					<input type="text" name="mail" ref={this.mailInput} />
// 				</label>
// 				<br />
// 				<label>
// 					Event
// 					<select ref={this.eventInput}>
// 						<option value="lopen">Lopen</option>
// 						<option value="wandelen">Wandelen</option>
// 					</select>
// 				</label>
// 				<br />

// 				<input type="submit" value="bevestigen" />
// 			</form>
// 		</>
// 	);
// }
// }

export default inject("teamStore")(observer(Home));
