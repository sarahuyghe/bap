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
	currentParticipants = [];

	constructor(rootStore) {
		this.rootStore = rootStore;
		this.api = new Api("participants");
		// this.api.getAll().then(d => d.forEach(this._addPerson));

		if (this.rootStore.uiStore.authUser) {
			console.log("er is een user ingelogd");
			this.collectTeamParticipants(this.rootStore.uiStore.authUser.teamId);
		}
		observe(this.rootStore.uiStore, "authUser", change => {
			if (change.newValue) {
				console.log("er is een user ingelogd");
				this.collectTeamParticipants(this.rootStore.uiStore.authUser.teamId);
			} else {
				this.currentParticipants = [];
				console.log("er is geen user ingelogd");
			}
		});
	}

	collectTeamParticipants = id => {
		this.api.findAllTeamId(id).then(d => d.forEach(this._addPerson));
		console.log(this.currentParticipants);
	};

	_addPerson = values => {
		const person = new Person(values);
		person.updateFromServer(values);
		runInAction(() => this.currentParticipants.push(person));
	};

	// addPerson = data => {
	// 	console.log(data);
	// 	const newPerson = new Person(this.rootStore);
	// 	newPerson.updateFromServer(data);
	// 	this.api
	// 		.create(newPerson)
	// 		.then(personValues => newPerson.updateFromServer(personValues));
	// 	this.participants.push(newPerson);
	// };

	addPerson = data => {
		console.log(data);
		const newPerson = new Person(this.rootStore);
		newPerson.updateFromServer(data);
		this.participants.push(newPerson);
		this.api
			.create(newPerson)
			.then(personValues => newPerson.updateFromServer(personValues));
	};

	deleteParticipant = person => {
		console.log(person);
		this.currentParticipants.remove(person);
		this.api.delete(person);
	};
}

decorate(ParticipantStore, {
	participants: observable,
	currentParticipants: observable,

	addTeam: action,
	search: action,
	addPerson: action,
	getAllInfoTeam: action,
	deleteParticipant: action,
	collectTeamParticipants: action
});

export default ParticipantStore;
