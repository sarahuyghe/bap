import {
	decorate,
	observable,
	configure,
	action,
	runInAction,
	observe,
	toJS
} from "mobx";
import Team from "../models/Team";
import Person from "../models/Person";

import Api from "../api";

configure({ enforceActions: "observed" });
class TeamStore {
	teams = [];
	participants = [];
	searching = [];
	team = [];
	currentTeam = [];

	constructor(rootStore) {
		this.rootStore = rootStore;
		this.api = new Api("teams");
		this.apiPerson = new Api("participants");
		this.api.getAll().then(d => d.forEach(this._addTeam));
		this.apiPerson.getAll().then(d => d.forEach(this._addPerson));

		if (this.rootStore.uiStore.authUser) {
			console.log("er is een user ingelogd");
			this.getAllInfoTeam(this.rootStore.uiStore.authUser.teamId);
		}
		observe(this.rootStore.uiStore, "authUser", change => {
			if (change.newValue) {
				console.log("er is een user ingelogd");
				this.getAllInfoTeam(this.rootStore.uiStore.authUser.teamId);
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
	};

	addTeam = data => {
		this.team = [];
		const newTeam = new Team(this.rootStore);
		newTeam.updateFromServer(data);
		this.api
			.create(newTeam)
			.then(teamValues => newTeam.updateFromServer(teamValues));
		this.teams.push(newTeam);
		console.log(newTeam);
		this.team.push(newTeam);
		console.log(this.team);
	};

	search = data => {
		this.searching.clear();
		const searchTeam = this.teams.filter(check =>
			check.teamnaam.toLowerCase().includes(data)
		);
		const searchParticipant = this.participants.filter(part =>
			part.name.toLowerCase().includes(data)
		);
		this.searching.push(searchParticipant);
		this.searching.push(searchTeam);
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
		// console.log(this.participants);
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
	team: observable,

	addTeam: action,
	search: action,
	addPerson: action,
	getAllInfoTeam: action
	// deleteTeam: action
});

export default TeamStore;
