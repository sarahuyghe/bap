import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";
class Team {
	constructor(store, id = uuid.v4()) {
		this.id = id;
		this.store = store;
	}

	setId = id => (this.id = id);
	setTitle = value => (this.title = value);
	setAuthorId = value => (this.authorId = value);

	get values() {
		return { title: this.title, authorId: this.authorId };
	}

	get author() {
		return this.store.authorStore.resolveAuthor(this.authorId);
	}

	updateFromServer = values => {
		this.setId(values._id);
		this.setTitle(values.title);
		this.setAuthorId(values.authorId);
	};
}

decorate(Team, {
	id: observable,
	authorId: observable,
	title: observable,
	setId: action,
	setTitle: action,
	setAuthorId: action,
	values: computed,
	author: computed
});

export default Team;
