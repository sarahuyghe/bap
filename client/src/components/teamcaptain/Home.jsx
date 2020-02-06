import React, { useState } from "react";
import withAuthentication from "../auth/WithAuthentication";
import { inject, observer } from "mobx-react";

const Home = ({ teamStore, participantStore }) => {
	const { currentTeam } = teamStore;
	const { currentParticipants, deleteParticipant } = participantStore;

	return (
		<>
			<p>Start of the portal</p>
			{currentTeam.map(team => (
				<div key={team.id}>
					<h1>{team.teamnaam}</h1>
					<p>{team.quote}</p>
					<p>{team.reason}</p>
				</div>
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
