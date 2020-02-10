import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import fbIcon from "./../../images/fbIcon.svg";
import instaIcon from "./../../images/instaIcon.svg";
import twitterIcon from "./../../images/twitterIcon.svg";

import styles from "./Confirm.module.css";
const ConfirmIndiv = () => {
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
					<h3>3. Proficiat, u bent ingeschreven</h3>
					<p>U zal nog een betalingslink ontvangen via email </p>
				</div>
				<div className="deeltitel">Uw team is aangemaakt</div>
				<section className={styles.sharing}>
					<div>
						<h4>Delen</h4>
						<p className="uitlegTitle">
							Laat je vrienden en familie weten dat je deelneemt{" "}
						</p>
						<div className={styles.sharen}>
							<img src="" alt="" />
							<h5>Naam</h5>
							<p>
								Ik neem 27 September 2020 deel aan de Race for the Cure in
								Antwerpen. Het grootse evenement in de strijd tegen borstkanker.{" "}
							</p>
							<p> meer info: </p>
							<a href="">www.boobottle.be</a>
							<div>
								<FacebookShareButton
									url="https://nygardk.github.io/react-share/"
									quote="this is a test"
								>
									<a>
										<img
											src={fbIcon}
											alt="facebookIcon"
											style={{ background: black }}
										/>
									</a>
								</FacebookShareButton>
								<TwitterShareButton
									url="https://nygardk.github.io/react-share/"
									title="this is a test"
								>
									<svg
										width="40"
										height="41"
										viewBox="0 0 40 41"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M20.0008 0.876465C8.95468 0.876465 0 9.83277 0 20.8773C0 31.9234 8.95468 40.8765 20.0008 40.8765C31.0469 40.8765 40 31.9234 40 20.8773C40 9.83277 31.0461 0.876465 20.0008 0.876465ZM30.0755 16.8446C30.0861 17.0607 30.0902 17.2775 30.0902 17.4968C30.0902 24.1578 25.0203 31.8373 15.7497 31.8373C12.9037 31.8373 10.2534 31.0032 8.02307 29.5737C8.4178 29.62 8.81823 29.6435 9.22515 29.6435C11.5871 29.6435 13.7606 28.8378 15.4849 27.4863C13.2797 27.4448 11.4189 25.9869 10.7773 23.9848C11.0843 24.0449 11.4003 24.075 11.7251 24.075C12.1849 24.075 12.63 24.0149 13.0531 23.8987C10.7464 23.4358 9.0091 21.3971 9.0091 18.9572C9.0091 18.9353 9.0091 18.9142 9.00991 18.8922C9.68892 19.2699 10.4662 19.4965 11.293 19.5233C9.9399 18.6177 9.05052 17.0769 9.05052 15.3274C9.05052 14.4039 9.29906 13.5373 9.73278 12.7933C12.219 15.8424 15.9332 17.8493 20.1226 18.0589C20.0365 17.691 19.9919 17.3052 19.9919 16.9104C19.9919 14.1278 22.2482 11.8706 25.0325 11.8706C26.4823 11.8706 27.7916 12.483 28.711 13.4617C29.8595 13.2368 30.9381 12.816 31.912 12.2386C31.5343 13.4163 30.7359 14.4039 29.6946 15.0269C30.7156 14.9051 31.687 14.6338 32.5902 14.2334C31.916 15.2462 31.0608 16.1339 30.0755 16.8446Z"
											fill="black"
										/>
									</svg>
								</TwitterShareButton>
								<FacebookShareButton
									url="https://nygardk.github.io/react-share/"
									quote="this is a test"
								>
									<a>
										<svg
											width="40"
											height="40"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20ZM21.8666 21.0668V31.8668H17.6V21.0668H14V16.8002H17.6V13.7335C17.6 10.1335 19.8666 8.13349 23.0666 8.13349C24.0301 8.13349 24.9361 8.19103 25.5577 8.23052C25.8823 8.25113 26.1294 8.26683 26.2666 8.26683V12.1335H24C22.2666 12.1335 21.8666 12.9335 21.8666 14.1335V16.8002H26L25.4666 21.0668H21.8666Z"
												fill="black"
											/>
										</svg>
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
