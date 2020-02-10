import React, { Component } from "react";
import Custom from "./../Custom";
import styles from "./../TeamForm.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../../constants/";

import bottleGrey from "./../../../images/bottle.png";
import bottleRed from "./../../../images/bottle2.png";
import bottleblue from "./../../../images/bottle3.png";
import bottlePink from "./../../../images/bottle4.png";

import capPink from "./../../../images/cap1.png";
import capBrown from "./../../../images/cap2.png";
import cap from "./../../../images/cap3.png";

class Stap1 extends Component {
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
		this.setState({ currentImg: e.currentTarget.value });
		this.props.handleChange(e);
	};

	render() {
		const { currentImg, images, imagesCap, currentImgCap } = this.state;
		const { bottle, cap, handleChange } = this.props;
		if (this.props.currentStep !== 1) {
			// Prop: The current step
			return null;
		}

		return (
			<section className="panel">
				<h3>1. Boobottle personaliseren</h3>
				<div className="deeltitel">Een team aanmaken</div>
				<section className={styles.customSection}>
					<div>
						<h4>
							Personaliseer uw <br />
							BOOBottle
						</h4>
						<p className="uitlegTitle">Omdat elk team uniek is</p>
					</div>
					<div className={styles.custom}>
						<select
							name="bottle"
							value={bottle}
							onChange={e => {
								this.setState({ currentImg: e.currentTarget.value });
								this.props.handleChange(e);
							}}
						>
							{images.map((img, index) => (
								<option key={img.id} value={index}>
									{img.color}
								</option>
							))}
						</select>
						<select
							name="cap"
							value={cap}
							onChange={e => {
								this.setState({ currentImgCap: e.currentTarget.value });
								this.props.handleChange(e);
							}}
						>
							{imagesCap.map((img, index) => (
								<option key={img.id} value={index}>
									{img.color}
								</option>
							))}
						</select>
						<div className={styles.bottleCustom}>
							<img
								src={imagesCap[currentImgCap].img}
								alt=""
								width="240"
								value={cap}
								onChange={handleChange}
							/>
							<img
								src={images[currentImg].img}
								alt=""
								width="160"
								id="bottle"
								value={bottle}
								onChange={handleChange}
							/>
						</div>
					</div>
				</section>
			</section>
		);
	}
}

export default Stap1;
