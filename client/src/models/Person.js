import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";
class Person {
	constructor(store, id = uuid.v4()) {
		this.id = id;
		this.store = store;
	}

	setId = id => (this.id = id);
	setTeamId = value => (this.teamId = value);
	setName = value => (this.name = value);
	setFirstName = value => (this.firstname = value);
	setMail = value => (this.mail = value);

	get values() {
		return {
			teamId: this.teamId,
			name: this.name,
			firstname: this.firstname,
			mail: this.mail
		};
	}

	updateFromServer = values => {
		this.setId(values._id);
		this.setTeamId(values.teamId);
		this.setName(values.name);
		this.setFirstName(values.firstname);
		this.setMail(values.mail);
	};
}

decorate(Person, {
	id: observable,
	teamId: observable,
	name: observable,
	firstname: observable,
	mail: observable,

	setId: action,
	setName: action,
	setFirstName: action,
	setMail: action,
	setTeamId: action,

	values: computed
});

export default Person;
