import React, { useState } from "react";
import withAuthentication from "../auth/WithAuthentication";
import { inject, observer } from "mobx-react";

import Bottle from "./../bottle/Bottle";
import Info from "./Info";

const Home = ({ teamStore, participantStore }) => {
	const { currentTeam, team, updateTeam } = teamStore;
	const { currentParticipants, deleteParticipant } = participantStore;
	console.log(team);
	return (
		<>
			<p>Start of the portal</p>
			{team.map((currentTeam, index) => (
				<Info team={currentTeam} onUpdate={updateTeam} key={index} />
			))}

			<section>
				{currentParticipants.map(person => (
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
				))}
			</section>
		</>
	);
};

export default inject(
	"teamStore",
	"participantStore"
)(withAuthentication(observer(Home)));
