import React, { Component } from "react";
import Custom from "./../Custom";
import styles from "./../TeamForm.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../../constants/";

class Stap1 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className={`panel ${styles.custom}`}>
				<Custom />
				<NavLink to={ROUTES.stap2Team} className="mainButton">
					Volgende
				</NavLink>
			</section>
		);
	}
}

export default Stap1;
