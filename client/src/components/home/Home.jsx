import React from "react";
import { Canvas, extend } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants/";
import { inject, observer } from "mobx-react";

import Model from "./../Model";
import Controls from "./../Controls";

extend({ OrbitControls });

const Home = ({ uiStore }) => {
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
					<ul>
						<li>
							<a href="https://www.facebook.com/ThinkPinkEurope/">
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20ZM21.8666 21.0668V31.8668H17.6V21.0668H14V16.8002H17.6V13.7335C17.6 10.1335 19.8666 8.13349 23.0666 8.13349C24.0301 8.13349 24.9361 8.19103 25.5577 8.23052C25.8823 8.25113 26.1294 8.26683 26.2666 8.26683V12.1335H24C22.2666 12.1335 21.8666 12.9335 21.8666 14.1335V16.8002H26L25.4666 21.0668H21.8666Z"
										fill="black"
									/>
								</svg>
							</a>
						</li>
						<li>
							<a href="https://twitter.com/thinkpinkeurope">
								<svg
									width="40"
									height="41"
									viewBox="0 0 40 41"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M20.0008 0.876465C8.95468 0.876465 0 9.83277 0 20.8773C0 31.9234 8.95468 40.8765 20.0008 40.8765C31.0469 40.8765 40 31.9234 40 20.8773C40 9.83277 31.0461 0.876465 20.0008 0.876465ZM30.0755 16.8446C30.0861 17.0607 30.0902 17.2775 30.0902 17.4968C30.0902 24.1578 25.0203 31.8373 15.7497 31.8373C12.9037 31.8373 10.2534 31.0032 8.02307 29.5737C8.4178 29.62 8.81823 29.6435 9.22515 29.6435C11.5871 29.6435 13.7606 28.8378 15.4849 27.4863C13.2797 27.4448 11.4189 25.9869 10.7773 23.9848C11.0843 24.0449 11.4003 24.075 11.7251 24.075C12.1849 24.075 12.63 24.0149 13.0531 23.8987C10.7464 23.4358 9.0091 21.3971 9.0091 18.9572C9.0091 18.9353 9.0091 18.9142 9.00991 18.8922C9.68892 19.2699 10.4662 19.4965 11.293 19.5233C9.9399 18.6177 9.05052 17.0769 9.05052 15.3274C9.05052 14.4039 9.29906 13.5373 9.73278 12.7933C12.219 15.8424 15.9332 17.8493 20.1226 18.0589C20.0365 17.691 19.9919 17.3052 19.9919 16.9104C19.9919 14.1278 22.2482 11.8706 25.0325 11.8706C26.4823 11.8706 27.7916 12.483 28.711 13.4617C29.8595 13.2368 30.9381 12.816 31.912 12.2386C31.5343 13.4163 30.7359 14.4039 29.6946 15.0269C30.7156 14.9051 31.687 14.6338 32.5902 14.2334C31.916 15.2462 31.0608 16.1339 30.0755 16.8446Z"
										fill="black"
									/>
								</svg>
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/thinkpinkeurope/">
								<svg
									width="40"
									height="41"
									viewBox="0 0 40 41"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0)">
										<path
											d="M23.8281 20.3335C23.8281 22.4478 22.1143 24.1616 20 24.1616C17.8857 24.1616 16.1719 22.4478 16.1719 20.3335C16.1719 18.2192 17.8857 16.5054 20 16.5054C22.1143 16.5054 23.8281 18.2192 23.8281 20.3335Z"
											fill="black"
										/>
										<path
											d="M28.9526 13.5606C28.7686 13.062 28.475 12.6106 28.0936 12.2401C27.7231 11.8586 27.272 11.5651 26.7731 11.381C26.3684 11.2239 25.7605 11.0368 24.6408 10.9858C23.4296 10.9306 23.0664 10.9187 20 10.9187C16.9333 10.9187 16.5701 10.9303 15.3592 10.9855C14.2395 11.0368 13.6313 11.2239 13.2269 11.381C12.728 11.5651 12.2766 11.8586 11.9064 12.2401C11.525 12.6106 11.2314 13.0616 11.0471 13.5606C10.8899 13.9653 10.7028 14.5735 10.6519 15.6932C10.5966 16.9041 10.5847 17.2673 10.5847 20.334C10.5847 23.4004 10.5966 23.7635 10.6519 24.9748C10.7028 26.0945 10.8899 26.7024 11.0471 27.1071C11.2314 27.606 11.5247 28.0571 11.9061 28.4275C12.2766 28.809 12.7277 29.1026 13.2266 29.2866C13.6313 29.4441 14.2395 29.6312 15.3592 29.6821C16.5701 29.7374 16.933 29.749 19.9997 29.749C23.0667 29.749 23.4299 29.7374 24.6405 29.6821C25.7602 29.6312 26.3684 29.4441 26.7731 29.2866C27.7747 28.9003 28.5663 28.1086 28.9526 27.1071C29.1098 26.7024 29.2969 26.0945 29.3481 24.9748C29.4034 23.7635 29.415 23.4004 29.415 20.334C29.415 17.2673 29.4034 16.9041 29.3481 15.6932C29.2972 14.5735 29.1101 13.9653 28.9526 13.5606ZM20 26.2309C16.7429 26.2309 14.1025 23.5908 14.1025 20.3337C14.1025 17.0765 16.7429 14.4365 20 14.4365C23.2568 14.4365 25.8972 17.0765 25.8972 20.3337C25.8972 23.5908 23.2568 26.2309 20 26.2309ZM26.1304 15.5815C25.3693 15.5815 24.7522 14.9644 24.7522 14.2033C24.7522 13.4422 25.3693 12.8251 26.1304 12.8251C26.8915 12.8251 27.5085 13.4422 27.5085 14.2033C27.5082 14.9644 26.8915 15.5815 26.1304 15.5815Z"
											fill="black"
										/>
										<path
											d="M20 0.333496C8.95599 0.333496 0 9.28949 0 20.3335C0 31.3775 8.95599 40.3335 20 40.3335C31.044 40.3335 40 31.3775 40 20.3335C40 9.28949 31.044 0.333496 20 0.333496ZM31.4151 25.0683C31.3596 26.2908 31.1652 27.1255 30.8813 27.8561C30.2847 29.3987 29.0652 30.6182 27.5226 31.2148C26.7923 31.4987 25.9573 31.6927 24.7351 31.7486C23.5104 31.8044 23.1192 31.8179 20.0003 31.8179C16.8811 31.8179 16.4902 31.8044 15.2652 31.7486C14.043 31.6927 13.208 31.4987 12.4777 31.2148C11.7111 30.9265 11.0172 30.4745 10.4434 29.8901C9.85931 29.3167 9.40735 28.6224 9.11896 27.8561C8.83514 27.1258 8.64075 26.2908 8.58521 25.0686C8.52875 23.8436 8.51562 23.4524 8.51562 20.3335C8.51562 17.2146 8.52875 16.8234 8.5849 15.5987C8.64044 14.3762 8.83453 13.5415 9.11835 12.8109C9.40674 12.0446 9.85901 11.3503 10.4434 10.7769C11.0168 10.1925 11.7111 9.74054 12.4774 9.45215C13.208 9.16833 14.0427 8.97424 15.2652 8.9184C16.4899 8.86255 16.8811 8.84912 20 8.84912C23.1189 8.84912 23.5101 8.86255 24.7348 8.9187C25.9573 8.97424 26.792 9.16833 27.5226 9.45184C28.2889 9.74023 28.9832 10.1925 29.5569 10.7769C30.141 11.3506 30.5933 12.0446 30.8813 12.8109C31.1655 13.5415 31.3596 14.3762 31.4154 15.5987C31.4713 16.8234 31.4844 17.2146 31.4844 20.3335C31.4844 23.4524 31.4713 23.8436 31.4151 25.0683Z"
											fill="black"
										/>
									</g>
									<defs>
										<clipPath id="clip0">
											<rect y="0.333496" width="40" height="40" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</a>
						</li>
					</ul>
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

export default inject("uiStore")(observer(Home));
