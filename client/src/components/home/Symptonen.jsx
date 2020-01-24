import React from "react";
import { inject, observer } from "mobx-react";

const Symptonen = ({ teamStore, messageStore }) => {
	const { teams } = teamStore;
	const messageInput = React.createRef();
	const naamInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();
		messageStore.addMessage({
			message: messageInput.current.value,
			name: naamInput.current.value
		});

		messageInput.current.value = "";
		naamInput.current.value = "";
	};
	return (
		<form onSubmit={handleSubmit}>
			<label>
				TeamNaam
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
	);
};

export default inject("teamStore", "messageStore")(observer(Symptonen));
