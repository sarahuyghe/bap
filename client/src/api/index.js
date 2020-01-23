class Api {
	constructor(entity) {
		this.entity = entity;
	}

	getAll = async () => {
		const r = await fetch(`http://localhost:4000/${this.entity}`);
		return await r.json();
	};

	create = async book => {
		const r = await fetch(
			`http://localhost:4000/${this.entity}`,
			this.getOptions("post", book.values)
		);
		return await r.json();
	};

	update = async book => {
		const r = await fetch(
			`http://localhost:4000/${this.entity}/${book.id}`,
			this.getOptions("put", book.values)
		);
		return await r.json();
	};

	delete = async book => {
		const r = await fetch(
			`http://localhost:4000/${this.entity}/${book.id}`,
			this.getOptions("delete")
		);
		return r.json();
	};

	getOptions = (method, body = null) => {
		const options = {
			method: method.toUpperCase(),
			headers: {
				"content-type": `application/json`
			}
		};
		if (body) {
			options.body = JSON.stringify(body);
		}
		return options;
	};
}

export default Api;
