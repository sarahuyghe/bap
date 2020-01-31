import React from "react";
import { inject, observer } from "mobx-react";

const MessageForm = ({ teamStore, messageStore }) => {
	const { teams } = teamStore;
	const messageInput = React.createRef();
	const naamInput = React.createRef();
	const teamInput = React.createRef();
	const sponsorInput = React.createRef();

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

	const handleChange = () => {
		console.log("it's changing");
		// setCheckedItem(!checkedItem);
	};
	return (
		<>
			<h1>Message versturen</h1>
			<form onSubmit={handleSubmit}>
				<h3>Wat is uw naam?</h3>
				<p>
					Dit is niet verplicht om in te vullen, maar zo kunnen de teams weten
					van wie het steun bericht komt
				</p>
				<label>
					<input type="text" name="Naam" ref={naamInput} />
				</label>
				<br />
				<h3>Wat is uw steunbericht?</h3>
				<p>Hier komt uw steunbericht</p>
				<label>
					<input type="text" name="teamnaam" ref={messageInput} />
				</label>
				<br />
				<h3>Wilt u alsnog sponseren?</h3>
				<p>
					Met uw donatie kunnen we meer onderzoek naar borstkanker financieren
				</p>
				<label>
					<input
						type="checkbox"
						name="reason"
						value="checkedSponsering"
						onChange={() => handleChange()}
					/>
					Ik wil dit team financieel sponseren
				</label>
				<br />
				{/* {checkedItem ? ( */}
				<>
					<div>
						<input type="radio" name="sponsor" value="5" ref={sponsorInput} />
						<label>€5</label>
					</div>
					<div>
						<input type="radio" name="sponsor" value="10" ref={sponsorInput} />
						<label>€10</label>
					</div>
					<div>
						<input type="radio" name="sponsor" value="15" ref={sponsorInput} />
						<label>€15</label>
					</div>
				</>
				{/* ) : null} */}
				<br />
				<h3>Selecteer een team</h3>
				<p>Dit is het team dat uw steun bericht zal ontvangen</p>
				<select ref={teamInput}>
					{teams.map(team => (
						<option key={team.id} value={team.id}>
							{team.teamnaam}
						</option>
					))}
				</select>
				<input type="submit" value="bevestigen" />
			</form>
		</>
	);
};

export default inject("teamStore", "messageStore")(observer(MessageForm));
