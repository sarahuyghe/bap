import React from "react";
import { inject, observer } from "mobx-react";
import withAuthentication from "../auth/WithAuthentication";

const TeamForm = ({ uiStore, teamStore }) => {
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
			<h3>Uw team instellen</h3>
			<form onSubmit={handleSubmit}>
				<label>
					Kies een teamnaam
					<p>
						1 naam dat uw hele team definieerd, dat kan niet gemakkelijk zijn.
						Veel succes
					</p>
					De naam van mijn team is
					<input type="text" name="teamnaam" ref={teamNameInput} />
				</label>
				<br />
				<label>
					Reason
					<input type="text" name="reason" ref={whyInput} />
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

export default inject(
	"teamStore",
	"uiStore"
)(withAuthentication(observer(TeamForm)));
