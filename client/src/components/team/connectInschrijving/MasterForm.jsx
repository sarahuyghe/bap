import React, { Component } from "react";
import { inject, observer, PropTypes } from "mobx-react";

import { ROUTES } from "./../../../constants/";

import Stap1 from "./Stap1";
import Stap2 from "./Stap2";

class MasterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teamId: "5e41e7ded42ba130cd3d6cbc",
			name: "",
			firstname: "",
			email: "",
			buyBottle: 0,
			currentStep: 1,
			searching: this.props.teamStore.teams
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
		const name = e.target.name;
		const value =
			e.target.type === "checkbox" ? e.target.checked : e.target.value;
		this.setState({ [name]: value });
	};

	handleSearch = e => {
		// console.log(e.target.value);
		this.props.teamStore.search(e.currentTarget.value);
		const test = this.props.teamStore.searchField;
		this.setState({ searching: test });
	};

	handleLoad = e => {
		this.props.teamStore.search(e.currentTarget.value);
		const test = this.props.teamStore.searchField;
		this.setState({ searching: test });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { teamId, name, firstname, email, buyBottle } = this.state;
		const { participantStore, history } = this.props;
		participantStore.addPerson({
			teamId: teamId,
			name: name,
			firstname: firstname,
			mail: email,
			buyBottle: buyBottle
		});
		// history.push(ROUTES.confirm);
	};

	render() {
		const {
			teamId,
			name,
			firstname,
			email,
			buyBottle,
			currentStep,
			searching
		} = this.state;
		console.log(searching);
		// const { searching } = this.props.teamStore;
		return (
			<>
				<form>
					<Stap1
						currentStep={currentStep}
						handleChange={this.handleChange}
						teamId="5e41e7ded42ba130cd3d6cbc"
						searching={searching}
						handleChange={this.handleChange}
						handleChangeOnSearch={this.handleSearch}
						handleLoad={this.handleLoad}
					/>
					<Stap2
						currentStep={currentStep}
						name={name}
						firstname={firstname}
						email={email}
						buyBottle={buyBottle}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
					/>
					{this.nextButton}
				</form>
			</>
		);
	}
}

MasterForm.propTypes = {
	teamStore: PropTypes.observableObject.isRequired
};

export default inject("participantStore", "teamStore")(observer(MasterForm));
