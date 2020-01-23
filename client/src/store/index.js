import BookStore from "./BookStore";
// import AuthorStore from "./AuthorStore";

class RootStore {
	constructor() {
		this.bookStore = new BookStore(this);
		// this.authorStore = new AuthorStore(this);
	}
}

export default new RootStore();
