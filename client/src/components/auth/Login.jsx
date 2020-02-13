import React from "react";
import { inject } from "mobx-react";
import { withRouter, NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";

import { toast } from "react-toastify";

import styles from "./Login.module.css";

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
		toast.error("🦄 Error!", {
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
			<div className={styles.back} />
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
					<NavLink to={ROUTES.reset} className={styles.forget}>
						Ik ben mijn paswoord vergeten
					</NavLink>
					<input
						type="submit"
						value="Aanmelden"
						className="mainButton aanmelden"
					/>
				</form>
			</div>
		</>
	);
};

export default inject("uiStore")(withRouter(Login));
