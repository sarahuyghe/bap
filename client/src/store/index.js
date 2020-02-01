import TeamStore from "./TeamStore";
import MessageStore from "./MessageStore";
import UiStore from "./UiStore";
import MailStore from "./MailStore";

// import AuthorStore from "./AuthorStore";

class RootStore {
	constructor() {
		this.uiStore = new UiStore(this);
		this.teamStore = new TeamStore(this);
		this.messageStore = new MessageStore(this);
		this.mailStore = new MailStore(this);
	}
}

export default new RootStore();
