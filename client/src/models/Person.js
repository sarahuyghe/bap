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
	setMail = value => (this.email = value);
	setLocation = value => (this.location = value);
	setBuyBottle = value => (this.buyBottle = value);
	setTypeOfEvent = value => (this.typeOfEvent = value);

	get values() {
		return {
			teamId: this.teamId,
			name: this.name,
			firstname: this.firstname,
			email: this.email,
			location: this.location,
			buyBottle: this.buyBottle,
			typeOfEvent: this.typeOfEvent
		};
	}

	updateFromServer = values => {
		this.setId(values._id);
		this.setTeamId(values.teamId);
		this.setName(values.name);
		this.setFirstName(values.firstname);
		this.setMail(values.email);
		this.setLocation(values.location);
		this.setBuyBottle(values.buyBottle);
		this.setTypeOfEvent(values.typeOfEvent);
	};
}

decorate(Person, {
	id: observable,
	teamId: observable,
	name: observable,
	firstname: observable,
	email: observable,
	location: observable,
	buyBottle: observable,
	typeOfEvent: observable,

	setId: action,
	setName: action,
	setFirstName: action,
	setMail: action,
	setTeamId: action,
	setLocation: action,
	setBuyBottle: action,
	setTypeOfEvent: action,

	values: computed
});

export default Person;
