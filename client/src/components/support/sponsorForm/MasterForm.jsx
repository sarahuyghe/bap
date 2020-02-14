import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { ROUTES } from "./../../../constants/";

import Stap1 from "./Stap1";
import Stap2 from "./Stap2";

import styles from "./../MessageForm.module.css";

class MasterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStep: 1,
			message: "",
			name: "",
			teamId: "",
			searching: []
		};
		this.handleChange = this.handleChange.bind(this);
		this._next = this._next.bind(this);
		this._prev = this._prev.bind(this);
	}

	componentDidMount() {
		this.props.teamStore.getAll();
		this.setState({ searching: this.props.teamStore.teams });
		console.log("it is mouted");
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
				<button className="secondaireButton" type="button" onClick={this._prev}>
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
					Next
				</button>
			);
		}
		// ...else render nothing
		return null;
	}

	handleChange = e => {
		console.log(e.target.name);
		console.log(e.target.value);

		const name = e.target.name;
		const value =
			e.target.type === "checkbox" ? e.target.checked : e.target.value;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { message, name, teamId } = this.state;
		const { messageStore, history } = this.props;
		messageStore.addMessage({
			message: message,
			name: name,
			teamId: teamId
		});
		history.push(ROUTES.confirmDonate);
	};

	render() {
		const { teams } = this.props.teamStore;
		const { teamId, currentStep, searching } = this.state;

		return (
			<form>
				<Stap1
					currentStep={currentStep}
					handleChange={this.handleChange}
					teams={teams}
					teamId={teamId}
					button={this.nextButton}
					searching={searching}
				/>
				<Stap2
					currentStep={currentStep}
					// handleChange={this.handleChange}
					// handleSubmit={this.handleSubmit}
					// message={message}
					// name={name}
				/>
				{/* {this.nextButton} */}
			</form>
		);
	}
}

export default inject("teamStore", "messageStore")(observer(MasterForm));
