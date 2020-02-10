import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../../constants/";

class Stap2 extends Component {
	constructor(props) {
		super(props);
		this.teamNameInput = React.createRef();
		this.whyInput = React.createRef();
		this.eventInput = React.createRef();
	}

	render() {
		return (
			<section id="sec2" className="panel">
				<h3>2. Team instellen</h3>
				<div className="deeltitel">Een team aanmaken</div>
				<section className="formSection">
					<div>
						<h4>Kies een teamnaam</h4>
						<p className="uitlegTitle">
							1 naam dat uw hele team definieerd, dat kan niet makkelijk zijn.
							Veel succes
						</p>
						<label>
							De naam van mijn team is
							<input
								type="text"
								name="teamnaam"
								className="form_input"
								placeholder="teamnaam"
								ref={this.teamNameInput}
								required
							/>
						</label>
					</div>
					<div>
						<h4>Lopen of wandelen?</h4>
						<p className="uitlegTitle">
							Zo weten we hoeveel mensen we per route verwachten
						</p>
						<div>
							<label className="customRadio">
								<input
									type="radio"
									name="event"
									value="lopen"
									id="one"
									ref={this.eventInput}
								/>
								Wij gaan 3km lopen
							</label>
						</div>
						<div>
							<label className="customRadio">
								<input
									type="radio"
									name="event"
									value="wandelen"
									id="two"
									ref={this.eventInput}
								/>
								Wij gaan 6km wandelen
							</label>
						</div>
					</div>
					<div>
						<h4>Gesloten team?</h4>
						<p className="uitlegTitle">
							Bij een gesloten team moet u als teamcaptain een elke inschrijving
							goedkeuren
						</p>
						<label>
							<input
								type="checkbox"
								name="reason"
								value="closedTeam"
								className="checkbox"
								ref={this.kindInput}
							/>
							Ik wil een gesloten team
						</label>
					</div>

					<div>
						<h4>Aan welke race neemt uw team deel?</h4>
						<p className="uitlegTitle">
							Zo weten we waar en waneer we jullie mogen verwachten
						</p>
						<select ref={this.locatieInput}>
							<option value="Antwerpen">Antwerpen</option>
							<option value="Brussel">Brussel</option>
							<option value="Charleroi">Charleroi</option>
							<option value="Namen">Namen</option>
						</select>
						<br />
					</div>
				</section>
				<NavLink to={ROUTES.stap3Team} className="mainButton">
					Volgende
				</NavLink>
			</section>
		);
	}
}

export default Stap2;
