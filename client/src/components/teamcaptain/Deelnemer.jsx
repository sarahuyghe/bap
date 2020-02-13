import React, { Component } from "react";

import styles from "./Home.module.css";
import trashIcon from "./../../images/trashIcon.svg";

class Deelnemer extends Component {
	render() {
		const { person, onDelete } = this.props;
		console.log(person);

		return (
			<div className={styles.deelnemer}>
				<p>
					{person.firstname} {person.name}
				</p>
				{person.buyBottle ? <p>Ja</p> : <p>Nee</p>}
				<p>
					€12 inschrijvingsgeld {person.buyBottle ? `+ €8 BOOBottle` : null}
				</p>
				<img
					src={trashIcon}
					alt="detele icon"
					onClick={() => onDelete(person)}
					className={styles.delete}
				/>
			</div>
		);
	}
}

export default Deelnemer;
