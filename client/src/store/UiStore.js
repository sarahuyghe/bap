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

	setUser = value => (this.authUser = value);

	login = (mail, password) => {
		return this.authService
			.login(mail, password)
			.then(() => {
				this.setUser(getUserFromCookie());
				Promise.resolve();
			})
			.then(() => console.log(this.authUser))
			.catch(() => {
				this.setUser(null);
				Promise.reject();
			});
	};

	register = (name, mail, pwd) => this.authService.register(name, mail, pwd);

	logout = () => {
		this.authService.logout().then(() => this.setUser(null));
	};
}

decorate(UiStore, { authUser: observable, setUser: action });

export default UiStore;