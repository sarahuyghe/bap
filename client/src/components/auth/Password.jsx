import React from "react";
import { toast } from "react-toastify";

import styles from "./Login.module.css";

const Password = () => {
	const emailInput = React.createRef();

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

		notify();
	};
	console.log("hello");
	return (
		<>
			<div className={styles.back} />
			<div className={styles.login}>
				<h2>Paswoord herstellen</h2>
				<p>Geef het email adres op waarmee uw account gemaakt hebt</p>
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
					<input
						type="submit"
						value="Stuur herstel email"
						className="mainButton aanmelden"
					/>
				</form>
			</div>
		</>
	);
};

export default Password;
