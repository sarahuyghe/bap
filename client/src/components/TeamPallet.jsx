import React, { Component } from "react";

import bottleGrey from "./../images/bottle.png";
import bottleRed from "./../images/bottle2.png";
import bottleblue from "./../images/bottle3.png";
import bottlePink from "./../images/bottle4.png";

import capPink from "./../images/capPink.png";
import capBrown from "./../images/capBrown.png";
import cap from "./../images/capWhite.png";

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
			],
			chosenGroup: 1
		};
	}

	render() {
		const {
			teamnaam,
			quote,
			motivation,
			bottle,
			cap,
			teamId,
			kind,
			handleClickPallet
		} = this.props;
		const { images, imagesCap, chosenGroup } = this.state;
		console.log(quote);
		return (
			<div
				className={
					chosenGroup == teamId
						? ` ${styles.chosen} ${styles.pallet}`
						: `${styles.pallet}`
				}
				onClick={e => {
					e.preventDefault();
					console.log(teamId);
					const test = { teamId: teamId, kind: kind };
					this.setState({ chosenGroup: teamId });
					console.log(chosenGroup);
					console.log(test);
					handleClickPallet(test);
				}}
			>
				<p>{teamnaam}</p>
				<p>120 Deelnemers</p>
				<div className={styles.imageBottle}>
					<div className={styles.textBottle}>
						<p>{teamnaam}</p>
						<p>{quote}</p>
					</div>
					<img
						src={imagesCap[cap].img}
						alt=""
						width="75"
						className={styles.cap}
					/>
					<img
						src={images[bottle].img}
						alt=""
						width="78"
						className={styles.bottle}
					/>
				</div>
				<div>
					<h4>{teamnaam}</h4>
					<p className={styles.quote}>{quote}</p>
					<p>{motivation}</p>
				</div>
			</div>
		);
	}
}

export default TeamPallet;
