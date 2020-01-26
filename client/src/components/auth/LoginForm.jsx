import React from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";
import stylesForm from "./Form.module.css";

const LoginForm = ({ uiStore, history }) => {
	const emailInput = React.createRef();
	const pwdInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();
		uiStore.login(emailInput.current.value, pwdInput.current.value).then(() => {
			history.push(ROUTES.home);
		});
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">
					Email
					<input type="email" name="email" id="email=" ref={emailInput} />
				</label>
				<label htmlFor="username">
					Password
					<input type="password" name="password" id="password" ref={pwdInput} />
				</label>
				<input type="submit" value="Login" />
			</form>
		</>
	);
};

export default inject(`uiStore`)(withRouter(LoginForm));
