import React, { Component } from "react";
import { inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";

// import TeamForm from "./../team/TeamForm";

class Register extends Component {
	constructor() {
		super();
		this.state = { email: "", pwd: "", pwd2: "", name: "", firstname: "" };
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
			.register(name, firstname, email, pwd, teamStore.team[0].id)
			.then(() => {
				history.push(ROUTES.confirm);
			});
	};

	render() {
		const { email, pwd, pwd2, name, firstname } = this.state;
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<section className="panel">
						<div className="extraInfo">
							<h3>4. Account aanmaken</h3>
							<p>
								Als teamcaptain heeft u een account nodig want als u later nog
								aanpassingen wilt maken aan uw team kunt u deze sneller terug
								vinden. Uw data word niet doorgegeven aan externe bedrijven het
								is enkel voor technische doeleinden
							</p>
						</div>
						<div className="deeltitel">Account aanmaken</div>
						<section className="formSection">
							<div>
								<h4>Wat is uw naam?</h4>
								<p className="uitlegTitle">
									Zo kunnen we bijhouden wie de teamcamptain is
								</p>
								<label htmlFor="name">
									Mijn voornaam is
									<input
										type="text"
										name="firstname"
										id="firstname="
										value={firstname}
										placeholder="voornaam"
										className="form_input"
										onChange={this.handleChange}
									/>
								</label>
								<br />
								<label htmlFor="name">
									en
									<input
										type="text"
										name="name"
										id="name="
										placeholder="Achternaam "
										className="form_input"
										value={name}
										onChange={this.handleChange}
									/>
									is mijn achternaam
								</label>
							</div>
							<div>
								<h4>Wat is uw Email adres?</h4>
								<p className="uitlegTitle">
									Dit is in het geval dat u uw paswoord vergeet{" "}
								</p>
								<label htmlFor="email">
									Mijn Email adres is
									<input
										type="email"
										name="email"
										id="email="
										placeholder="mijnemail@domain.be"
										className="form_input"
										value={email}
										onChange={this.handleChange}
									/>
								</label>
							</div>
							<div className="password">
								<h4>Kies een paswoord</h4>
								<p className="uitlegTitle">
									Zodat enkel jij uw team kan aanpassen
								</p>
								<label htmlFor="password">
									Paswoord
									<input
										type="password"
										name="pwd"
										id="pwd"
										placeholder="Min. 8 karakters"
										className="form_input"
										value={pwd}
										onChange={this.handleChange}
									/>
								</label>
								<label htmlFor="password">
									Herhaal paswoord
									<input
										type="password"
										name="pwd2"
										id="pwd2"
										className="form_input"
										ref={pwd2}
										onChange={this.handleChange}
									/>
								</label>
							</div>
						</section>
						<input
							type="submit"
							value="Bevestigen"
							className="secondaireButton"
							disabled={pwd && pwd !== pwd2}
						/>
					</section>
				</form>
			</>
		);
	}
}

export default inject("uiStore", "teamStore")(withRouter(Register));
