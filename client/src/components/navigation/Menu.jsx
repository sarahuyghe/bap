import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { inject, observer } from "mobx-react";

import styles from "./Menu.module.css";

import styled from "styled-components";

const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: space-between;
	background: #4d5467;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
	height: 100vh;
	text-align: center;
	padding: 2rem;
	position: absolute;
	top: 0;
	right: 0;
	transition: transform 0.3s ease-in-out;
	width: 100%;
`;

const Menu = ({ open, uiStore }) => {
	return (
		<StyledMenu open={open}>
			{uiStore.authUser ? (
				<NavLink to={ROUTES.login} className={styles.links}>
					Aanmelden
				</NavLink>
			) : (
				<button onClick={uiStore.logout}>logout</button>
			)}
			<h1>Menu</h1>
			<ul>
				<li>
					<NavLink to={ROUTES.home} className={styles.links}>
						Race for the cure
					</NavLink>
				</li>
				<li>
					<NavLink to={ROUTES.why} className={styles.links}>
						Waarom de waterfles
					</NavLink>
				</li>
				<li>
					<NavLink to={ROUTES.symptonen} className={styles.links}>
						Symptonen
					</NavLink>
				</li>
			</ul>
		</StyledMenu>
	);
};

export default inject("uiStore")(observer(Menu));
