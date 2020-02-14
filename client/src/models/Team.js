import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";
class Team {
	constructor(store, id = uuid.v4()) {
		this.id = id;
		this.store = store;
	}

	setId = id => (this.id = id);
	setTeamnaam = value => (this.teamnaam = value);
	setReason = value => (this.reason = value);
	setKind = value => (this.kind = value);
	setQuote = value => (this.quote = value);
	setLocation = value => (this.location = value);
	setCap = value =>
		console.log(value);
		// this.cap = value
	setBottle = value => (this.bottle = value);
	setTypeOfEvent = value => (this.typeOfEvent = value);

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
		};
	}

	updateFromServer = values => {
		console.log(values.cap);
		console.log(values.bottle);

		this.setId(values._id);
		this.setTeamnaam(values.teamnaam);
		this.setReason(values.reason);
		this.setKind(values.kind);
		this.setQuote(values.quote);
		this.setLocation(values.location);
		this.setCap(values.cap);
		this.setBottle(values.bottle);
		this.setTypeOfEvent(values.typeOfEvent);
	};
}

decorate(Team, {
	id: observable,
	teamnaam: observable,
	reason: observable,
	kind: observable,
	quote: observable,
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

	values: computed
});

export default Team;
