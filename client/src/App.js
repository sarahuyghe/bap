import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import { inject } from "mobx-react";
import { ROUTES } from "./constants/";

import Home from "./components/home/Home";
import Why from "./components/home/Why";
import Overzicht from "./components/home/Overzicht";
import Symptonen from "./components/home/Symptonen";
import RegisterForm from "./components/auth/RegisterForm";

import Navigation from "./components/navigation/Navigation";

function App() {
	return (
		<>
			<Navigation />
			<Switch>
				<Route path={ROUTES.home} exact strict component={Home} />
				<Route path={ROUTES.why} component={Why} />
				<Route path={ROUTES.symptonen} component={Symptonen} />
				<Route path={ROUTES.register} component={RegisterForm} />
				<Route path={ROUTES.overzicht} component={Overzicht} />
			</Switch>
		</>
	);
}

export default App;
