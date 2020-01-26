class Auth {
	login = (mail, password) => {
		console.log(mail);
		return fetch("/participants/login", {
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
		return fetch("participants/logout", {
			method: "POST",
			headers: {
				"content-type": `application/json`
			}
		});
	};

	register = (name, mail, password) => {
		return fetch("/participants/register", {
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
