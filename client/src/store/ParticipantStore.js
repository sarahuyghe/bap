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

		if (this.rootStore.uiStore.authUser) {
			console.log("er is een user ingelogd");
			this.collectTeamParticipants(this.rootStore.uiStore.authUser.teamId);
		}
		observe(this.rootStore.uiStore, "authUser", change => {
			if (change.newValue) {
				console.log("er is een user ingelogd");
				this.collectTeamParticipants(this.rootStore.uiStore.authUser.teamId);
			} else {
				this.currenParticipants = [];
				console.log("er is geen user ingelogd");
			}
		});
	}

	collectTeamParticipants = id => {
		// const data = "5e3412b8f7b07161005a3fd7";
		this.api.findAllTeamId(id).then(d => console.log(d));
		console.log(this.currenParticipants);
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
