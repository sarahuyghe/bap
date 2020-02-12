import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { inject, observer } from "mobx-react";

import styles from "./Menu.module.css";

import styled from "styled-components";

const StyledMenu = styled.nav`
	.test {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: space-between;
		background: #000;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		height: 100vh;
		text-align: center;
		padding: 2rem;
		position: fixed;
		top: 0;
		transition: transform 0.3s ease-in-out;
		width: 100%;
		z-index: 1;
	}
`;

const Menu = ({ open, setOpen, uiStore }) => {
	console.log(open);
	return (
		<StyledMenu open={open}>
			<div className={`test ${open ? null : styles.hide}`}>
				{uiStore.authUser ? (
					<>
						<button
							onClick={() => {
								setOpen(!open);
								uiStore.logout();
							}}
						>
							logout
						</button>
						<NavLink
							to={ROUTES.overzicht}
							className={styles.login}
							onClick={() => setOpen(!open)}
						>
							Overzicht
						</NavLink>
					</>
				) : (
					<NavLink
						to={ROUTES.login}
						className={styles.login}
						onClick={() => setOpen(!open)}
					>
						Aanmelden
					</NavLink>
				)}
				<section className={styles.menuItems}>
					<h1>Menu</h1>
					<ul className={styles.menu}>
						<li>
							<NavLink
								to={ROUTES.home}
								className={styles.links}
								onClick={() => setOpen(!open)}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to={ROUTES.team}
								className={styles.links}
								onClick={() => setOpen(!open)}
							>
								Inschrijven
							</NavLink>
						</li>
						<li>
							<NavLink
								to={ROUTES.support}
								className={styles.links}
								onClick={() => setOpen(!open)}
							>
								Supporteren
							</NavLink>
						</li>
						<li>
							<NavLink
								to={ROUTES.symptonen}
								className={styles.links}
								onClick={() => setOpen(!open)}
							>
								Preventie
							</NavLink>
						</li>
					</ul>
				</section>
			</div>
		</StyledMenu>
	);
};

export default inject("uiStore")(observer(Menu));
