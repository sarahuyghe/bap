import React from "react";
import { inject, observer } from "mobx-react";

import styles from "./ConnectTeam.module.css";
import TeamPallet from "../TeamPallet";

const ConnectTeam = ({ participantStore, teamStore }) => {
	const { teams, search, searching } = teamStore;

	const teamIdInput = React.createRef();
	const naamInput = React.createRef();
	const voornaamInput = React.createRef();
	const mailInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();
		console.log(teamIdInput.current.value);
		participantStore.addPerson({
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
		search(e.target.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit}></form>
		</>
	);
};

export default inject("participantStore", "teamStore")(observer(ConnectTeam));
