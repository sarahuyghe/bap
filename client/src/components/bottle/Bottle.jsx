import React, { Component } from "react";
import styles from "./../team/Confirm.module.css";

import bottleGrey from "./../../images/bottle.png";

import bottleRed from "./../../images/bottle2.png";
import bottleblue from "./../../images/bottle3.png";
import bottlePink from "./../../images/bottle4.png";

import capPink from "./../../images/cap1.png";
import capBrown from "./../../images/cap2.png";
import cap from "./../../images/cap3.png";

class Bottle extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { cap, bottle, teamnaam, teamqoute } = this.props;
		return (
			<div className={styles.imgBottle}>
				<p>{teamnaam}</p>
				<p>{teamqoute}</p>
				<img src={this.props.cap} alt="" />
				<img src={bottle} alt="" />
			</div>
		);
	}
}

export default Bottle;
