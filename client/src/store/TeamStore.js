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
	participants = [];
	searching = [];
	currentTeam = [];

	constructor(rootStore) {
		this.rootStore = rootStore;
		this.api = new Api("teams");
		this.apiPerson = new Api("participants");
		this.api.getAll().then(d => d.forEach(this._addTeam));
		this.apiPerson.getAll().then(d => d.forEach(this._addPerson));

		if (this.rootStore.uiStore.authUser) {
			console.log("er is een user ingelogd");
			this.getAllInfoTeam(this.rootStore.uiStore.authUser._id);
		}
		observe(this.rootStore.uiStore, "authUser", change => {
			if (change.newValue) {
				console.log("er is een user ingelogd");
				this.getAllInfoTeam(this.rootStore.uiStore.authUser._id);
			} else {
				this.currentTeam = [];
				console.log("er is geen user ingelogd");
			}
		});
	}

	getAllInfoTeam = id => {
		this.currentTeam = [];
		this.api.getAllInfoTeam(id).then(d => {
			runInAction(() => this.currentTeam.push(d));
		});
		console.log(this.currentTeam);
		console.log(this.currentTeam.teamnaam);
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
		console.log(newPerson);
		this.apiPerson
			.create(newPerson)
			.then(personValues => newPerson.updateFromServer(personValues));
	};

	search = data => {
		let matchesFilter = new RegExp(data, "i");
		let matchesFilterPerson = new RegExp(data, "i");
		this.searching = [];
		const searchTeam = this.teams.filter(check =>
			matchesFilter.test(check.teamnaam)
		);
		const searchParticipant = this.participants.filter(part =>
			// matchesFilter.test(check.name);
			matchesFilterPerson.test(part.name)
		);
		this.searching.push(searchParticipant);
		this.searching.push(searchTeam);
		console.log(this.searching);
	};

	_addTeam = values => {
		const team = new Team(values);
		team.updateFromServer(values);
		runInAction(() => this.teams.push(team));
	};

	_addPerson = values => {
		const person = new Person(values);
		person.updateFromServer(values);
		runInAction(() => this.participants.push(person));
		console.log(this.participants);
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
	participants: observable,
	searching: observable,
	currentTeam: observable,

	addTeam: action,
	search: action,
	addPerson: action,
	getAllInfoTeam: action,
	deleteTeam: action
});

export default TeamStore;
