import { decorate, configure, action } from "mobx";
import Mail from "../models/Mail";
import Api from "../api";

configure({ enforceActions: "observed" });

class MailStore {
	constructor(rootStore) {
		this.rootStore = rootStore;
		this.api = new Api("mails");
	}

	addMail = data => {
		console.log(data);
		const newMail = new Mail(data);
		// newMessage.updateFromServer(data);
		console.log(newMail);
		this.api
			.create(newMail)
			.then(mailValues => newMail.updateFromServer(mailValues));
	};
}

decorate(MailStore, {
	addMail: action
});

export default MailStore;
