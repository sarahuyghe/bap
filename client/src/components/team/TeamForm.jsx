import React from "react";
import { inject, observer } from "mobx-react";
import withAuthentication from "../auth/WithAuthentication";
import { Redirect } from "react-router-dom";
import { ROUTES } from "../../constants";

const TeamForm = ({ uiStore, teamStore, history }) => {
	const teamNameInput = React.createRef();
	const whyInput = React.createRef();
	const eventInput = React.createRef();
	const quoteInput = React.createRef();
	const kindInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();
		teamStore.addTeam({
			teamnaam: teamNameInput.current.value,
			reason: whyInput.current.value,
			quote: quoteInput.current.value,
			event: eventInput.current.value,
			kind: kindInput.current.checked,
			teamcaptainId: uiStore.authUser._id
		});

		teamNameInput.current.value = "";
		whyInput.current.value = "";
		quoteInput.current.value = "";
		kindInput.current.checked = false;
		console.log(eventInput);
		history.push(ROUTES.confirm);
	};

	return (
		<>
			<h3>Uw team instellen</h3>
			<form onSubmit={handleSubmit}>
				<h3>Kies een teamnaam</h3>
				<p>
					1 naam dat uw hele team definieerd, dat kan niet gemakkelijk zijn.
					Veel succes
				</p>
				<label>
					De naam van mijn team is
					<input type="text" name="teamnaam" ref={teamNameInput} />
				</label>
				<br />
				<h3>Kies een teamgezegde</h3>
				<p>
					heeft u een iconische zin of een zin dat perfect de sfeer in uw team
					beschrijft? Plaats hem dan hier.
				</p>
				<label>
					Ons team-gezegde is:
					<input type="text" name="quote" ref={quoteInput} />
				</label>
				<br />
				<h3>Waarvoor staat uw team?</h3>
				<p>
					dit laat mensen weten waarom ze uw team zouden sponseren of aansluiten
				</p>
				<label>
					<input type="text" name="reason" ref={whyInput} />
				</label>
				<br />
				<h3>Gesloten team?</h3>
				<p>
					Bij een gesloten team moet u als teamcaptain een elke inschrijving
					goedkeuren
				</p>
				<label>
					<input
						type="checkbox"
						name="reason"
						value="closedTeam"
						ref={kindInput}
					/>
					Ik wil een gesloten team
				</label>
				<br />
				<h3>Lopen of wandelen?</h3>
				<p>Zo weten we hoeveel mensen we per route verwachten</p>
				<div>
					<input type="radio" name="event" value="lopen" ref={eventInput} />
					<label>Wij gaan 3km lopen</label>
				</div>
				<div>
					<input type="radio" name="event" value="wandelen" ref={eventInput} />
					<label>Wij gaan 6km wandelen</label>
				</div>

				<input type="submit" value="Inschrijven" />
			</form>
		</>
	);
};

export default inject(
	"teamStore",
	"uiStore"
)(withAuthentication(observer(TeamForm)));
