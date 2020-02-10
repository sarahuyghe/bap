import React, { Component } from "react";

class Stap3 extends Component {
	constructor(props) {
		super(props);
		this.quoteInput = React.createRef();
		this.whyInput = React.createRef();
	}
	render() {
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
								ref={this.quoteInput}
								className="form_input"
								placeholder="team-gezegde"
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
								name="reason"
								ref={this.whyInput}
								placeholder="hey ..."
								cols="80"
								rows="5"
							/>
						</label>
					</div>
				</section>
				{/* <input type="submit" value="Volgende" className="secondaireButton" /> */}
			</section>
		);
	}
}

export default Stap3;
