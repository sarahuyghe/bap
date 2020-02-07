import React, { useState } from "react";
import withAuthentication from "../auth/WithAuthentication";
import { inject, observer } from "mobx-react";

const Home = ({ teamStore, participantStore }) => {
	const { currentTeam } = teamStore;
	const { currentParticipants, deleteParticipant } = participantStore;

	return (
		<>
			<p>Start of the portal</p>
			{/* {edit ? ( */}
			<section>
				{currentTeam.map(team => (
					<div key={team.id}>
						{/* <p>testing it</p> */}
						<input>{team.teamnaam}</input>
						<input>{team.quote}</input>
						<input>{team.reason}</input>
					</div>
				))}
				{/* <button onClick={() => setEdit(!edit)}>save</button> */}
			</section>
			{/* ) : ( */}
			{/* <section>
				{currentTeam.map(team => (
					<div key={team.id}>
						<p>{team.teamnaam}</p>
						<p>{team.quote}</p>
						<p>{team.reason}</p>
					</div>
				))}
				<button onClick={() => setEdit(!edit)}>Edit</button>
			</section> */}
			{/* )} */}
			<section>
				{currentParticipants.map(person => (
					<div key={person.id}>
						<h1>{person.name}</h1>
						<p>{person.mail}</p>
						<button onClick={() => deleteParticipant(person)}>
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
