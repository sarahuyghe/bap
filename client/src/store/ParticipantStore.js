import {
	decorate,
	observable,
	configure,
	action,
	runInAction,
	observe
} from "mobx";
import Person from "../models/Person";

import Api from "../api";

configure({ enforceActions: "observed" });
class ParticipantStore {
	participants = [];

	constructor(rootStore) {
		this.rootStore = rootStore;
		this.api = new Api("participants");
		this.api.getAll().then(d => d.forEach(this._addPerson));
		this.api.findAllTeamId().then(d => console.log(d));
	}

	_addPerson = values => {
		const person = new Person(values);
		person.updateFromServer(values);
		runInAction(() => this.participants.push(person));
		console.log(this.participants);
	};

	addPerson = data => {
		const newPerson = new Person(this.rootStore);
		newPerson.updateFromServer(data);
		this.api
			.create(newPerson)
			.then(personValues => newPerson.updateFromServer(personValues));
	};

	addPerson = data => {
		const newPerson = new Person(this.rootStore);
		newPerson.updateFromServer(data);
		this.participants.push(newPerson);
		this.api
			.create(newPerson)
			.then(personValues => newPerson.updateFromServer(personValues));
	};
}

decorate(ParticipantStore, {
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

export default ParticipantStore;
