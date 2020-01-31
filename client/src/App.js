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

import MessageForm from "./components/support/MessageForm";
import Sponsor from "./components/support/Sponsor";
import SupportHome from "./components/support/Home";

import HomeTeam from "./components/team/Home";
import ConnectTeam from "./components/team/ConnectTeam";
import Individueel from "./components/team/Individueel";
import TeamForm from "./components/team/TeamForm";
import Confirm from "./components/team/Confirm";

import Navigation from "./components/navigation/Navigation";
import Burger from "./components/navigation/Burger";
import Menu from "./components/navigation/Menu";

import Footer from "./components/footer/Footer";

import "./styles.css";

const App = ({ uiStore }) => {
	const [open, setOpen] = React.useState(false);
	const [checkedItem, setCheckedItem] = React.useState(false);

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

				<Route path={ROUTES.support} component={SupportHome} />
				<Route path={ROUTES.messageForm} component={MessageForm} />
				<Route path={ROUTES.sponsor} component={Sponsor} />

				<Route path={ROUTES.team} component={HomeTeam} />
				<Route path={ROUTES.connectTeam} component={ConnectTeam} />
				<Route path={ROUTES.individueel} component={Individueel} />
				<Route path={ROUTES.teamform} component={TeamForm} />
				<Route path={ROUTES.confirm} component={Confirm} />

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
			<Footer />
		</>
	);
};

export default inject("uiStore")(App);
