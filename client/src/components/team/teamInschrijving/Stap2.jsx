import React, { Component } from "react";

class Stap2 extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {
			teamnaam,
			typeOfEvent,
			kindOfTeam,
			handleChange,
			button,
			locatie,
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
									className="typeEvent"
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
									className="typeEvent"
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
								className="typeEvent"
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
						<div>
							<button
								className={
									locatie === "Antwerpen" ? `locatie chosen` : `locatie`
								}
								value="Antwerpen"
								onClick={e => {
									e.preventDefault();
									const test = { locatie: e.currentTarget.value };
									handleChange(test);
								}}
							>
								<p>Antwerpen</p>
								<p className="subInfo">27 Sept 2020</p>
							</button>
							<button
								className={locatie === "Brussel" ? `locatie chosen` : `locatie`}
								value="Brussel"
								onClick={e => {
									e.preventDefault();
									const test = { locatie: e.currentTarget.value };
									handleChange(test);
								}}
							>
								<p>Brussel</p>
								<p className="subInfo">04 Okt 2020</p>
							</button>
							<button
								className={
									locatie === "Charleroi" ? `locatie chosen` : `locatie`
								}
								value="Charleroi"
								onClick={e => {
									e.preventDefault();
									const test = { locatie: e.currentTarget.value };
									handleChange(test);
								}}
							>
								<p>Charleroi</p>
								<p className="subInfo">27 Sept 2020</p>
							</button>
							<button
								className={locatie === "Namen" ? `locatie chosen` : `locatie`}
								value="Namen"
								onClick={e => {
									e.preventDefault();
									const test = { locatie: e.target.value };
									handleChange(test);
								}}
							>
								<p>Namen</p>
								<p className="subInfo">27 Sept 2020</p>
							</button>
						</div>

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
