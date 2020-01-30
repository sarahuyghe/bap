import React from "react";

import { inject, observer } from "mobx-react";

const MessageForm = ({ teamStore, messageStore }) => {
	const { teams } = teamStore;
	const messageInput = React.createRef();
	const naamInput = React.createRef();
	const teamInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();
		console.log(teamInput.current.value);

		console.log(parseInt(teamInput.current.value));

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
			<h1>Message versturen</h1>
			<form onSubmit={handleSubmit}>
				<select ref={teamInput}>
					{teams.map(team => (
						<option key={team.id} value={team.id}>
							{team.teamnaam}
						</option>
					))}
				</select>
				<br />
				<label>
					Message
					<input type="text" name="teamnaam" ref={messageInput} />
				</label>
				<br />
				<label>
					Naam
					<input type="text" name="Naam" ref={naamInput} />
				</label>
				<br />
				<input type="submit" value="bevestigen" />
			</form>
		</>
	);
};

export default inject("teamStore", "messageStore")(observer(MessageForm));
