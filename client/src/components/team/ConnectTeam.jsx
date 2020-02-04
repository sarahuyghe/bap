import React from "react";
import { inject, observer } from "mobx-react";

const ConnectTeam = ({ participantStore, teamStore }) => {
	const { teams, search, searching } = teamStore;

	const teamIdInput = React.createRef();
	const naamInput = React.createRef();
	const voornaamInput = React.createRef();
	const mailInput = React.createRef();
	// console.log(teams);

	const handleSubmit = e => {
		e.preventDefault();
		teamStore.addPerson({
			teamId: teamIdInput.current.value,
			name: naamInput.current.value,
			firstname: voornaamInput.current.value,
			mail: mailInput.current.value
		});

		naamInput.current.value = "";
		voornaamInput.current.value = "";
		mailInput.current.value = "";
	};

	return (
		<>
			<h1>Inschrijven bij een team</h1>
			<form onSubmit={handleSubmit}>
				<select ref={teamIdInput}>
					{teams.map(team => (
						<option key={team.id} value={team.id}>
							{team.teamnaam}
						</option>
					))}
				</select>
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
				<input type="submit" value="bevestigen" />
			</form>
		</>
	);
};

// 	const teamIdInput = React.createRef();
// 	const naamInput = React.createRef();
// 	const voornaamInput = React.createRef();
// 	const mailInput = React.createRef();

// 	const handleSubmit = e => {
// 		e.preventDefault();
// 		console.log(teamIdInput.current.value);
// 		participantStore.addPerson({
// 			teamId: teamIdInput.current.value,
// 			name: naamInput.current.value,
// 			firstname: voornaamInput.current.value,
// 			mail: mailInput.current.value
// 		});

// 		naamInput.current.value = "";
// 		voornaamInput.current.value = "";
// 		mailInput.current.value = "";
// 	};

// 	const handleChange = e => {
// 		search(e.target.value);
// 	};

// 	return (
// 		<>
// 			<h1>Inschrijven bij een team</h1>
// 			<input type="text" onChange={handleChange} />
// 			<form onSubmit={handleSubmit}>
// 				<select ref={teamIdInput}>
// 					{searching.map(team =>
// 						team.map(test => (
// 							<>
// 								{test.teamnaam ? (
// 									<option key={test.id} value={test.id}>
// 										{test.teamnaam}
// 									</option>
// 								) : (
// 									<option key={test.id} value={test.teamId}>
// 										{test.name}
// 									</option>
// 								)}
// 							</>
// 						))
// 					)}
// 				</select>
// 				{/* <div ref={teamIdInput}>
// 					{searching.map(team =>
// 						team.map(test => (
// 							<p key={test.id} value={test.teamId}>
// 								{test.teamnaam ? test.teamnaam : test.name}
// 							</p>
// 						))
// 					)}
// 				</div> */}
// 				<br />
// 				<label>
// 					Naam
// 					<input type="text" name="Naam" ref={naamInput} />
// 				</label>
// 				<br />
// 				<label>
// 					Voornaam
// 					<input type="text" name="voornaam" ref={voornaamInput} />
// 				</label>
// 				<br />
// 				<label>
// 					Mail
// 					<input type="text" name="mail" ref={mailInput} />
// 				</label>
// 				<input type="submit" value="bevestigen" />
// 			</form>
// 		</>
// 	);
// };

export default inject("participantStore", "teamStore")(observer(ConnectTeam));
