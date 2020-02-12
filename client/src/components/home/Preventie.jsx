import React, { Component } from "react";
import preventie from "./../../images/Preventie.png";

import knobbel from "./../../images/knobbel.png";
import kuiltje from "./../../images/kuiltje.png";
import roodheid from "./../../images/roodheid.png";
import vocht from "./../../images/vocht.png";
import ader from "./../../images/ader.png";

import bottleKnobbel from "./../../images/bottleKnobbel.png";
import bottleKuiltje from "./../../images/bottleKuiltje.png";
import bottleRood from "./../../images/bottleRood.png";
import bottleVocht from "./../../images/bottleVocht.png";
import bottleAder from "./../../images/bottleAder.png";

import arrow from "./../../images/arrow.svg";

import styles from "./Preventie.module.css";

class Preventie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			symptomen: [
				{
					id: 1,
					img: bottleKnobbel,
					detailImg: knobbel,
					title: "Knobbels op de borst huid",
					uitleg:
						"Met een knobbeltje in de borst wordt een verdikking bedoeld die anders is dan de bobbeligheid die je normaal voelt in de borst. Een knobbeltje <b>kan aanvoelen als een knikker</b>, en voelt harder en stugger aan dan de rest van de borst. Een knobbel in de borst kan ook aanvoelen als een wat <b>harder of stugger plekje</b>, dat anders voelt dan de rest van de borst."
				},
				{
					id: 2,
					img: bottleKuiltje,
					detailImg: kuiltje,
					title: "Kuiltje in de borst",
					uitleg:
						"Met een knobbeltje in de borst wordt een verdikking bedoeld die anders is dan de bobbeligheid die je normaal voelt in de borst. Een knobbeltje <b>kan aanvoelen als een knikker</b>, en voelt harder en stugger aan dan de rest van de borst. Een knobbel in de borst kan ook aanvoelen als een wat <b>harder of stugger plekje</b>, dat anders voelt dan de rest van de borst."
				},
				{
					id: 3,
					img: bottleRood,
					detailImg: vocht,
					title: "Vocht afscheiding via de tepel",
					uitleg:
						"Met een knobbeltje in de borst wordt een verdikking bedoeld die anders is dan de bobbeligheid die je normaal voelt in de borst. Een knobbeltje <b>kan aanvoelen als een knikker</b>, en voelt harder en stugger aan dan de rest van de borst. Een knobbel in de borst kan ook aanvoelen als een wat <b>harder of stugger plekje</b>, dat anders voelt dan de rest van de borst."
				},
				{
					id: 4,
					img: bottleVocht,
					detailImg: roodheid,
					title: "Roodheid op de borsthuid",
					uitleg:
						"Met een knobbeltje in de borst wordt een verdikking bedoeld die anders is dan de bobbeligheid die je normaal voelt in de borst. Een knobbeltje <b>kan aanvoelen als een knikker</b>, en voelt harder en stugger aan dan de rest van de borst. Een knobbel in de borst kan ook aanvoelen als een wat <b>harder of stugger plekje</b>, dat anders voelt dan de rest van de borst."
				},
				{
					id: 5,
					img: bottleAder,
					detailImg: ader,
					title: "Ingetrokken tepel",
					uitleg:
						"Met een knobbeltje in de borst wordt een verdikking bedoeld die anders is dan de bobbeligheid die je normaal voelt in de borst. Een knobbeltje <b>kan aanvoelen als een knikker</b>, en voelt harder en stugger aan dan de rest van de borst. Een knobbel in de borst kan ook aanvoelen als een wat <b>harder of stugger plekje</b>, dat anders voelt dan de rest van de borst."
				}
			],
			currentSym: 0
		};
	}
	render() {
		const { currentSym, symptomen } = this.state;
		return (
			<>
				<section className={styles.preventie}>
					<img src={preventie} alt="preventie" />

					<div className={styles.infoPrev}>
						<h2>Preventie</h2>
						<p className="titleMini">Want voorkomen is beter dan genezen</p>

						<p>
							Uit studies is gebleken dat beweging 1 van de meest effectieve
							preventie maatregeling is tegen borstkanker. Moest je nog geen
							reden hebben om deel te nemen aan de Race for the Cure heb je er
							nu alvast één.
						</p>
						<div className={styles.callToAction}>
							<p className="secondaireButton">Lees meer</p>
							<img src={arrow} alt="arrow down" />
						</div>
					</div>
				</section>
				<section className={styles.symptomen}>
					{/* <div className={styles.introSymptonen}> */}
					<div className={styles.introSymptonen}>
						<h2>Symptomen</h2>
						<p className="titleMini">
							Dit zijn de symtopen dat je bij jezelf kan checken
						</p>
					</div>
					<div className={styles.bottles}>
						{symptomen.map((symptoon, index) => (
							<>
								<img
									src={symptoon.img}
									key={index}
									alt={symptoon.title}
									width="111"
									className={
										currentSym === index
											? styles.imagePrevCurrent
											: styles.imagePrev
									}
									onClick={() => this.setState({ currentSym: index })}
								/>
								{/* <img src={arrow} alt="" className={styles.arrowSymp} /> */}
							</>
						))}
					</div>
					{/* </div> */}
					<div className={styles.infoSpecifiekbg} />
					<div className={styles.infoLine} />
					<img
						src={symptomen[currentSym].detailImg}
						alt=""
						className={styles.detailImg}
					/>
					<div className={styles.infoSpecifiek}>
						<h3>{symptomen[currentSym].title}</h3>
						<p>{symptomen[currentSym].uitleg}</p>
					</div>
				</section>
			</>
		);
	}
}

export default Preventie;
