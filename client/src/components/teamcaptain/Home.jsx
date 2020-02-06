import React, { useState } from "react";
import withAuthentication from "../auth/WithAuthentication";
import { inject, observer } from "mobx-react";

const Home = ({ teamStore }) => {
	const { currentTeam } = teamStore;
	console.log(currentTeam);
	return (
		<>
			<p>Start of the portal</p>
			{currentTeam.map(team => (
				<div key={team.id}>
					<h1>{team.teamnaam}</h1>
					<p>{team.quote}</p>
					<p>{team.reason}</p>
					{/* {team.teamcaptainId.map(person => console.log(person))}
					{team.teamcaptainId.map(person => console.log(person))} */}
				</div>
			))}
		</>
	);
};

export default inject("teamStore")(withAuthentication(observer(Home)));
