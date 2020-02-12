import React, { useState } from "react";
import withAuthentication from "../auth/WithAuthentication";
import { inject, observer } from "mobx-react";

import Bottle from "./../bottle/Bottle";
import Info from "./Info";
import Participants from "./Participants";

const Home = ({ teamStore, participantStore }) => {
	const { currentTeam, team, updateTeam } = teamStore;
	const {
		currentParticipants,
		deleteParticipant,
		acceptingParticipants,
		updateParticipant
	} = participantStore;
	console.log(acceptingParticipants);
	return (
		<>
			<p>Start of the portal</p>
			{team.map((currentTeam, index) => (
				<Info team={currentTeam} onUpdate={updateTeam} key={index} />
			))}

			{currentParticipants.map((person, index) => (
				<div key={person.id}>
					<h1>{person.name}</h1>
					<p>{person.mail}</p>
					{/* <p>{person.reason}</p> */}
					{/* {team.teamcaptainId.map(person => console.log(person))}
          {team.teamcaptainId.map(person => console.log(person))} */}
					<button
						onClick={() => deleteParticipant(person)}
						// className={styles.buttonDelete}
					>
						Verwijderen persoon
					</button>
				</div>
				// <Participants
				// 	key={index}
				// 	person={person}
				// 	onDelete={deleteParticipant}
				// />
			))}

			{acceptingParticipants.map((person, index) => (
				<div key={person.id}>
					<h1>{person.name}</h1>
					<p>{person.mail}</p>
					{/* <p>{person.reason}</p> */}
					{/* {team.teamcaptainId.map(person => console.log(person))}
                {team.teamcaptainId.map(person => console.log(person))} */}
					<button
						onClick={() => updateParticipant(person)}
						// className={styles.buttonDelete}
					>
						Goedkeuren
					</button>
				</div>
				// <Participants
				// 	key={index}
				// 	person={person}
				// 	onUpdate={updateParticipant}
				// />
			))}
		</>
	);
};

export default inject(
	"teamStore",
	"participantStore"
)(withAuthentication(observer(Home)));
