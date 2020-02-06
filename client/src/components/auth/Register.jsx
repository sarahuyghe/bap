import React, { Component } from "react";
import { inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";

import TeamForm from "./../team/TeamForm";

class Register extends Component {
	constructor() {
		super();
		this.state = { email: "", pwd: "", pwd2: "", name: "" };
	}

	handleChange = e => {
		const input = e.currentTarget;
		const state = { ...this.state };
		state[input.name] = input.value;
		this.setState(state);
	};

	handleSubmit = e => {
		e.preventDefault();
		const { uiStore, history, teamStore } = this.props;
		const { email, pwd, name, firstname } = this.state;
		uiStore
			.register(name, firstname, email, pwd, teamStore.currentTeam[0].id)
			.then(() => {
				history.push(ROUTES.confirm);
			});
	};

	render() {
		const { email, pwd, pwd2, name, firstname } = this.state;
		return (
			<>
				<h2>Register</h2>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">
						name
						<input
							type="test"
							name="name"
							id="name="
							value={name}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor="name">
						name
						<input
							type="test"
							name="firstname"
							id="firstname="
							value={firstname}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor="email">
						email
						<input
							type="email"
							name="email"
							id="email="
							value={email}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor="username">
						password
						<input
							type="password"
							name="pwd"
							id="pwd"
							value={pwd}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor="username">
						repeat password
						<input
							type="password"
							name="pwd2"
							id="pwd2"
							ref={pwd2}
							onChange={this.handleChange}
						/>
					</label>
					<input
						type="submit"
						value="register"
						disabled={pwd && pwd !== pwd2}
					/>
				</form>
			</>
		);
	}
}

export default inject("uiStore", "teamStore")(withRouter(Register));
