import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./constants/";

import Home from "./components/home/Home";
import Overzicht from "./components/home/Overzicht";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import Sponsor from "./components/support/Sponsor";
import SupportHome from "./components/support/Home";

import HomeTeam from "./components/team/Home";

import Confirm from "./components/team/Confirm";
import ConfirmIndiv from "./components/team/ConfirmIndiv";

//team Inschrijven
import MasterForm from "./components/team/teamInschrijving/MasterForm";
import MasterFormConnect from "./components/team/connectInschrijving/MasterForm";
import MasterFormIndiv from "./components/team/individueelInschrijving/MasterForm";

import MasterFormMessage from "./components/support/supportForm/MasterForm";

import Burger from "./components/navigation/Burger";
import Menu from "./components/navigation/Menu";

import Portal from "./components/teamcaptain/Home";
import DonateForm from "./components/support/sponsorForm/MasterForm";
import DonateFormAfter from "./components/support/DonateForm";

import confirmDonate from "./components/support/confirmDonate";

import Footer from "./components/footer/Footer";
import Password from "./components/auth/Password";

function App() {
	const [open, setOpen] = React.useState(false);

	return (
		<>
			<div>
				<Burger open={open} setOpen={setOpen} />
				<Menu open={open} setOpen={setOpen} />
			</div>
			<Switch>
				<Route path={ROUTES.home} exact strict component={Home} />
				<Route path={ROUTES.register} component={Register} />
				<Route path={ROUTES.overzicht} component={Overzicht} />
				<Route path={ROUTES.login} component={Login} />

				<Route path={ROUTES.support} component={SupportHome} />
				<Route path={ROUTES.messageForm} component={MasterFormMessage} />
				<Route path={ROUTES.sponsor} component={Sponsor} />

				<Route path={ROUTES.team} component={HomeTeam} />

				<Route path={ROUTES.stap1Team} component={MasterForm} />
				<Route path={ROUTES.stap1Connect} component={MasterFormConnect} />
				<Route path={ROUTES.stap1Indi} component={MasterFormIndiv} />

				<Route path={ROUTES.confirm} component={Confirm} />
				<Route path={ROUTES.confirmIndi} component={ConfirmIndiv} />
				<Route path={ROUTES.confirmDonate} component={confirmDonate} />
				<Route path={ROUTES.donate} component={DonateForm} />
				<Route path={ROUTES.donation} component={DonateFormAfter} />

				<Route path={ROUTES.portal} component={Portal} />
				<Route path={ROUTES.reset} component={Password} />
			</Switch>

			<Footer />
		</>
	);
}

export default App;
