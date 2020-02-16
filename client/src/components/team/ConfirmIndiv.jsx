import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import confirmIndiv from "./../../images/confirmIndiv.png";
import fbIcon from "./../../images/fbIcon.svg";

import instaIcon from "./../../images/instaIcon.svg";
import twitterIcon from "./../../images/twitterIcon.svg";

import styles from "./Confirm.module.css";

const ConfirmIndiv = () => {
	return (
		<>
			<section className="panel">
				<div className={`extraInfo ${styles.confirmIndiv}`}>
					<h3>3. Proficiat, u bent ingeschreven</h3>
					<p>U zal nog een betalingslink ontvangen via email </p>
				</div>
				<div className="deeltitel">U bent ingeschreven</div>
				<section className={styles.sharingIndi}>
					<div>
						<h4>Delen</h4>
						<p className="uitlegTitle">
							Laat je vrienden en familie weten dat je deelneemt
						</p>
						<div className={styles.sharenIndi}>
							<img
								src={confirmIndiv}
								alt="confirm individueel bottle"
								width="150"
							/>
							<div>
								<h5>Sara</h5>
								<p>
									Ik neem 27 September 2020 deel aan de Race for the Cure in
									Antwerpen. Het grootse evenement in de strijd tegen
									borstkanker.{" "}
								</p>
								<p> meer info: </p>
								<a href="">www.boobottle.be</a>
							</div>
							<div>
								<FacebookShareButton
									url="https://nygardk.github.io/react-share/"
									quote="this is a test"
								>
									<a>
										<img src={fbIcon} alt="facebookIcon" />
									</a>
								</FacebookShareButton>
								<TwitterShareButton
									url="https://nygardk.github.io/react-share/"
									title="this is a test"
								>
									<a>
										<img src={twitterIcon} alt="facebookIcon" />
									</a>
								</TwitterShareButton>
								<FacebookShareButton
									url="https://nygardk.github.io/react-share/"
									quote="this is a test"
								>
									<a>
										<img src={instaIcon} alt="facebookIcon" />
									</a>
								</FacebookShareButton>
							</div>
						</div>
					</div>
				</section>
				<NavLink to={ROUTES.home} className="secondaireButton">
					Startpagina
				</NavLink>
			</section>
		</>
	);
};

export default ConfirmIndiv;
