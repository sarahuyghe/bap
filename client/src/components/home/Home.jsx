import React, { Component } from "react";
// import store from "../../store";

class Home extends Component {
	constructor(props) {
		super(props);
		this.teamNameInput = React.createRef();
		this.whyInput = React.createRef();
		this.naamInput = React.createRef();
		this.voornaamInput = React.createRef();
		this.mailInput = React.createRef();
		this.eventInput = React.createRef();
	}

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.teamNameInput.current.value);
		console.log(this.whyInput.current.value);
		console.log(this.naamInput.current.value);
		console.log(this.voornaamInput.current.value);
		console.log(this.mailInput.current.value);
		console.log(this.eventInput.current.value);
	};
	render() {
		return (
			<>
				<p>First testing of form</p>
				<form onSubmit={this.handleSubmit}>
					<label>
						TeamNaam
						<input type="text" name="teamnaam" ref={this.teamNameInput} />
					</label>
					<br />
					<label>
						Why
						<input type="text" name="why" ref={this.whyInput} />
					</label>
					<br />
					<label>
						Naam
						<input type="text" name="Naam" ref={this.naamInput} />
					</label>
					<br />
					<label>
						Voornaam
						<input type="text" name="voornaam" ref={this.voornaamInput} />
					</label>
					<br />
					<label>
						Mail
						<input type="text" name="mail" ref={this.mailInput} />
					</label>
					<br />
					<label>
						Event
						<select ref={this.eventInput}>
							<option value="lopen">Lopen</option>
							<option value="wandelen">Wandelen</option>
						</select>
					</label>
					<br />

					<input type="submit" value="bevestigen" />
				</form>
			</>
		);
	}
}

export default Home;
