import { decorate, observable, configure, action, runInAction } from "mobx";
import Book from "../models/Book";
import Api from "../api";

configure({ enforceActions: "observed" });
class BookStore {
	books = [];

	constructor(rootStore) {
		this.rootStore = rootStore;
		this.api = new Api("books");
		this.api.getAll().then(d => d.forEach(this._addBook));
	}

	addBook = data => {
		const newBook = new Book(this.rootStore);
		newBook.updateFromServer(data);
		this.books.push(newBook);
		this.api
			.create(newBook)
			.then(bookValues => newBook.updateFromServer(bookValues));
	};

	_addBook = values => {
		const book = new Book(this.rootStore);
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

decorate(BookStore, {
	books: observable,
	addBook: action,
	deleteBook: action
});

export default BookStore;
