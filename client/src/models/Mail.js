import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Mail {
	constructor(data, id = uuid.v4()) {
		this.id = id;
		this.mail = data.mail;
	}

	setId = id => (this.id = id);
	setMail = value => (this.mail = value);

	get values() {
		return {
			mail: this.mail
		};
	}

	updateFromServer = values => {
		this.setId(values._id);
		this.setMail(values.mail);
	};
}

decorate(Mail, {
	id: observable,
	mail: observable,

	setId: action,
	setMail: action,

	values: computed
});

export default Mail;
