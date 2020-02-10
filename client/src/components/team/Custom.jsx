import React, { Component } from "react";
import styles from "./TeamForm.module.css";

import bottleGrey from "./../../images/bottle.png";
import bottleRed from "./../../images/bottle2.png";
import bottleblue from "./../../images/bottle3.png";
import bottlePink from "./../../images/bottle4.png";

import capPink from "./../../images/cap1.png";
import capBrown from "./../../images/cap2.png";
import cap from "./../../images/cap3.png";

class Custom extends Component {
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
			currentImg: 0,
			currentImgCap: 0
		};
	}

	handleChange = e => {
		// this.props.bottleInput = e.currentTarget.value;
		// console.log(this.props.bottleInput);
		this.setState({ currentImg: e.currentTarget.value });
	};

	render() {
		const { currentImg, images, imagesCap, currentImgCap } = this.state;
		const { BottleInput } = this.props;
		return (
			<>
				<h3>1. Boobottle personaliseren</h3>
				<div className="deeltitel">Een team aanmaken</div>
				<div>
					<h4>
						Personaliseer uw <br />
						BOOBottle
					</h4>
					<p className="uitlegTitle">Omdat elk team uniek is</p>
				</div>
				<div>
					<select onChange={this.handleChange}>
						{images.map((img, index) => (
							<option key={img.id} value={index}>
								{img.color}
							</option>
						))}
					</select>
					<select
						onChange={e => {
							this.setState({ currentImgCap: e.currentTarget.value });
						}}
					>
						{imagesCap.map((img, index) => (
							<option key={img.id} value={index}>
								{img.color}
							</option>
						))}
					</select>
					<div className={styles.bottleCustom}>
						{/* {if()} */}
						<img src={imagesCap[currentImgCap].img} alt="" width="240" />
						<img src={images[currentImg].img} alt="" width="160" id="bottle" />
					</div>
				</div>
				<a href="#sec2" className="secondaireButton">
					Volgende
				</a>
			</>
		);
	}
}

export default Custom;
