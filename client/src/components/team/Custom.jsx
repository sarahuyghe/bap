import React, { Component } from "react";
import styles from "./TeamForm.module.css";

// import bottleGrey from "./../../images/bottle.png";
// import bottleRed from "./../../images/bottle2.png";
// import bottleblue from "./../../images/bottle3.png";
// import bottlePink from "./../../images/bottle4.png";

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
					img: " /../../images/bottle.png"
				},
				{
					id: 2,
					name: "bottleRed",
					color: "red",
					img: " /../../images/bottle2.png"
				},
				{
					id: 3,
					name: "bottleblue",
					color: "blue",
					img: " /../../images/bottle3.png"
				},
				{
					id: 4,
					name: "bottlePink",
					color: "pink",
					img: " /../../images/bottle4.png"
				}
			],
			selectedImageIndex: 0
		};
	}

	handleChange = e => {
		console.log(e.target.index);
		this.setState({ selectedImageIndex: e.target.dataset.index });
		// bottle = e.currentTarget.value;
		console.log(this.state.selectedImageIndex);
	};

	render() {
		const { bottle, images } = this.state;
		return (
			<>
				<h3>1. Boobottle personaliseren</h3>
				<div className={styles.deeltitles}>Een team aanmaken</div>
				<div>
					<p>
						Personaliseer uw <br />
						BOOBottle
					</p>
					<p>Omdat elk team uniek is</p>
				</div>
				<select onChange={this.handleChange}>
					{images.map((img, index) => (
						// console.log(img);
						<option key={index} value={img.name}>
							{img.color}
						</option>
					))}
					{/* <option value="bottleGrey">Grey</option>
					<option value="bottleRed">Red</option>
					<option value="bottleblue">Blue</option>
					<option value="bottlePink">Pink</option> */}
				</select>
				<div className={styles.bottleCustom}>
					{/* {if()} */}
					<img src={capPink} alt="" width="240" />
					<img src={bottle} alt="" width="160" id="bottle" />
				</div>
				<a href="#sec2" className={styles.submit}>
					Volgende
				</a>
			</>
		);
	}
}

export default Custom;
