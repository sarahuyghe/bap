import React, { Component } from "react";

class Stap2 extends Component {
	render() {
		const {
			teamnaam,
			typeOfEvent,
			kindOfTeam,
			handleChange,
			button,
			backButton
		} = this.props;
		if (this.props.currentStep !== 2) {
			// Prop: The current step
			return null;
		}
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
								value={teamnaam}
								onChange={handleChange}
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
									name="typeOfEvent"
									value="lopen"
									checked={typeOfEvent === "lopen"}
									onChange={handleChange}
								/>
								Wij gaan 3km lopen
							</label>
						</div>
						<div>
							<label className="customRadio">
								<input
									type="radio"
									name="typeOfEvent"
									value="wandelen"
									checked={typeOfEvent === "wandelen"}
									onChange={handleChange}
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
								name="kindOfTeam"
								className="checkbox"
								value={kindOfTeam}
								onChange={handleChange}
							/>
							Ik wil een gesloten team
						</label>
					</div>

					<div>
						<h4>Aan welke race neemt uw team deel?</h4>
						<p className="uitlegTitle">
							Zo weten we waar en waneer we jullie mogen verwachten
						</p>
						<select name="locatie" onChange={handleChange}>
							<option value="Antwerpen">Antwerpen</option>
							<option value="Brussel">Brussel</option>
							<option value="Charleroi">Charleroi</option>
							<option value="Namen">Namen</option>
						</select>
						<br />
					</div>
				</section>
				{button}
				{backButton}
			</section>
		);
	}
}

export default Stap2;