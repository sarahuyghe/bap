import React, { Component } from "react";

class Stap3 extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {
			quote,
			motivation,
			handleChange,
			handleSubmit,
			backButton
		} = this.props;

		if (this.props.currentStep !== 3) {
			// Prop: The current step
			return null;
		}
		return (
			<section id="sec3" className="panel">
				<h3>3. Team personaliseren</h3>
				<div className="deeltitel">Een team aanmaken</div>
				<section className="formSection">
					<div>
						<h4>Kies een teamgezegde</h4>
						<p className="uitlegTitle">
							heeft u een iconische zin of een zin dat perfect de sfeer in uw
							team beschrijft? Plaats hem dan hier.
						</p>
						<label>
							Ons team-gezegde is:
							<input
								type="text"
								name="quote"
								className="form_input"
								placeholder="team-gezegde"
								value={quote}
								onChange={handleChange}
							/>
						</label>
					</div>
					<div>
						<h4>Wat is uw team’s motivatie?</h4>
						<p className="uitlegTitle">
							dit laat mensen weten waarom ze uw team zouden sponseren of
							aansluiten
						</p>
						<label>
							<textarea
								name="motivation"
								ref={this.whyInput}
								placeholder="hey ..."
								cols="80"
								rows="5"
								value={motivation}
								onChange={handleChange}
							/>
						</label>
					</div>
				</section>
				<input
					type="submit"
					value="Volgende"
					className="secondaireButton"
					onClick={handleSubmit}
				/>
				{backButton}
			</section>
		);
	}
}

export default Stap3;
