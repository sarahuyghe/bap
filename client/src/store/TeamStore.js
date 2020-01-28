import {
	decorate,
	observable,
	configure,
	action,
	runInAction,
	observe
} from "mobx";
import Team from "../models/Team";
import Person from "../models/Person";

import Api from "../api";

configure({ enforceActions: "observed" });
class TeamStore {
	teams = [];

	constructor(rootStore) {
		this.rootStore = rootStore;
		this.api = new Api("teams");
		this.apiPerson = new Api("participants");
		console.log(this.rootStore.uiStore);

		// this.api.getAll().then(d => d.forEach(this._addTeam));
		// if (this.rootStore.uiStore.authUser) {
		// 	this.getAll();
		// }
		// observe(this.rootStore.uiStore, "authUser", change => {
		// 	if (change.newValue) {
		// 		this.getAll();
		// 	} else {
		// 		runInAction(() => (this.teams = []));
		// 	}
		// });
	}

	getAll = () => {
		this.api.getAll().then(d => console.log(d));
	};

	addTeam = data => {
		const newTeam = new Team(this.rootStore);
		newTeam.updateFromServer(data);
		this.teams.push(newTeam);
		this.api
			.create(newTeam)
			.then(teamValues => newTeam.updateFromServer(teamValues));
	};

	addPerson = data => {
		const newPerson = new Person(this.rootStore);
		newPerson.updateFromServer(data);
		this.apiPerson
			.create(newPerson)
			.then(personValues => newPerson.updateFromServer(personValues));
	};

	_addTeam = values => {
		const team = new Team(values);
		team.updateFromServer(values);
		runInAction(() => this.teams.push(team));
	};

	updateTeam = team => {
		this.api.update(team).then(teamValues => team.updateFromServer(teamValues));
	};

	deleteTeam = team => {
		this.teams.remove(team);
		this.api.delete(team);
	};
}

decorate(TeamStore, {
	teams: observable,
	addTeam: action,
	addPerson: action,
	deleteTeam: action
});

export default TeamStore;
