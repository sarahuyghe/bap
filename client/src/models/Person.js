// import uuid from "uuid";
// import { decorate, observable, action, computed } from "mobx";
// class Person {
// 	constructor(data, id = uuid.v4()) {
// 		this.id = id;
// 		console.log(data);
// 		this.teamId = data.teamId;
// 		this.name = data.name;
// 		// this.firstname = data.firstname;
// 		this.mail = data.mail;
// 		// this.event = data.event;
// 		// this.location = data.location;
// 	}

// 	setId = id => (this.id = id);
// 	setTeamId = value => (this.teamId = value);
// 	setName = value => (this.name = value);
// 	// setFirstName = value => (this.firstname = value);
// 	setMail = value => (this.mail = value);
// 	// setEvent = value => (this.event = value);
// 	// setLocation = value => (this.location = value);

// 	get values() {
// 		return {
// 			teamId: this.teamId,
// 			name: this.name,
// 			// firstname: this.firstname,
// 			mail: this.mail
// 			// event: this.event,
// 			// location: this.location
// 		};
// 	}

// 	updateFromServer = values => {
// 		this.setId(values._id);
// 		this.setTeamId(values.teamId);
// 		this.setName(values.name);
// 		// this.setFirstName(values.firstname);
// 		this.setMail(values.mail);
// 		// this.setEvent(values.event);
// 		// this.setLocation(values.location);
// 	};
// }

// decorate(Person, {
// 	id: observable,
// 	teamId: observable,
// 	name: observable,
// 	firstname: observable,
// 	mail: observable,
// 	event: observable,
// 	location: observable,

// 	setId: action,
// 	setName: action,
// 	setFirstName: action,
// 	setMail: action,
// 	setTeamId: action,
// 	setEvent: action,
// 	setLocation: action,

// 	values: computed
// });

// export default Person;

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
		console.log(values);
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
