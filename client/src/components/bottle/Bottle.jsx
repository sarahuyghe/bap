import React, { Component } from "react";

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

class Bottle extends Component {
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

	render() {
		const { cap, bottle, teamnaam, quote } = this.props;
		const { images, imagesCap } = this.state;
		console.log(cap);
		return (
			<>
				<div className="infoOfBottle">
					<p>{teamnaam}</p>
					<p>{quote}</p>
				</div>
				<img src={imagesCap[cap].img} alt="" width="160" />
				<img
					src={images[bottle].img}
					alt=""
					width="125"
					style={{ margin: "0 0 0 4.5rem" }}
				/>
			</>
		);
	}
}

export default Bottle;
