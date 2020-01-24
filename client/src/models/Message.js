import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Team {
	constructor(data, id = uuid.v4()) {
		this.id = id;
		this.message = data.message;
		this.name = data.name;
	}

	setId = id => (this.id = id);
	setMessage = value => (this.message = value);
	setName = value => (this.name = value);

	get values() {
		return {
			message: this.message,
			name: this.name
		};
	}

	updateFromServer = values => {
		this.setId(values._id);
		this.setMessage(values.message);
		this.setName(values.name);
	};
}

decorate(Team, {
	id: observable,
	name: observable,
	message: observable,

	setId: action,
	setMessage: action,
	setName: action,

	values: computed
});

export default Team;
