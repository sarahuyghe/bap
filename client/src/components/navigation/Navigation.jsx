import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";

const Navigation = () => {
	return (
		<>
			<ul>
				<li>
					<NavLink to={ROUTES.home}>Race for the cure</NavLink>
				</li>
				<li>
					<NavLink to={ROUTES.why}>Waarom de waterfles</NavLink>
				</li>
				<li>
					<NavLink to={ROUTES.symptonen}>Symptonen</NavLink>
				</li>
				<li>
					<NavLink to={ROUTES.register}>Register</NavLink>
				</li>
			</ul>
		</>
	);
};

export default Navigation;
