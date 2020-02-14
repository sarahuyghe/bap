import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import bottleGrey from "./../../images/bottle.png";
import bottleRed from "./../../images/bottle2.png";
import bottleblue from "./../../images/bottle3.png";
import bottlePink from "./../../images/bottle4.png";

import capPink from "./../../images/cap1.png";
import capBrown from "./../../images/cap2.png";
import cap from "./../../images/cap3.png";

import colorCapPink from "./../../images/firstColorCap.png";
import colorCap from "./../../images/secColorCap.png";
import colorCapBrown from "./../../images/thirdColorCap.png";

import colorBottleGrey from "./../../images/greyColor.png";
import colorBottleRed from "./../../images/redColor.png";
import colorBottleblue from "./../../images/blueColor.png";
import colorBottlePink from "./../../images/pinkColor.png";

// import Bottle from "./../bottle/Bottle";
import styles from "./Home.module.css";

class Info extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
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
			currentImg: this.props.team.bottle,
			currentImgCap: this.props.team.cap
		};
	}

	setEditMode = value => {
		console.log("edit mode");
		this.setState({ edit: value });
	};

	// handleChange = e => {
	// 	this.setState({ currentImg: e.currentTarget.value });
	// 	this.props.handleChange(e);
	// };
	handleChange = e => {
		this.setState({ currentImg: e.currentTarget.value });
		// this.props.handleChange(e);
	};

	render() {
		const { edit, currentImg, currentImgCap, imagesCap, images } = this.state;
		const { team, onUpdate } = this.props;
		console.log(team.cap);
		return edit ? (
			<>
				{/* {team.map((t, index) => ( */}
				<div key={team.id} className={styles.info}>
					<div>
						<input
							type="text"
							value={team.teamnaam}
							name="teamnaam"
							id="teamnaam"
							onChange={e => team.setTeamnaam(e.currentTarget.value)}
						/>
						<input
							type="text"
							value={team.quote}
							name="quote"
							id="quote"
							onChange={e => team.setQuote(e.currentTarget.value)}
						/>
						<input
							type="text"
							value={team.reason}
							name="reason"
							id="reason"
							onChange={e => team.setReason(e.currentTarget.value)}
						/>
					</div>
					<div>
						<h4>Lopen of wandelen?</h4>
						<div className="customTesting">
							<label className="customRadio">
								<input
									type="radio"
									name="event"
									value="lopen"
									className="typeEvent"
									checked={team.typeOfEvent === "lopen"}
									onChange={e => team.setTypeOfEvent(e.currentTarget.value)}
								/>
								Wij gaan 3km lopen
							</label>
						</div>
						<div className="customTesting">
							<label className="customRadio">
								<input
									type="radio"
									name="event"
									value="wandelen"
									className="typeEvent"
									checked={team.typeOfEvent === "wandelen"}
									onChange={e => team.setTypeOfEvent(e.currentTarget.value)}
								/>
								Wij gaan 6km wandelen
							</label>
						</div>
						<div>
							<h4>Gesloten team?</h4>
							<label className="customTesting">
								<input
									type="checkbox"
									name="kindOfTeam"
									className="typeEvent"
									defaultChecked={team.kind}
									// value={kindOfTeam}
									// onChange={handleChange}
								/>
								Ik wil een gesloten team
							</label>
						</div>
					</div>
					<div className={styles.bottle}>
						<div>
							{imagesCap.map((img, index) => (
								<img
									key={index}
									name="cap"
									src={img.color}
									alt="choose color cap"
									id={index}
									className={
										currentImgCap === index
											? `${styles.active}`
											: ` ${styles.chosen}`
									}
									onClick={e => {
										team.setCap(e.currentTarget.id);
										this.setState({ currentImgCap: e.currentTarget.id });
										// this.props.handleChange(e);
										console.log(e.currentTarget.id);
									}}
								/>
							))}
						</div>
						<div>
							{images.map((img, index) => (
								<img
									key={index}
									name="bottle"
									src={img.color}
									alt="choose color cap"
									id={index}
									className={
										currentImg === index
											? `${styles.active}`
											: ` ${styles.chosen}`
									}
									onClick={e => {
										team.setCap(e.currentTarget.id);
										this.setState({ currentImg: e.currentTarget.id });
										// this.props.handleChange(e);
										console.log(e.currentTarget.id);
									}}
								/>
							))}
						</div>
						<div className={styles.bottleCustom}>
							<img
								src={imagesCap[currentImgCap].img}
								alt=""
								width="240"
								value={team.cap}
								// onChange={handleChange}
							/>
							<img
								src={images[currentImg].img}
								alt=""
								width="180"
								id="bottle"
								value={team.bottle}
								// onChange={handleChange}
							/>
						</div>
						{/* <Bottle
							teamnaam={team.teamnaam}
							teamqoute={team.quote}
							cap={team.cap}
							bottle={team.bottle}
							custom={true}
						/> */}
					</div>
				</div>
				<button
					onClick={() => {
						onUpdate(team);
						this.setEditMode(false);
					}}
					className="mainButton"
				>
					Save
				</button>
			</>
		) : (
			<>
				<div key={team.id} className={styles.info}>
					<div>
						<h4>{team.teamnaam}</h4>
						<p>{team.quote}</p>
						<p>{team.reason}</p>
					</div>

					<div>
						<h4>Lopen of wandelen?</h4>

						<div className="customTesting">
							<label>
								<input
									type="radio"
									name="event"
									value="lopen"
									className={`checkbox ${styles.inputWidth}`}
									checked={team.typeOfEvent === "lopen"}
									disabled="disabled"
								/>
								Wij gaan 3km lopen
							</label>
						</div>
						<div className="customTesting">
							<label>
								<input
									type="radio"
									name="event"
									value="wandelen"
									className={`checkbox ${styles.inputWidth}`}
									checked={team.typeOfEvent === "wandelen"}
									disabled="disabled"
								/>
								Wij gaan 6km wandelen
							</label>
						</div>

						<div>
							<h4>Gesloten team?</h4>
							<label className="customTesting">
								<input
									type="checkbox"
									name="kindOfTeam"
									className={`checkbox ${styles.inputWidth}`}
									defaultChecked={team.kind}
									disabled="disabled"
								/>
								Ik wil een gesloten team
							</label>
						</div>
					</div>
					<div className={styles.bottle}>
						<div className={styles.textInfo}>
							<p>{team.teamnaam}</p>
							<p>{team.quote}</p>
						</div>
						<img src={imagesCap[2].img} alt="" width="240" />
						<img
							src={images[team.bottle].img}
							alt=""
							width="180"
							style={{ margin: "0 0 0 8rem" }}
						/>
					</div>
				</div>
				<button onClick={() => this.setEditMode(true)} className="mainButton">
					Edit
				</button>
			</>
		);
	}
}

export default inject("teamStore")(observer(Info));
