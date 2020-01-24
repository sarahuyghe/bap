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

	// _addTeam = values => {
	// 	const team = new Team(values);
	// 	team.updateFromServer(values);
	// 	runInAction(() => this.teams.push(team));
	// };

	// updateTeam = team => {
	// 	this.api.update(team).then(teamValues => team.updateFromServer(teamValues));
	// };

	// deleteTeam = team => {
	// 	this.teams.remove(team);
	// 	this.api.delete(team);
	// };
}

decorate(MessageStore, {
	messages: observable,
	addMessage: action,
	deleteTeam: action
});

export default MessageStore;
