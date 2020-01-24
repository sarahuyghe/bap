import TeamStore from "./TeamStore";
import MessageStore from "./MessageStore";

// import AuthorStore from "./AuthorStore";

class RootStore {
	constructor() {
		this.teamStore = new TeamStore(this);
		this.messageStore = new MessageStore(this);

		// this.authorStore = new AuthorStore(this);
	}
}

export default new RootStore();
