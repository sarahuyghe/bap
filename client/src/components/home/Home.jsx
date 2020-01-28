import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, extend } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { inject, observer } from "mobx-react";

import Model from "./../Model";
import Controls from "./../Controls";

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
			<Canvas
				style={{
					width: "100vw",
					height: "100vh",
					display: "block",
					background:
						"linear-gradient(360deg, #FFACAC 2.03%, #EDAEAE 21.97%, #FFDEDE 56.74%)"
				}}
			>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Model />
				<Controls />
				{/* <Box position={[-1.2, 0, 0]} />
					<Box position={[1.2, 0, 0]} /> */}
			</Canvas>
			<p>First testing of form</p>
			{uiStore.authUser ? (
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
			) : (
				<p>Je hebt nog geen teamcaptain aangemaakt</p>
			)}
			<button onClick={uiStore.logout}>logout</button>
		</>
	);
};

export default inject("teamStore", "uiStore")(observer(Home));
