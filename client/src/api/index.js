class Api {
	constructor(entity) {
		this.entity = entity;
	}

	getAll = async () => {
		const r = await fetch(`/api/${this.entity}`);
		return await r.json();
	};

	create = async team => {
		console.log(team);
		const r = await fetch(
			`/api/${this.entity}`,
			this.getOptions("post", team.values)
		);
		console.log(r);
		return await r.json();
	};

	getAllInfoTeam = async user => {
		const r = await fetch(`/api/${this.entity}/${user}`);
		return await r.json();
	};

	findAllTeamId = async team => {
		console.log(team);
		const r = await fetch(`/api/${this.entity}/${team}`);
		return await r.json();
	};

	// update = async book => {
	// 	const r = await fetch(
	// 		`http://localhost:4000/${this.entity}/${book.id}`,
	// 		this.getOptions("put", book.values)
	// 	);
	// 	return await r.json();
	// };

	delete = async person => {
		console.log(person);
		const r = await fetch(
			`/api/${this.entity}/${person.id}`,
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
