import React from "react";
import { Canvas, extend } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";

import Model from "./../Model";
import Controls from "./../Controls";

extend({ OrbitControls });

const Home = () => {
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
			<section>
				<header>
					<h1>BOOBottle</h1>
					<p>Herbruikbare fles voor onvervangbare weldoeners</p>
				</header>
			</section>
			<section>
				<div>
					<h2>Wat is BOOBottle</h2>
					<h4>en waarvoor staat het</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
						porttitor ex. Sed vulputate faucibus nulla eget condimentum.
						Vestibulum odio risus, scelerisque ut ligula sit amet, rhoncus
						interdum neque. Pellentesque sed risus id lectus bibendum dapibus.
						Vivamus mattis lorem in vehicula congue.
					</p>
				</div>
			</section>
			<section>
				<h2>Race for the Cure</h2>
				<h4>Wat is Race for the Cure</h4>
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
			</section>
			<section>
				<h2>Preventie</h2>
				<h4>Want voorkomen is beter dan genezen</h4>
				<p>
					Uit studies is gebleken dat beweging 1 van de meest effectieve
					preventie maatregeling is tegen borstkanker. Moest je nog geen reden
					hebben om deel te nemen aan de Race for the Cure heb je er nu alvast
					één. Maar je ook frequent checken en er dus vroegtijdig bij zijn kan
					jou mogelijke interactie met deze ziekte verkorten. Hieronder kan je
					een aantal symptomen terugvinden waarop jijzelf kan controleren
				</p>
			</section>
			<section>
				<h2>Symptomen</h2>
				<h4>dit zijn de symtopen dat je bij jezelf kan checken </h4>
				<img src="" alt="" />

				<h5>Knobbels op de borst huid</h5>
				<p>
					Met een knobbeltje in de borst wordt een verdikking bedoeld die anders
					is dan de bobbeligheid die je normaal voelt in de borst. Een
					knobbeltje kan aanvoelen als een knikker, en voelt harder en stugger
					aan dan de rest van de borst. Een knobbel in de borst kan ook
					aanvoelen als een wat harder of stugger plekje, dat anders voelt dan
					de rest van de borst.
				</p>
			</section>
		</>
	);
};

export default Home;
