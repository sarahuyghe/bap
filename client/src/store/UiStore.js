import { decorate, observable, action } from "mobx";
import Auth from "../api/auth";
import { getUserFromCookie } from "../utils/index.js";

class UiStore {
	authUser = null;

	constructor(rootStore) {
		this.rootStore = rootStore;
		this.authService = new Auth();
		this.setUser(getUserFromCookie());
	}

	setUser = value => {
		this.authUser = value;
	};

	login = (username, password) => {
		return this.authService
			.login(username, password)
			.then(() => {
				this.setUser(getUserFromCookie());
				Promise.resolve();
			})
			.catch(() => {
				this.setUser(null);
				Promise.reject();
			});
	};

	register = (name, firstname, email, pwd, teamId) =>
		// console.log(teamId.value);
		this.authService
			.register(name, firstname, email, pwd, teamId)
			.then(() => {
				this.setUser(getUserFromCookie());
				Promise.resolve();
			})
			.then(() => this.login(email, pwd))
			.catch(() => {
				this.setUser(null);
				Promise.reject();
			});
	logout = () => {
		this.authService.logout().then(() => this.setUser(null));
	};
}

decorate(UiStore, { authUser: observable, setUser: action });

export default UiStore;
