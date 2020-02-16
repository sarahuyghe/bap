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
	}

	_next() {
		let currentStep = this.state.currentStep;
		currentStep = currentStep >= 2 ? 3 : currentStep + 1;
		this.setState({
			currentStep: currentStep
		});
	}

	_prev() {
		let currentStep = this.state.currentStep;
		currentStep = currentStep <= 1 ? 1 : currentStep - 1;
		this.setState({
			currentStep: currentStep
		});
	}

	get previousButton() {
		let currentStep = this.state.currentStep;
		if (currentStep !== 1) {
			return (
				<button className="secondaireButton" type="button" onClick={this._prev}>
					Previous
				</button>
			);
		}
		return null;
	}

	get nextButton() {
		let currentStep = this.state.currentStep;
		if (currentStep < 3) {
			return (
				<button className="secondaireButton" type="button" onClick={this._next}>
					Next
				</button>
			);
		}
		return null;
	}

	handleChange = e => {
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
				<Stap2 currentStep={currentStep} />
			</form>
		);
	}
}

export default inject("teamStore", "messageStore")(observer(MasterForm));
