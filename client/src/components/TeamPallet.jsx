import React, { Component } from "react";

import bottleGrey from "./../images/bottle.png";
import bottleRed from "./../images/bottle2.png";
import bottleblue from "./../images/bottle3.png";
import bottlePink from "./../images/bottle4.png";

import capPink from "./../images/cap1.png";
import capBrown from "./../images/cap2.png";
import cap from "./../images/cap3.png";

import styles from "./TeamPallet.module.css";

class TeamPallet extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { teamnaam, teamquote, motivation, bottle, cap } = this.props;
		return (
			<div className={styles.pallet}>
				<p>Jos Van den eiken {teamnaam}</p>
				<p>120 Deelnemers</p>
				<div>
					<div>
						<img src={cap} alt="" />
						<img src={bottle} alt="" />
					</div>
					<h4>JoskegaatervoorJoskegaatervoor {teamnaam}</h4>
					<p>We win but we don’t lose {teamquote}</p>
					<p>
						Mijn zaak bestaat dit jaar 100 jaar. Om dit te bereiken hebben we
						veel moed en karakter nodig gehad. Het loopt niet altijd van een
						leien dakje en met vallen en opstaan hebben we dit kunnen
						bereiken...
						{motivation}
					</p>
				</div>
			</div>
		);
	}
}

export default TeamPallet;
