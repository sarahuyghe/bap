import { decorate, observable, configure, action, runInAction } from "mobx";
import Message from "../models/Message";
import Api from "../api";

configure({ enforceActions: "observed" });

class MessageStore {
	constructor(rootStore) {
		this.rootStore = rootStore;
		this.api = new Api("messages");
		// this.api.getAll().then(d => d.forEach(this._addMessage));
	}

	addMessage = data => {
		console.log(data);
		const newMessage = new Message(data);
		// newMessage.updateFromServer(data);
		console.log(newMessage);
		this.api
			.create(newMessage)
			.then(messageValues => newMessage.updateFromServer(messageValues));
	};
}

decorate(MessageStore, {
	messages: observable,
	addMessage: action,
	deleteTeam: action
});

export default MessageStore;
