import React, { Component } from "react";
import styles from "./../Individueel.module.css";

class Stap2 extends Component {
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
									name="event"
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
									const test = { locatie: e.currentTarget.value };
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
