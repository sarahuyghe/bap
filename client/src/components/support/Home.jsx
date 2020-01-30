import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";

const Home = () => {
	return (
		<>
			<h2>Waarom supporteren</h2>
			<h3>een hart onder de riem</h3>
			<section>
				<p>
					Borstkanker kan je leven volledig omgooien. Het is een tijd van
					onzekerheid, angst, stress en zo veel meer. Daarom is het belangerijk
					als buitenstaander of familie om te tonen aan de persoon die je lief
					hebt dat ze er niet alleen voor staan.
				</p>

				<h4>Message in a bottle</h4>
				<p>
					Message in a bottle Via message in a bottle kun je een team steunen
					naar keuze. Dit doe je door een steunbericht te schrijven die het team
					dan kan lezen op de dag zelf. Tijdens het inschrijven van een team
					maakt de teamcaptain zijn/haar gepersonaiseerde drinkfles. In deze
					drinkfles kunnen ze op het evenement jou steun bericht terug vinden om
					hun succes te wens op de race.
				</p>
				<NavLink to={ROUTES.messageForm}>Message in a bottle</NavLink>
			</section>
			<section>
				<h4>Sponseren</h4>
				<p>
					België is wereldkampioen borstkanker. Toch is het voor onderzoekers
					van bij ons die innovatieve wetenschappelijke projecten opzetten rond
					borstkanker, vaak moeilijk om aan de nodige financiële middelen te
					geraken. Op kleine en middelgrote schaal wordt gezocht naar nieuwe
					methodes op het vlak van screening, behandeling en nazorg. Met andere
					woorden uw bijdrage, groot of klein, is steeds zeer welkom. Op deze
					manier toon je ook aan het team dat je wilt steunen dat je er ook iet
					voor over hebt.
				</p>
				<NavLink to={ROUTES.sponsor}>Sponseren</NavLink>
			</section>
		</>
	);
};

export default Home;
