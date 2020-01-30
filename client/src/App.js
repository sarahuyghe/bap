import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import { Route, Switch, Link } from "react-router-dom";
import { inject } from "mobx-react";
import { ROUTES } from "./constants/";

import Home from "./components/home/Home";
import Why from "./components/home/Why";
import Overzicht from "./components/home/Overzicht";
import Symptonen from "./components/home/Symptonen";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import Navigation from "./components/navigation/Navigation";
import Burger from "./components/navigation/Burger";
import Menu from "./components/navigation/Menu";

const App = ({ uiStore }) => {
	const [open, setOpen] = React.useState(false);
	const node = React.useRef();
	return (
		<>
			{/* <Navigation /> */}
			<div ref={node}>
				<Burger open={open} setOpen={setOpen} />
				<Menu open={open} setOpen={setOpen} />
			</div>
			<Switch>
				<Route path={ROUTES.home} exact strict component={Home} />
				<Route path={ROUTES.why} component={Why} />
				<Route path={ROUTES.symptonen} component={Symptonen} />
				<Route path={ROUTES.register} component={Register} />
				<Route path={ROUTES.overzicht} component={Overzicht} />
				<Route path={ROUTES.login} component={Login} />
				{/* <Route
					path={ROUTES.home}
					exact
					strict
					render={() => (
						<>
							<p>Welcome to the bookstore</p>
							{uiStore.authUser ? (
								<Link to={ROUTES.why}>Reason</Link>
							) : (
								<ul>
									<li>
										<Link to={ROUTES.home}>Sign in</Link>
									</li>
									<li>
										<Link to={ROUTES.register}>Register</Link>
									</li>
								</ul>
							)}
						</>
					)}
				/> */}
			</Switch>
		</>
	);
};

export default inject("uiStore")(App);
