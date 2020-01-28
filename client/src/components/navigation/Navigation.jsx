import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { inject, observer } from "mobx-react";

const Navigation = ({ uiStore }) => {
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
				{uiStore.authUser ? (
					<li>
						<NavLink to={ROUTES.overzicht}>Overzicht team</NavLink>
					</li>
				) : null}
			</ul>
		</>
	);
};

export default inject("uiStore")(observer(Navigation));
