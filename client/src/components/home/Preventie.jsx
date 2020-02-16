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
						"Met een knobbeltje in de borst wordt een verdikking bedoeld die anders is dan de bobbeligheid die je normaal voelt in de borst. Een knobbeltje <span> kan aanvoelen als een knikker </span>, en voelt harder en stugger aan dan de rest van de borst. Een knobbel in de borst kan ook aanvoelen als een wat <b>harder of stugger plekje </b>, dat anders voelt dan de rest van de borst."
				},
				{
					id: 2,
					img: bottleKuiltje,
					detailImg: kuiltje,
					title: "Kuiltje in de borst",
					uitleg:
						"	Een kuiltje in de borst kun je herkennen door het verzachten van de huid en een locale inzakking van de borsthuid. Er kunnen ook meerdere kuitjes opduiken. Vaak zijn deze van eerder kleiner en dichter bij elkaar."
				},
				{
					id: 3,
					img: bottleRood,
					detailImg: vocht,
					title: "Vocht afscheiding via de tepel",
					uitleg:
						"Het vocht dat zich afscheiding uit de tepel is kan in verscheidene kleuren en viscositeiten voorkomen. , Zoals bruin, groen, waterig, melkachtig of bloederig vocht. Dit is 1 van de symptomen die het snelts opvalt."
				},
				{
					id: 4,
					img: bottleVocht,
					detailImg: roodheid,
					title: "Roodheid op de borsthuid",
					uitleg:
						"De roodheid op de borsthuid lijkt vaak op een schaafwonde en voelt in sommige gevallen aan als een sinaasappelschil. Als deze wonde niet geneest geeft dit ook een goede indicatie dat het een geval van borstkanker is"
				},
				{
					id: 5,
					img: bottleAder,
					detailImg: ader,
					title: "Ingetrokken tepel",
					uitleg:
						"Op gezwollen ader(s) die van en naar de tepel loopt kunnen ook een teken zijn van borstkanker"
				}
			],
			currentSym: 0
		};
	}
	render() {
		const { currentSym, symptomen } = this.state;
		return (
			<>
				<section className={styles.preventie} id="preventie">
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
							</>
						))}
					</div>
					<div className={styles.infoSpecifiekbg} />
					<div className={styles.infoLine} />
					<img
						src={symptomen[currentSym].detailImg}
						alt={symptomen[currentSym].title}
						className={styles.detailImg}
					/>
					<div className={styles.infoSpecifiek}>
						<h4>{symptomen[currentSym].title}</h4>
						<p
							contentEditable="true"
							dangerouslySetInnerHTML={{ __html: symptomen[currentSym].uitleg }}
						></p>
					</div>
				</section>
			</>
		);
	}
}

export default Preventie;
