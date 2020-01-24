import { decorate, observable, configure, action, runInAction } from "mobx";
import Team from "../models/Team";
import Api from "../api";

configure({ enforceActions: "observed" });
class TeamStore {
	books = [];

	constructor(rootStore) {
		this.rootStore = rootStore;
		this.api = new Api("teams");
		this.api.getAll().then(d => d.forEach(this._addBook));
	}

	addBook = data => {
		const newBook = new Team(this.rootStore);
		newBook.updateFromServer(data);
		this.books.push(newBook);
		this.api
			.create(newBook)
			.then(bookValues => newBook.updateFromServer(bookValues));
	};

	_addBook = values => {
		const book = new Team(this.rootStore);
		book.updateFromServer(values);
		runInAction(() => this.books.push(book));
	};

	updateBook = book => {
		this.api.update(book).then(bookValues => book.updateFromServer(bookValues));
	};

	deleteBook = book => {
		this.books.remove(book);
		this.api.delete(book);
	};
}

decorate(TeamStore, {
	books: observable,
	addBook: action,
	deleteBook: action
});

export default TeamStore;
