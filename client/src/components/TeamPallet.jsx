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
		const {
			teamnaam,
			teamquote,
			motivation,
			bottle,
			cap,
			teamId,
			kind,
			handleClickPallet,
			heightMode
		} = this.props;
		const { images, imagesCap } = this.state;
		// console.log(teamnaam);
		// console.log(teamId);
		// console.log(bottle);
		// console.log(images[bottle].name);
		return (
			// <div
			// 	// name="teamId"
			// 	style={{
			// 		height: this.state.heightMode === "current" ? 100 : 400
			// 	}}
			// 	// value={teamId}
			// 	// key={teamId}
			// >
			<div
				className={styles.pallet}
				onClick={e => {
					e.preventDefault();
					const test = { teamId: teamId, kind: kind };
					console.log(test);
					handleClickPallet(test);
				}}
			>
				<p>{teamnaam}</p>
				<p>120 Deelnemers</p>
				<div className={styles.imageBottle}>
					<img src={imagesCap[cap].img} alt="" width="116" />
					<img
						src={images[bottle].img}
						alt=""
						width="78"
						className={styles.bottle}
					/>
				</div>
				<div>
					<h4>{teamnaam}</h4>
					<p className={styles.quote}>{teamquote}</p>
					<p>{motivation}</p>
				</div>
			</div>
			// </div>
		);
	}
}

export default TeamPallet;
