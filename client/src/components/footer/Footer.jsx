import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { inject, observer } from "mobx-react";

const Footer = ({ mailStore }) => {
	const mailInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();
		mailStore.addMail({
			mail: mailInput.current.value
		});
	};

	return (
		<>
			<section>
				<div>
					<h5>Menu</h5>
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
					</ul>
				</div>
				<div>
					<h5>Think Pink Europe</h5>
					<address>
						Researchdreef 12,
						<br />
						1070 Brussel
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
				<div>
					<h5>Onze sponsers</h5>
				</div>
			</section>
			<section>
				<h5>Nieuwsbrief</h5>
				<p>
					Schrijf je in voor de nieuwsbrief om steeds op de hoogte te blijven
					van onze evenementen
				</p>
				<form onSubmit={handleSubmit}>
					<label>
						<input
							type="text"
							name="email"
							placeholder="mijnemail@domain.com"
							ref={mailInput}
						/>
					</label>
					<input type="submit" value="bevestigen" />
				</form>
			</section>
		</>
	);
};

export default inject("mailStore")(observer(Footer));
