import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { ROUTES } from "./../../../constants/";

import Stap1 from "./Stap1";
import Stap2 from "./Stap2";

class MasterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStep: 1,
			name: "",
			firstname: "",
			email: "",
			locatie: "",
			event: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this._next = this._next.bind(this);
		this._prev = this._prev.bind(this);
	}

	_next() {
		let currentStep = this.state.currentStep;
		// If the current step is 1 or 2, then add one on "next" button click
		currentStep = currentStep >= 2 ? 3 : currentStep + 1;
		this.setState({
			currentStep: currentStep
		});
	}

	_prev() {
		let currentStep = this.state.currentStep;
		// If the current step is 2 or 3, then subtract one on "previous" button click
		currentStep = currentStep <= 1 ? 1 : currentStep - 1;
		this.setState({
			currentStep: currentStep
		});
	}

	get previousButton() {
		let currentStep = this.state.currentStep;
		// If the current step is not 1, then render the "previous" button
		if (currentStep !== 1) {
			return (
				<button
					className="secondaireButton backButton"
					type="button"
					onClick={this._prev}
				>
					Previous
				</button>
			);
		}
		// ...else return nothing
		return null;
	}

	get nextButton() {
		let currentStep = this.state.currentStep;
		// If the current step is not 3, then render the "next" button
		if (currentStep < 3) {
			return (
				<button className="secondaireButton" type="button" onClick={this._next}>
					Volgende
				</button>
			);
		}
		// ...else render nothing
		return null;
	}

	handleChange = e => {
		let value;
		let name;
		if (e.locatie) {
			name = "locatie";
			value = e.locatie;
		} else {
			// console.log(e.target.value);
			name = e.target.name;
			value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
		}
		this.setState({ [name]: value });
		console.log(this.state.locatie);
	};

	handleSubmit = e => {
		e.preventDefault();
		const { locatie, event, name, firstname, email } = this.state;
		const { participantStore, history } = this.props;
		participantStore.addPerson({
			name: name,
			firstname: firstname,
			email: email,
			typeOfEvent: event,
			location: locatie
		});
		history.push(ROUTES.confirmIndi);
	};

	render() {
		const { currentStep, email, name, firstname, event, locatie } = this.state;
		return (
			<>
				<form>
					<Stap1
						currentStep={currentStep}
						handleChange={this.handleChange}
						name={name}
						firstname={firstname}
						email={email}
						button={this.nextButton}
					/>
					<Stap2
						currentStep={currentStep}
						handleChange={this.handleChange}
						typeOfEvent={event}
						locatie={locatie}
						handleSubmit={this.handleSubmit}
						backButton={this.previousButton}
					/>
					{/* {this.nextButton} */}
				</form>
			</>
		);
	}
}

export default inject("teamStore", "participantStore")(observer(MasterForm));
