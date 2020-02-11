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
		this.state = {
			images: [
				{
					id: 1,
					name: "bottleGrey",
					color: "grey",
					img: bottleGrey
				},
				{
					id: 2,
					name: "bottleRed",
					color: "red",
					img: bottleRed
				},
				{
					id: 3,
					name: "bottleblue",
					color: "blue",
					img: bottleblue
				},
				{
					id: 4,
					name: "bottlePink",
					color: "pink",
					img: bottlePink
				}
			],
			imagesCap: [
				{
					id: 1,
					name: "capPink",
					color: "grey",
					img: capPink
				},
				{
					id: 2,
					name: "capBrown",
					color: "red",
					img: capBrown
				},
				{
					id: 3,
					name: "cap",
					color: "blue",
					img: cap
				}
			]
		};
	}

	render() {
		const { cap, bottle, teamnaam, teamqoute } = this.props;
		const { images, imagesCap } = this.state;
		return (
			<div className={styles.imgBottle}>
				{/* <p>{teamnaam}</p>
				<p>{teamqoute}</p> */}
				<img src={imagesCap[cap].img} alt="" width="193" />
				<img
					src={images[bottle].img}
					alt=""
					width="130"
					style={{ margin: "0 0 0 6.5rem" }}
				/>
			</div>
		);
	}
}

export default Bottle;
