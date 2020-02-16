import React, { Component } from "react";
import styles from "./../TeamForm.module.css";
import { ROUTES } from "./../../../constants/";
import { NavLink } from "react-router-dom";

import bottleGrey from "./../../../images/bottle.png";
import bottleRed from "./../../../images/bottle2.png";
import bottleblue from "./../../../images/bottle3.png";
import bottlePink from "./../../../images/bottle4.png";

import capPink from "./../../../images/cap1.png";
import capBrown from "./../../../images/cap2.png";
import cap from "./../../../images/cap3.png";

import colorCapPink from "./../../../images/firstColorCap.png";
import colorCap from "./../../../images/secColorCap.png";
import colorCapBrown from "./../../../images/thirdColorCap.png";

import colorBottleGrey from "./../../../images/greyColor.png";
import colorBottleRed from "./../../../images/redColor.png";
import colorBottleblue from "./../../../images/blueColor.png";
import colorBottlePink from "./../../../images/pinkColor.png";

class Stap1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [
				{
					id: 1,
					name: "bottleGrey",
					color: colorBottleGrey,
					img: bottleGrey
				},
				{
					id: 2,
					name: "bottleRed",
					color: colorBottleRed,
					img: bottleRed
				},
				{
					id: 3,
					name: "bottleblue",
					color: colorBottleblue,
					img: bottleblue
				},
				{
					id: 4,
					name: "bottlePink",
					color: colorBottlePink,
					img: bottlePink
				}
			],
			imagesCap: [
				{
					id: 1,
					name: "capPink",
					color: colorCapPink,
					img: capPink
				},
				{
					id: 2,
					name: "capBrown",
					color: colorCapBrown,
					img: capBrown
				},
				{
					id: 3,
					name: "cap",
					color: colorCap,
					img: cap
				}
			],
			currentImg: 0,
			currentImgCap: 0
		};
	}

	// handleChange = e => {
	// 	this.setState({ currentImg: e.currentTarget.value });
	// 	this.props.handleChange(e);
	// };

	render() {
		const { currentImg, images, imagesCap, currentImgCap } = this.state;
		const { bottle, cap, handleChange, button } = this.props;
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
						<div>
							{imagesCap.map((img, index) => (
								<img
									key={index}
									name="cap"
									src={img.color}
									alt="choose color cap"
									id={index}
									width="40"
									className={
										currentImgCap == index
											? `${styles.active}`
											: ` ${styles.chosen}`
									}
									onClick={e => {
										e.preventDefault();
										this.setState({ currentImgCap: e.currentTarget.id });
										const test = { cap: e.currentTarget.id };
										handleChange(test);
									}}
								/>
							))}
						</div>

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

						<div>
							{images.map((img, index) => (
								<img
									key={index}
									name="bottle"
									src={img.color}
									alt="choose color cap"
									id={index}
									width="40"
									className={
										currentImg == index
											? `${styles.active}`
											: ` ${styles.chosen}`
									}
									onClick={e => {
										e.preventDefault();
										this.setState({ currentImg: e.currentTarget.id });
										const test = { bottle: e.currentTarget.id };
										handleChange(test);
									}}
								/>
							))}
						</div>
					</div>
				</section>
				{button}
				<NavLink to={ROUTES.team} className="secondaireButton backButton">
					Terug
				</NavLink>
			</section>
		);
	}
}

export default Stap1;
