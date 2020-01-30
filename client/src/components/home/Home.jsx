import React from "react";
import { Canvas, extend } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { inject, observer } from "mobx-react";

import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";

import Model from "./../Model";
import Controls from "./../Controls";
import withAuthentication from "../auth/WithAuthentication";

extend({ OrbitControls });

const Home = ({ uiStore, teamStore }) => {
	const teamNameInput = React.createRef();
	const whyInput = React.createRef();
	const eventInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();
		teamStore.addTeam({
			teamnaam: teamNameInput.current.value,
			reason: whyInput.current.value,
			event: eventInput.current.value,
			teamcaptainId: uiStore.authUser._id
		});

		teamNameInput.current.value = "";
		whyInput.current.value = "";
	};

	return (
		<>
			{/* <Canvas
				style={{
					width: "100vw",
					height: "50vh",
					display: "block",
					background:
						"linear-gradient(360deg, #FFACAC 2.03%, #EDAEAE 21.97%, #FFDEDE 56.74%)",
					display: "absolute"
				}}
			>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Model />
				<Controls /> */}
			{/* <Box position={[-1.2, 0, 0]} />
					<Box position={[1.2, 0, 0]} /> */}
			{/* </Canvas> */}
			<p>First testing of form</p>
			{/* {uiStore.authUser ? ( */}
			<form onSubmit={handleSubmit}>
				<label>
					TeamNaam
					<input type="text" name="teamnaam" ref={teamNameInput} />
				</label>
				<br />
				<label>
					Reason
					<input type="text" name="reason" ref={whyInput} />
				</label>
				<br />

				<label>
					Event
					<select ref={eventInput}>
						<option value="lopen">Lopen</option>
						<option value="wandelen">Wandelen</option>
					</select>
				</label>
				<br />
				<input type="submit" value="bevestigen" />
			</form>
			{/* ) : (<p>Je hebt nog geen teamcaptain aangemaakt</p>
			)} */}
			<button onClick={uiStore.logout}>logout</button>
			<h1>Race for the Cure</h1>
			<h2>Wat is Race for the Cure</h2>
			<p>
				De Race for the Cure is wereldwijd het grootste evenement in de strijd
				tegen borstkanker.
			</p>
			<h3>Doel</h3>
			<p>
				Mensen motiveren om te gaan lopen of wandelen om zo mensen die
				geteisterd zijn met deze ziekte een dag vol positieviteit en hoop te
				geven. Het evenement gaat niet over de snelste te zijn maar en beeld
				geven aan iedereen dat ze er niet alleen voor staan
			</p>
			<section>
				<div>
					<h3>Praktisch</h3>
					<p>
						Het evement gaat elk jaar door op 29 september. Dit op 4
						verschillende locaties: Antwerpen, Namen, Charleroi en Brussel.
						Tijdens de Race for the Cure® verschijnen tienduizenden deelnemers
						tegelijk aan de start om 3 km te wandelen of 6 km te lopen. Samen
						geven we over het hele land zo hetzelfde signaal: geef borstkanker
						geen kans.
					</p>
					<NavLink to={ROUTES.team}>Inschrijven</NavLink>
				</div>
				<div>
					<h3>Geen tijd?</h3>
					<p>
						Als je niet op het evenement kan raken maar je wilt toch steunen.
						Dan kun je op de supporter-pagina meer te weten komen over hoe jij
						ook jou steentje kan bijdragen{" "}
					</p>
					<NavLink to={ROUTES.support}>Supporteren</NavLink>
				</div>
			</section>
		</>
	);
};

export default inject(
	"teamStore",
	"uiStore"
)(withAuthentication(observer(Home)));
