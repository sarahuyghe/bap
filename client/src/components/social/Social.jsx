import React, { Component } from "react";
import fbIcon from "./../../images/fbIcon.svg";
import instaIcon from "./../../images/instaIcon.svg";
import twitterIcon from "./../../images/twitterIcon.svg";

import styles from "./Social.module.css";

class Social extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className={styles.social}>
				<li className={styles.socialItem}>
					<a href="https://www.facebook.com/ThinkPinkEurope/">
						<img src={fbIcon} alt="facebookIcon" />
					</a>
				</li>
				<li className={styles.socialItem}>
					<a href="https://twitter.com/thinkpinkeurope">
						<img src={twitterIcon} alt="twitterIcon" />
					</a>
				</li>
				<li className={styles.socialItem}>
					<a href="https://www.instagram.com/thinkpinkeurope/">
						<img src={instaIcon} alt="instagramIcon" />
					</a>
				</li>
			</ul>
		);
	}
}

export default Social;
