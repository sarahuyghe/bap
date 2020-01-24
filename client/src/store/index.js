import TeamStore from "./TeamStore";
// import AuthorStore from "./AuthorStore";

class RootStore {
	constructor() {
		this.teamStore = new TeamStore(this);
		// this.authorStore = new AuthorStore(this);
	}
}

export default new RootStore();
