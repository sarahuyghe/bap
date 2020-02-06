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
	currentTeam = [];

	constructor(rootStore) {
		this.rootStore = rootStore;
		this.api = new Api("participants");
		this.api.getAll().then(d => d.forEach(this._addPerson));
		// this.collectTeamParticipants();
	}

	collectTeamParticipants = () => {
		const data = "5e3412b8f7b07161005a3fd7";
		this.api.findAllTeamId(data).then(d => this.currentTeam.push(d));
		console.log(this.participants);
	};

	_addPerson = values => {
		const person = new Person(values);
		person.updateFromServer(values);
		runInAction(() => this.participants.push(person));
		// console.log(this.participants);
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
	participants: observable,
	currentTeam: observable,

	addTeam: action,
	search: action,
	addPerson: action,
	getAllInfoTeam: action,
	deleteTeam: action,
	collectTeamParticipants: action
});

export default ParticipantStore;
