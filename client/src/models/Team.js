import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";
class Team {
	constructor(store, id = uuid.v4()) {
		this.id = id;
		this.teamnaam = store.teamnaam;
		this.reason = store.reason;
		this.kind = store.kind;
		this.quote = store.quote;
		this.location = store.location;
		this.cap = store.cap;
		this.bottle = store.bottle;
		this.typeOfEvent = store.event;

		// this.teamcaptainId = store.teamcaptainId;
	}

	setId = id => (this.id = id);
	setTeamnaam = value => (this.teamnaam = value);
	setReason = value => (this.reason = value);
	setKind = value => (this.kind = value);
	setQuote = value => (this.quote = value);
	setLocation = value => (this.location = value);
	setCap = value => (this.cap = value);
	setBottle = value => (this.bottle = value);
	setTypeOfEvent = value => (this.typeOfEvent = value);

	// setTeamcaptainId = value => (this.teamcaptainId = value);

	get values() {
		return {
			teamnaam: this.teamnaam,
			reason: this.reason,
			kind: this.kind,
			quote: this.quote,
			location: this.location,
			bottle: this.bottle,
			cap: this.cap,
			typeOfEvent: this.typeOfEvent

			// teamcaptainId: this.teamcaptainId
		};
	}

	// get author() {
	// 	return this.store.authorStore.resolveAuthor(this.authorId);
	// }

	updateFromServer = values => {
		console.log(values);
		this.setId(values._id);
		this.setTeamnaam(values.teamnaam);
		this.setReason(values.reason);
		this.setKind(values.kind);
		this.setQuote(values.quote);
		this.setLocation(values.location);
		this.setCap(values.cap);
		this.setBottle(values.bottle);
		this.setTypeOfEvent(values.typeOfEvent);

		// this.setTeamcaptainId(values.teamcaptainId);
	};
}

decorate(Team, {
	id: observable,
	teamnaam: observable,
	reason: observable,
	kind: observable,
	quote: observable,
	// teamcaptainId: observable,
	location: observable,
	cap: observable,
	bottle: observable,
	typeOfEvent: observable,

	setId: action,
	setTeamnaam: action,
	setReason: action,
	setKind: action,
	setQuote: action,
	setLocation: action,
	setCap: action,
	setBottle: action,
	setTypeOfEvent: action,

	// setTeamcaptainId: action,

	values: computed
});

export default Team;
