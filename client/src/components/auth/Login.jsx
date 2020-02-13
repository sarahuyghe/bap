import React from "react";
import { inject } from "mobx-react";
import { withRouter, NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";

import { toast } from "react-toastify";

import styles from "./Login.module.css";
import arrowWhite from "./../../images/arrowWhite.svg";

const Login = ({ uiStore, history }) => {
	const emailInput = React.createRef();
	const pwdInput = React.createRef();

	const notify = () => {
		toast.info("🦄 Wow so easy!", {
			position: "top-center",
			autoClose: 4000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true
		});
	};
	const handleSubmit = e => {
		e.preventDefault();
		uiStore.login(emailInput.current.value, pwdInput.current.value).then(() => {
			history.push(ROUTES.portal);
		});
		notify();
	};

	return (
		<>
			<p className={styles.back}>
				<img src={arrowWhite} alt="arrow back" />
				<NavLink to={ROUTES.home}>Terug</NavLink>
			</p>
			<div className={styles.login}>
				<h2>Aanmelden</h2>
				<p>Zodat u aan de team instellingen kan zien</p>
				<form onSubmit={handleSubmit}>
					<label htmlFor="email">
						Mijn Email adres is: <br />
						<input
							type="email"
							name="email"
							id="email="
							placeholder="mijnemail@domain.be"
							ref={emailInput}
						/>
					</label>
					<label htmlFor="username">
						Mijn paswoord is: <br />
						<input
							type="password"
							name="password"
							id="password"
							placeholder="paswoord"
							ref={pwdInput}
						/>
					</label>
					<a href="">Ik ben mijn paswoord vergeten</a>
					<input type="submit" value="Aanmelden" className="mainButton" />
				</form>
			</div>
		</>
	);
};

export default inject("uiStore")(withRouter(Login));
