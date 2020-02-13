import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { ROUTES } from "./../../../constants/";

import Stap1 from "./Stap1";
import Stap2 from "./Stap2";
import Stap3 from "./Stap3";

class MasterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStep: 1,
			cap: 0,
			bottle: 0,
			teamnaam: "",
			kindOfTeam: false,
			locatie: "",
			typeOfEvent: "",
			quote: "",
			motivation: ""
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
					Terug
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
		const name = e.target.name;
		if (e.target.type === "checkbox") {
			value = e.target.checked;
		} else if (e.target.id) {
			value = e.target.id;
		} else {
			value = e.target.value;
		}
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const {
			locatie,
			kindOfTeam,
			typeOfEvent,
			teamnaam,
			motivation,
			quote,
			cap,
			bottle
		} = this.state;
		const { teamStore, history } = this.props;
		teamStore.addTeam({
			teamnaam: teamnaam,
			reason: motivation,
			quote: quote,
			typeOfEvent: typeOfEvent,
			kind: kindOfTeam,
			location: locatie,
			cap: cap,
			bottle: bottle
		});
		history.push(ROUTES.register);
	};

	render() {
		const {
			currentStep,
			bottle,
			cap,
			teamnaam,
			kindOfTeam,
			typeOfEvent,
			locatie,
			motivation,
			quote
		} = this.state;
		return (
			<>
				<form>
					<Stap1
						currentStep={currentStep}
						handleChange={this.handleChange}
						bottle={bottle}
						cap={cap}
						button={this.nextButton}
					/>
					<Stap2
						currentStep={currentStep}
						handleChange={this.handleChange}
						teamnaam={teamnaam}
						typeOfEvent={typeOfEvent}
						locatie={locatie}
						kindOfTeam={kindOfTeam}
						button={this.nextButton}
						backButton={this.previousButton}
					/>
					<Stap3
						currentStep={currentStep}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
						quote={quote}
						motivation={motivation}
						backButton={this.previousButton}
					/>
				</form>
			</>
		);
	}
}

export default inject(
	"teamStore",
	"uiStore"
)(
	// (withAuthentication
	observer(MasterForm)
);
