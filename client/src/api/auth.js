class Auth {
	login = (mail, password) => {
		return fetch(`http://localhost:4000/participants/login`, {
			method: "POST",
			headers: {
				"content-type": `application/json`
			},
			body: JSON.stringify({
				mail,
				password
			})
		}).then(res => {
			if (res.status === 200) {
				Promise.resolve();
			} else {
				Promise.reject();
			}
		});
	};

	logout = () => {
		return fetch(`http://localhost:4000/participants/logout`, {
			method: "POST",
			headers: {
				"content-type": `application/json`
			}
		});
	};

	register = (name, mail, password) => {
		return fetch(`http://localhost:4000/participants/register`, {
			method: "POST",
			headers: {
				"content-type": `application/json`
			},
			body: JSON.stringify({
				name,
				mail,
				password
			})
		}).then(res => {
			if (res.status === 200) {
				Promise.resolve();
			} else {
				Promise.reject();
			}
		});
	};
}

export default Auth;
