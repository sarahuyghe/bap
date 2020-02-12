import React, { Component } from "react";
import styles from "./../Individueel.module.css";

class Stap2 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			typeOfEvent,
			locatie,
			handleChange,
			handleSubmit,
			backButton
		} = this.props;

		if (this.props.currentStep !== 2) {
			// Prop: The current step
			return null;
		}
		return (
			<section id="sec2" className={styles.panel}>
				<div className="extraInfo">
					<h3>2. Inschrijving specificaties</h3>
				</div>
				<div className="deeltitel">Individueel inschrijven</div>
				<section className={styles.formSection}>
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
									name="event"
									value="wandelen"
									checked={typeOfEvent === "wandelen"}
									onChange={handleChange}
								/>
								Wij gaan 6km wandelen
							</label>
						</div>
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

export default Stap2;
