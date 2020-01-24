import { decorate, observable, configure, action, runInAction } from "mobx";
import Team from "../models/Team";
import Api from "../api";

configure({ enforceActions: "observed" });
class TeamStore {
	teams = [];

	constructor(rootStore) {
		this.rootStore = rootStore;
		this.api = new Api("teams");
		this.api.getAll().then(d => d.forEach(this._addTeam));
	}

	addTeam = data => {
		console.log(data);
		const newTeam = new Team(this.rootStore);
		newTeam.updateFromServer(data);
		this.teams.push(newTeam);
		console.log(this.teams);
		this.api
			.create(newTeam)
			.then(teamValues => newTeam.updateFromServer(teamValues));
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
	deleteTeam: action
});

export default TeamStore;
