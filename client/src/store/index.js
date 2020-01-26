import TeamStore from "./TeamStore";
import MessageStore from "./MessageStore";
import UiStore from "./UiStore";

// import AuthorStore from "./AuthorStore";

class RootStore {
	constructor() {
		this.teamStore = new TeamStore(this);
		this.messageStore = new MessageStore(this);
		this.uiStore = new UiStore(this);

		// this.authorStore = new AuthorStore(this);
	}
}

export default new RootStore();
