import React, { Component } from "react";
import styles from "./../MessageForm.module.css";

class Stap2 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { message, name, handleChange, handleSubmit } = this.props;
		if (this.props.currentStep !== 2) {
			// Prop: The current step
			return null;
		}
		return (
			<section id="sec2" className={styles.panel}>
				<h3>2. Inhoud van het steunbericht</h3>
				<div className="deeltitel">Message in a BOOBottle</div>
				<section className={styles.formSection}>
					<div>
						<h4>Wat is uw naam?</h4>
						<p className="uitlegTitle">
							Dit mag ook een koosnaam of roepnaam zijn. Dit is enkel zodat het
							team weet van wie het steun bericht komt
						</p>
						<label>
							Mijn naam is
							<input
								type="text"
								name="name"
								className="form_input"
								placeholder="naam"
								value={name}
								onChange={handleChange}
							/>
						</label>
					</div>
					<div>
						<h3>Wat wilt u hen zeggen?</h3>
						<p className="uitlegTitle">
							Dit is het steunbericht dat uw geselecteerd team zal ontvangen
						</p>
						<label>
							<textarea
								name="message"
								placeholder="hey ..."
								cols="80"
								rows="5"
								value={message}
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
			</section>
		);
	}
}

export default Stap2;
