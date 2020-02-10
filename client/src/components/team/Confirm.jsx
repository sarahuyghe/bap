import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import fbIcon from "./../../images/fbIcon.svg";
import instaIcon from "./../../images/instaIcon.svg";
import twitterIcon from "./../../images/twitterIcon.svg";

import Bottle from "./../bottle/Bottle";

import styles from "./Confirm.module.css";

const Confirm = () => {
	const FB = window.FB;
	const onClick = () => {
		FB.ui(
			{
				method: "send",
				link:
					"http://www.nytimes.com/interactive/2015/04/15/travel/europe-favorite-streets.html"
			},
			function(response) {
				if (response && response.post_id) {
					alert("success");
				} else {
					alert("error");
				}
			}
		);
		console.log("this is a first test");
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
						<div className={styles.sharen}>
							<Bottle
								teamnaam="testing"
								teamqoute="lol"
								cap="cap"
								bottle="bottleRed"
							/>
							<div>
								<h5>Teamnaam</h5>
								<p>Teamgezegde</p>
							</div>
							<p>
								Kom jij ook mee lopen met ons in Antwerpen voor Race for the
								Cure?
							</p>
							<div>
								<p> meer info: </p>
								<a href=""></a>
							</div>
							<div className={styles.shareButtons}>
								<FacebookShareButton
									url="https://nygardk.github.io/react-share/"
									quote="this is a test"
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
									url="https://nygardk.github.io/react-share/"
									title="this is a test"
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
									url="https://nygardk.github.io/react-share/"
									quote="this is a test"
								>
									<a>
										<a>
											<img
												src={instaIcon}
												alt="instaIcon"
												style={{ fill: "black" }}
											/>
										</a>
									</a>
								</FacebookShareButton>
							</div>
						</div>
					</div>
					<div>
						<h4>Delen</h4>
						<p className="uitlegTitle">
							Laat je vrienden en familie weten dat je deelneemt{" "}
						</p>
						<div className={styles.sharen}>
							<Bottle
								teamnaam="testing"
								teamqoute="lol"
								cap="cap"
								bottle="bottleRed"
							/>
							<div className={styles.shareButtons}>
								<button onClick={onClick}>testing</button>
								<FacebookShareButton
									url="https://nygardk.github.io/react-share/"
									quote="this is a test"
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
									url="https://nygardk.github.io/react-share/"
									title="this is a test"
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
									url="https://nygardk.github.io/react-share/"
									quote="this is a test"
								>
									<a>
										<a>
											<img
												src={instaIcon}
												alt="instaIcon"
												style={{ fill: "black" }}
											/>
										</a>
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

export default Confirm;
