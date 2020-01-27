import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";
class Team {
	constructor(store, id = uuid.v4()) {
		this.id = id;
		this.teamnaam = store.teamnaam;

		this.reason = store.reason;
		this.teamcaptainId = store.teamcaptainId;
	}

	setId = id => (this.id = id);
	setTeamnaam = value => (this.teamnaam = value);

	setReason = value => (this.reason = value);
	setTeamcaptainId = value => (this.teamcaptainId = value);

	get values() {
		return {
			teamnaam: this.teamnaam,
			reason: this.reason,
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
		this.setTeamcaptainId(values.teamcaptainId);
	};
}

decorate(Team, {
	id: observable,
	teamnaam: observable,
	reason: observable,
	teamcaptainId: observable,

	setId: action,
	setTeamnaam: action,
	setReason: action,
	setTeamcaptainId: action,

	values: computed
});

export default Team;
