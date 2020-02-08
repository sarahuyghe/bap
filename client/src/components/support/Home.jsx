import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";
import Social from "./../social/Social";

const Home = () => {
	return (
		<>
			<section className="{styles.header}">
				<div>
					<h2>Supporteren</h2>
					<p>Selecteer een supporters-methode</p>
				</div>
				<div>
					<div
						className="{styles.animation}"
						// onClick={() => {
						// 	console.log(active);
						// 	this.setState({ active: !active });
						// }}
					>
						<h3>Message in a BOOBottle</h3>
						<img src="" alt="" />
					</div>
				</div>
				<div>
					<div className="{styles.animation}">
						<h3>Een team sponseren</h3>
						<img src="" alt="" />
					</div>
				</div>

				<Social />
				<p>Scroll om een steunbericht aan te maken</p>
			</section>
			{/* {active ? <TeamForm /> : null} */}
		</>
	);
};

export default Home;
