import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";

// import { StyledMenu } from "./Menu.styled.jsx";

import styled from "styled-components";

const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
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

	a {
		font-size: 2rem;
		text-transform: uppercase;
		padding: 2rem 0;
		font-weight: bold;
		letter-spacing: 0.5rem;
		color: rgba(255, 255, 255, 0.53);
		text-decoration: none;
		transition: color 0.3s linear;

		@media (max-width: 576px) {
			font-size: 1.5rem;
			text-align: center;
		}

		&:hover {
			color: #343078;
		}
	}
`;

const Menu = ({ open }) => {
	return (
		<StyledMenu open={open}>
			<h1>Menu</h1>
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
				<li>
					<NavLink to={ROUTES.login}>Login</NavLink>
				</li>
			</ul>
			{/* <a href="/">
				<span role="img" aria-label="about us">
					💁🏻‍♂️
				</span>
				About us
			</a>
			<a href="/">
				<span role="img" aria-label="price">
					💸
				</span>
				Pricing
			</a>
			<a href="/">
				<span role="img" aria-label="contact">
					📩
				</span>
				Contact
			</a> */}
		</StyledMenu>
	);
};

export default Menu;
