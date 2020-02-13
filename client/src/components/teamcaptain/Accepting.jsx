import React, { Component } from "react";

import styles from "./Home.module.css";
import trashIcon from "./../../images/trashIcon.svg";
import checkIcon from "./../../images/checkIcon.svg";

class Accepting extends Component {
	render() {
		const { person, onDelete, onUpdate } = this.props;
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
					src={checkIcon}
					alt="accept icon"
					onClick={() => onUpdate(person)}
				/>

				<img
					src={trashIcon}
					alt="detele icon"
					onClick={() => onDelete(person)}
				/>
			</div>
		);
	}
}

export default Accepting;
