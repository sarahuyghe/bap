import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import { inject, observer } from "mobx-react";

import sponsors from "./../../images/sponsors.png";

import styles from "./Footer.module.css";

const Footer = ({ mailStore }) => {
	const mailInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();
		mailStore.addMail({
			mail: mailInput.current.value
		});
	};

	return (
		<footer>
			<section className={styles.footerInfo}>
				<div>
					<h5>Think Pink Europe</h5>
					<address>
						Researchdreef 12,
						<br />
						1070 Brussel
						<br />
						<br />
						info@think-pink.be
						<br />
						btw BE 0810.893.274
						<br />
						IBAN BE57 0015 7587 5235
						<br />
						BIC GEBABEBB
						<br />
					</address>
				</div>
				<div className={styles.menu}>
					<h5>Menu</h5>
					<ul className={styles.menuItems}>
						<li>
							<NavLink to={ROUTES.team}>Inschrijven</NavLink>
						</li>
						<li>
							<NavLink to={ROUTES.support}>Supporteren</NavLink>
						</li>
						<li>
							<Link to="/#preventie">Preventie</Link>
						</li>
					</ul>
				</div>
				<div>
					<h5>Onze sponsers</h5>
					<img src={sponsors} alt="All the sponsors" />
				</div>
			</section>
			<section className={styles.newsLetter}>
				<h5>Nieuwsbrief</h5>
				<p>
					Schrijf je in voor de nieuwsbrief om steeds op de hoogte te blijven
					van onze evenementen
				</p>
				<form onSubmit={handleSubmit} className={styles.mailForm}>
					<label>
						<input
							type="text"
							name="email"
							placeholder="mijnemail@domain.com"
							className={`form_input ${styles.mailinput}`}
							ref={mailInput}
						/>
					</label>
					<input
						type="submit"
						value="Inschrijven"
						className={`mainButton ${styles.submit}`}
					/>
				</form>
			</section>
			<section className={styles.credits}>
				<p>Think Pink Belgium 2020</p>
			</section>
		</footer>
	);
};

export default inject("mailStore")(observer(Footer));
