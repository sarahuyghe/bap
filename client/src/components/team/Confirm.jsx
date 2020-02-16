import React from "react";
import { NavLink } from "react-router-dom";
import { inject, observer } from "mobx-react";

import { ROUTES } from "./../../constants/";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import fbIcon from "./../../images/fbIcon.svg";
import instaIcon from "./../../images/instaIcon.svg";
import twitterIcon from "./../../images/twitterIcon.svg";

import Bottle from "./../bottle/Bottle";

import styles from "./Confirm.module.css";

const Confirm = ({ teamStore }) => {
	const { currentTeam } = teamStore;
	const FB = window.FB;

	const onClick = () => {
		FB.ui(
			{
				method: "send",
				link: "https://boobottle.herokuapp.com/"
			},
			function(response) {
				if (response && response.post_id) {
					alert("success");
				} else {
					alert("error");
				}
			}
		);
	};

	return (
		<>
			<section className="panel">
				<div className="extraInfo">
					<h3>5. Proficiat</h3>
					<p>
						De betaling van uw team, en de leden ervan, gebeurd na het evenement
					</p>
				</div>
				<div className="deeltitel">Uw team is aangemaakt</div>
				<section className={styles.sharing}>
					<div>
						<h4>Mensen uitnodigen</h4>
						<p className="uitlegTitle">
							Want anders is een team hebben redelijk nutteloos
						</p>
						{currentTeam.map((t, index) => (
							<div key={index} className={styles.sharen}>
								<div className={styles.imgBottle}>
									<Bottle
										teamnaam={t.teamnaam}
										quote={t.quote}
										cap={2}
										bottle={2}
									/>
								</div>
								<div>
									<h5>{t.teamnaam}</h5>
									<p>{t.quote}</p>
								</div>
								<p>
									Kom jij ook mee lopen met ons in Antwerpen voor Race for the
									Cure?
								</p>
								<div>
									<p> meer info: </p>
									<a href="https://boobottle.herokuapp.com/stap1_Connect">
										www.boobottle.be/inschrijven
									</a>
								</div>
								<div className={styles.shareButtons}>
									<FacebookShareButton
										url="https://boobottle.herokuapp.com/"
										quote="Kom meedoen in ons team op race for the cure"
									>
										<a>
											<img
												src={fbIcon}
												alt="facebookIcon"
												style={{ fill: "black" }}
											/>
										</a>
									</FacebookShareButton>
									<TwitterShareButton
										url="https://boobottle.herokuapp.com/"
										title="Kom meedoen in ons team op race for the cure"
									>
										<a>
											<img
												src={twitterIcon}
												alt="twitterIcon"
												style={{ fill: "black" }}
											/>
										</a>
									</TwitterShareButton>
									<FacebookShareButton
										url="https://boobottle.herokuapp.com/"
										quote="Kom meedoen in ons team op race for the cure"
									>
										<a href="">
											<img
												src={instaIcon}
												alt="instaIcon"
												style={{ fill: "black" }}
											/>
										</a>
									</FacebookShareButton>
								</div>
							</div>
						))}
					</div>
					<div>
						<h4>Delen</h4>
						<p className="uitlegTitle">
							Laat je vrienden en familie weten dat je deelneemt{" "}
						</p>
						{currentTeam.map(t => (
							<div className={styles.sharen}>
								<div className={styles.imgBottle}>
									<Bottle
										teamnaam={t.teamnaam}
										quote={t.quote}
										cap={t.cap}
										bottle={t.bottle}
									/>
								</div>
								<div>
									<h5>{t.teamnaam}</h5>
									<p>{t.quote}</p>
								</div>
								<p>
									Wij nemen deel aan Race for the Cure en hier is waarom: <br />
									{t.reason}
								</p>
								<div>
									<p> meer info: </p>
									<a href="https://boobottle.herokuapp.com/stap1_Connect">
										www.boobottle.be/inschrijven
									</a>
								</div>
								<div className={styles.shareButtons}>
									<img src={fbIcon} alt="facebookIcon" onClick={onClick} />
									<TwitterShareButton
										url="https://boobottle.herokuapp.com/"
										title="Kom meedoen in ons team op race for the cure"
									>
										<a>
											<img
												src={twitterIcon}
												alt="twitterIcon"
												style={{ fill: "black" }}
											/>
										</a>
									</TwitterShareButton>
									<FacebookShareButton
										url="https://boobottle.herokuapp.com/"
										title="Kom meedoen in ons team op race for the cure"
									>
										<a href="/">
											<img
												src={instaIcon}
												alt="instaIcon"
												style={{ fill: "black" }}
											/>
										</a>
									</FacebookShareButton>
								</div>
							</div>
						))}
					</div>
				</section>
				<NavLink to={ROUTES.home} className="secondaireButton">
					Startpagina
				</NavLink>
			</section>
		</>
	);
};

export default inject("teamStore")(observer(Confirm));
