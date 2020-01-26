import React, { Component } from "react";
import { inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";
import stylesForm from "./Form.module.css";

class RegisterForm extends Component {
	constructor() {
		super();
		this.state = { mail: ``, pwd: ``, pwd2: ``, name: `` };
	}

	handleChange = e => {
		const input = e.currentTarget;
		const state = { ...this.state };
		state[input.name] = input.value;
		this.setState(state);
	};

	handleSubmit = e => {
		e.preventDefault();
		const { uiStore, history } = this.props;
		const { mail, pwd, name } = this.state;
		uiStore.register(name, mail, pwd).then(() => {
			history.push(ROUTES.login);
		});
	};

	render() {
		const { mail, pwd, pwd2, name } = this.state;
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="email">
						Name
						<input
							type="test"
							name="name"
							id="name="
							value={name}
							// className={stylesForm.form_input}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor="mail">
						Email
						<input
							type="mail"
							name="mail"
							id="mail="
							value={mail}
							// className={stylesForm.form_input}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor="username">
						Password
						<input
							type="password"
							name="pwd"
							id="pwd"
							value={pwd}
							// className={stylesForm.form_input}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor="username">
						Repeat password
						<input
							type="password"
							name="pwd2"
							id="pwd2"
							ref={pwd2}
							// className={stylesForm.form_input}
							onChange={this.handleChange}
						/>
					</label>
					<input
						type="submit"
						value="Register"
						// className={stylesForm.button}
						disabled={pwd && pwd !== pwd2}
					/>
				</form>
			</>
		);
	}
}

export default inject(`uiStore`)(withRouter(RegisterForm));
