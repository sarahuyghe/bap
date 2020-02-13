import React, { Component } from "react";

import bottleGrey from "./../../images/bottle.png";

import bottleRed from "./../../images/bottle2.png";
import bottleblue from "./../../images/bottle3.png";
import bottlePink from "./../../images/bottle4.png";

import capPink from "./../../images/capPink.png";
import capBrown from "./../../images/capBrown.png";
import cap from "./../../images/capWhite.png";

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
			],
			currentImg: 0,
			currentImgCap: 0
		};
	}

	render() {
		const { cap, bottle, teamnaam, quote, custom } = this.props;
		const { images, imagesCap, currentImgCap, currentImg } = this.state;
		return (
			<>
				{custom ? (
					<>
						<div>
							{imagesCap.map((img, index) => (
								<img
									key={index}
									name="cap"
									src={img.color}
									alt="choose color cap"
									id={index}
									onClick={e => {
										this.setState({ currentImgCap: e.currentTarget.id });
										this.props.handleChange(e);
										console.log(e.currentTarget.id);
									}}
								/>
							))}
						</div>
						<div
						// className={styles.bottleCustom}
						>
							<img
								src={imagesCap[currentImgCap].img}
								alt=""
								width="240"
								value={cap}
								// onChange={handleChange}
							/>
							<img
								src={images[currentImg].img}
								alt=""
								width="160"
								id="bottle"
								value={bottle}
								// onChange={handleChange}
							/>
						</div>
					</>
				) : null}
				<div className="infoOfBottle">
					<p>{teamnaam}</p>
					<p>{quote}</p>
				</div>

				<img src={imagesCap[cap].img} alt="" width="120" />
				<img
					src={images[bottle].img}
					alt=""
					width="130"
					style={{ margin: "0 0 0 -0.5rem" }}
				/>
			</>
		);
	}
}

export default Bottle;
