import React from "react";
import { inject, observer } from "mobx-react";

const ConnectTeam = ({ teamStore }) => {
	const { teams, search, searching } = teamStore;
	const teamIdInput = React.createRef();
	const naamInput = React.createRef();
	const voornaamInput = React.createRef();
	const mailInput = React.createRef();

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

	const handleChange = e => {
		// e.preventDefault();
		// console.log(searchInput.current.value);
		search(e.target.value);
	};

	return (
		<>
			<h1>Inschrijven bij een team</h1>
			<input type="text" onChange={handleChange} />
			{/* <button onClick={onClick}>testing</button> */}
			<form onSubmit={handleSubmit}>
				{/* <select ref={teamIdInput}>
					{teams.map(team => (
						<option key={team.id} value={team.id}>
							{team.teamnaam}
						</option>
					))}
				</select> */}
				<select ref={teamIdInput}>
					{searching.map(team =>
						team.map(test => (
							<option key={test.teamId} value={test.teamId}>
								{test.teamnaam}
							</option>
						))
					)}
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

export default inject("teamStore")(observer(ConnectTeam));
