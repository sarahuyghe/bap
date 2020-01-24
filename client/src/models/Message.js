import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Message {
	constructor(data, id = uuid.v4()) {
		this.id = id;
		this.teamId = data.teamId;

		this.message = data.message;
		this.name = data.name;
		console.log(data.teamId);
	}

	setId = id => (this.id = id);
	setMessage = value => (this.message = value);
	setName = value => (this.name = value);
	setTeamId = value => (this.teamId = value);

	get values() {
		return {
			message: this.message,
			name: this.name,
			teamId: this.teamId
		};
	}

	updateFromServer = values => {
		this.setId(values._id);
		this.setMessage(values.message);
		this.setName(values.name);
		this.setTeamId(values.teamId);
	};
}

decorate(Message, {
	id: observable,
	name: observable,
	message: observable,
	teamId: observable,

	setId: action,
	setMessage: action,
	setName: action,
	setTeamId: action,

	values: computed
});

export default Message;
