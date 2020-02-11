import {
	decorate,
	observable,
	configure,
	action,
	runInAction,
	observe,
	computed,
	toJS
} from "mobx";
import Team from "../models/Team";
import Person from "../models/Person";

import Api from "../api";

configure({ enforceActions: "observed" });
class TeamStore {
	teams = [];
	_teams = [];
	participants = [];
	searching = [];
	team = [];
	currentTeam = [];
	_search = null;

	constructor(rootStore) {
		this.rootStore = rootStore;
		this.api = new Api("teams");
		this.apiPerson = new Api("participants");
		this.api.getAll().then(d => d.forEach(this._addTeam));
		this.apiPerson.getAll().then(d => d.forEach(this._addPerson));

		if (this.rootStore.uiStore.authUser) {
			console.log("er is een user ingelogd");
			console.log(this.rootStore.uiStore.authUser.teamId);
			this.getTeamById(this.rootStore.uiStore.authUser.teamId);
		}
		observe(this.rootStore.uiStore, "authUser", change => {
			if (change.newValue) {
				console.log("er is een user ingelogd");
				console.log(this.rootStore.uiStore.authUser.teamId);

				this.getTeamById(this.rootStore.uiStore.authUser.teamId);
			} else {
				this.currentTeam = [];
				console.log("er is geen user ingelogd");
			}
		});
	}

	// getTeamById = id => {
	// 	this.currentTeam = [];
	// 	this.api.getAllInfoTeam(id).then(d => {
	// 		runInAction(() => this.currentTeam.push(d));
	// 	});
	// };

	getTeamById = id => {
		console.log(id);
		this.team = [];
		const currentTeam = this.teams.filter(check => check.id === id);
		// this.teams.forEach(element => {
		// 	console.log(element);
		// });
		console.log(currentTeam);
		this.team = currentTeam;
		console.log(this.team);
		// console.log(toJS(this.teams));
		// this.teams = toJS(this.teams);

		// const currentTeam = this.teams.filter(check => console.log(check.id));
		// console.log(currentTeam);
		// this.api.getAllInfoTeam(id).then(
		// 	d => runInAction(() => this.team.push(d))
		// 	// runInAction(() => this.team.push(d))
		// );
		// console.log(this.teams);
	};

	addTeam = data => {
		console.log(data);
		this.team = [];
		const newTeam = new Team(this.rootStore);
		newTeam.updateFromServer(data);
		this.api
			.create(newTeam)
			.then(teamValues => newTeam.updateFromServer(teamValues));
		this.teams.push(newTeam);
		this.team.push(newTeam);
		this.searching.push(newTeam);
		console.log(this.team);
	};

	search = data => {
		this._search = data;
		// const searchTeam = this.teams.filter(check =>
		// 	check.teamnaam.toLowerCase().includes(data)
		// );
		// const searchParticipant = this.participants.filter(part =>
		// 	part.name.toLowerCase().includes(data)
		// );

		// this.searching.push(searchParticipant);
		// this.searching.push(searchTeam);
	};

	_addTeam = values => {
		// console.log(values);
		const team = new Team(this.rootStore);
		team.updateFromServer(values);
		runInAction(() => {
			this.teams.push(team);
			// this.searching.push(team);
		});
		console.log(this.teams);
	};

	_addPerson = values => {
		const person = new Person(values);
		person.updateFromServer(values);
		runInAction(() => this.participants.push(person));
		// console.log(this.participants);
	};

	updateTeam = team => {
		console.log(team);
		this.api.update(team).then(teamValues => team.updateFromServer(teamValues));
	};

	deleteTeam = team => {
		this.teams.remove(team);
		this.api.delete(team);
	};

	get searchField() {
		return this._search
			? this.searching.filter(check =>
					check.teamnaam.toLowerCase().includes(this._search)
			  )
			: this.teams;
	}
}

decorate(TeamStore, {
	teams: observable,
	participants: observable,
	searching: observable,
	currentTeam: observable,
	team: observable,
	test: observable,
	_teams: observable,

	addTeam: action,
	_addTeam: action,
	search: action,
	addPerson: action,
	getAllInfoTeam: action,
	getTeamById: action,
	updateTeam: action,

	searchField: computed
	// deleteTeam: action
});

export default TeamStore;
