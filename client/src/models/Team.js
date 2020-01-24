import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";
class Team {
	constructor(data, id = uuid.v4()) {
		this.id = id;
		this.teamnaam = data.teamnaam;
		this.name = data.name;
		this.firstname = data.firstname;
		this.reason = data.reason;
		this.mail = data.mail;
	}

	setId = id => (this.id = id);
	setTeamnaam = value => (this.teamnaam = value);
	setName = value => (this.name = value);
	setFirstName = value => (this.firstname = value);
	setReason = value => (this.reason = value);
	setMail = value => (this.mail = value);

	get values() {
		return {
			teamnaam: this.teamnaam,
			name: this.name,
			firstname: this.firstname,
			reason: this.reason,
			mail: this.mail
		};
	}

	// get author() {
	// 	return this.store.authorStore.resolveAuthor(this.authorId);
	// }

	updateFromServer = values => {
		this.setId(values._id);
		this.setTeamnaam(values.teamnaam);
		this.setName(values.name);
		this.setFirstName(values.firstname);
		this.setReason(values.reason);
		this.setMail(values.mail);
	};
}

decorate(Team, {
	id: observable,
	name: observable,
	firstname: observable,
	teamnaam: observable,
	reason: observable,
	mail: observable,

	setId: action,
	setTeamnaam: action,
	setName: action,
	setFirstName: action,
	setReason: action,
	setMail: action,

	values: computed
	// author: computed
});

export default Team;
