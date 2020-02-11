import React from "react";
import { inject, observer } from "mobx-react";

import styles from "./Individueel.module.css";

const Individueel = ({ participantStore, teamStore }) => {
	const firstnameInput = React.createRef();
	const lastnameInput = React.createRef();
	const mailInput = React.createRef();
	const eventInput = React.createRef();
	const locatieInput = React.createRef();
	const kindInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();
		console.log(eventInput.current.checked);
		participantStore.addPerson({
			firstname: firstnameInput.current.value,
			name: lastnameInput.current.value,
			mail: mailInput.current.value,
			event: eventInput.current.value,
			location: locatieInput.current.value
			// kind: kindInput.current.checked
		});

		firstnameInput.current.value = "";
		lastnameInput.current.value = "";
		mailInput.current.value = "";
		console.log("individueel form toegevoegd");
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="submit" value="Inschrijven" className="secondaireButton" />
			</form>
		</>
	);
};

export default inject("teamStore", "participantStore")(observer(Individueel));
