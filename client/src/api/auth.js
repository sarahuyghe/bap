class Auth {
	login = (email, password) => {
		return fetch(`/auth/login`, {
			method: "POST",
			headers: {
				"content-type": `application/json`
			},
			body: JSON.stringify({
				email,
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
		return fetch(`/auth/logout`, {
			method: "POST",
			headers: {
				"content-type": `application/json`
			}
		});
	};

	register = (name, firstname, email, password, teamId) => {
		return fetch(`/auth/register`, {
			method: "POST",
			headers: {
				"content-type": `application/json`
			},
			body: JSON.stringify({
				name,
				firstname,
				email,
				password,
				teamId
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
