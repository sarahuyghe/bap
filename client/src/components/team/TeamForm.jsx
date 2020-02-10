import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import withAuthentication from "../auth/WithAuthentication";
import { ROUTES } from "./../../constants";
import styles from "./TeamForm.module.css";
import Custom from "./Custom";

// class TeamForm extends Component {
//   constructor(props){}
const TeamForm = ({ uiStore, teamStore, history }) => {
	const teamNameInput = React.createRef();
	const whyInput = React.createRef();
	const eventInput = React.createRef();
	const quoteInput = React.createRef();
	const kindInput = React.createRef();
	const locatieInput = React.createRef();
	const BottleInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();
		teamStore.addTeam({
			teamnaam: teamNameInput.current.value,
			reason: whyInput.current.value,
			quote: quoteInput.current.value,
			event: eventInput.current.value,
			kind: kindInput.current.checked,
			location: locatieInput.current.value
		});

		teamNameInput.current.value = "";
		whyInput.current.value = "";
		quoteInput.current.value = "";
		kindInput.current.checked = false;
		console.log(locatieInput.current.value);
		history.push(ROUTES.register);
	};

	// const handleChange = e => {
	// 	console.log(e.currentTarget.value);
	// 	bottle = e.currentTarget.value;
	// 	console.log(bottle);
	// };

	return (
		<>
			<form onSubmit={handleSubmit}>
				{/* <input type="submit" value="Inschrijven" /> */}
			</form>
		</>
	);
};

export default inject(
	"teamStore",
	"uiStore"
)(
	// (withAuthentication
	observer(TeamForm)
);
