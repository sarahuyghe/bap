import React from "react";
import withAuthentication from "../auth/WithAuthentication";

const Home = () => {
	return <p>Start of the portal</p>;
};

export default withAuthentication(Home);
