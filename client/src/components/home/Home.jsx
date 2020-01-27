import React from "react";
import { inject, observer } from "mobx-react";

const Home = ({ uiStore, teamStore }) => {
	const teamNameInput = React.createRef();
	const whyInput = React.createRef();
	const eventInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();
		teamStore.addTeam({
			teamnaam: teamNameInput.current.value,
			reason: whyInput.current.value,
			event: eventInput.current.value,
			teamcaptainId: uiStore.authUser._id
		});

		teamNameInput.current.value = "";
		whyInput.current.value = "";
	};

	return (
		<>
			<p>First testing of form</p>
			{uiStore.authUser ? (
				<form onSubmit={handleSubmit}>
					<label>
						TeamNaam
						<input type="text" name="teamnaam" ref={teamNameInput} />
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
			) : (
				<p>Je hebt nog geen teamcaptain aangemaakt</p>
			)}
			<button onClick={uiStore.logout}>logout</button>
		</>
	);
};

export default inject("teamStore", "uiStore")(observer(Home));
