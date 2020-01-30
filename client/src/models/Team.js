import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";
class Team {
	constructor(store, id = uuid.v4()) {
		this.id = id;
		this.teamnaam = store.teamnaam;
		this.reason = store.reason;
		this.kind = store.kind;
		this.quote = store.quote;
		this.teamcaptainId = store.teamcaptainId;
	}

	setId = id => (this.id = id);
	setTeamnaam = value => (this.teamnaam = value);
	setReason = value => (this.reason = value);
	setKind = value => (this.kind = value);
	setQuote = value => (this.quote = value);
	setTeamcaptainId = value => (this.teamcaptainId = value);

	get values() {
		return {
			teamnaam: this.teamnaam,
			reason: this.reason,
			kind: this.kind,
			quote: this.quote,
			teamcaptainId: this.teamcaptainId
		};
	}

	// get author() {
	// 	return this.store.authorStore.resolveAuthor(this.authorId);
	// }

	updateFromServer = values => {
		this.setId(values._id);
		this.setTeamnaam(values.teamnaam);
		this.setReason(values.reason);
		this.setKind(values.kind);
		this.setQuote(values.quote);
		this.setTeamcaptainId(values.teamcaptainId);
	};
}

decorate(Team, {
	id: observable,
	teamnaam: observable,
	reason: observable,
	kind: observable,
	quote: observable,
	teamcaptainId: observable,

	setId: action,
	setTeamnaam: action,
	setReason: action,
	setKind: action,
	setQuote: action,
	setTeamcaptainId: action,

	values: computed
});

export default Team;
