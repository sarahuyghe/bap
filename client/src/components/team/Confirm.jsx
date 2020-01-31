import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";

const Confirm = () => {
	return (
		<>
			<h2>Proficiat</h2>
			<h4>Uw team is gemaakt</h4>
			<section>
				<h3>Mensen uitnodigen</h3>
				<p>Want anders is een team hebben redelijk nutteloos</p>
				<div></div>
			</section>
			<section>
				<h3>Delen</h3>
				<p>Laat je vrienden en familie weten dat je deelneemt</p>
				<div></div>
			</section>
			<NavLink to={ROUTES.home}>Startpagina</NavLink>
		</>
	);
};

export default Confirm;
