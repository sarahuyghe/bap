import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import Bottle from "./../bottle/Bottle";
import styles from "./Home.module.css";

class Info extends Component {
	constructor(props) {
		super(props);
		this.state = { edit: false };
	}

	setEditMode = value => {
		console.log("edit mode");
		this.setState({ edit: value });
	};

	render() {
		const { edit } = this.state;
		const { team, onUpdate } = this.props;
		console.log(team);
		return edit ? (
			<>
				{/* {team.map((t, index) => ( */}
				<div key={team.id} className={styles.info}>
					<input
						type="text"
						value={team.teamnaam}
						name="teamnaam"
						id="teamnaam"
						onChange={e => team.setTeamnaam(e.currentTarget.value)}
					/>
					<input
						type="text"
						value={team.quote}
						name="quote"
						id="quote"
						onChange={e => team.setQuote(e.currentTarget.value)}
					/>
					<input
						type="text"
						value={team.reason}
						name="reason"
						id="reason"
						onChange={e => team.setReason(e.currentTarget.value)}
					/>

					<Bottle
						teamnaam={team.teamnaam}
						teamqoute={team.quote}
						cap={team.cap}
						bottle={team.bottle}
					/>

					<div>
						<h4>Gesloten team?</h4>
						<p className="uitlegTitle">
							Bij een gesloten team moet u als teamcaptain een elke inschrijving
							goedkeuren
						</p>
						<label>
							<input
								type="checkbox"
								name="kindOfTeam"
								className="checkbox"
								defaultChecked={team.kind}
								// value={kindOfTeam}
								// onChange={handleChange}
							/>
							Ik wil een gesloten team
						</label>
					</div>
					<div>
						<h4>Lopen of wandelen?</h4>
						<p className="uitlegTitle">
							Zo weten we hoeveel mensen we per route verwachten
						</p>
						<div>
							<label className="customRadio">
								<input
									type="radio"
									name="event"
									value="lopen"
									checked={team.typeOfEvent === "lopen"}
									onChange={e => team.setTypeOfEvent(e.currentTarget.value)}
								/>
								Wij gaan 3km lopen
							</label>
						</div>
						<div>
							<label className="customRadio">
								<input
									type="radio"
									name="event"
									value="wandelen"
									checked={team.typeOfEvent === "wandelen"}
									onChange={e => team.setTypeOfEvent(e.currentTarget.value)}
								/>
								Wij gaan 6km wandelen
							</label>
						</div>
					</div>
					<button
						onClick={() => {
							onUpdate(team);
							this.setEditMode(false);
						}}
					>
						Save
					</button>
				</div>
			</>
		) : (
			<>
				<div key={team.id} className={styles.info}>
					<h1>{team.teamnaam}</h1>
					<p>{team.quote}</p>
					<p>{team.reason}</p>

					{/* <Bottle
						teamnaam={team.teamnaam}
						teamqoute={team.quote}
						cap={team.cap}
						bottle={team.bottle}
					/> */}

					<div>
						<h4>Gesloten team?</h4>
						<p className="uitlegTitle">
							Bij een gesloten team moet u als teamcaptain een elke inschrijving
							goedkeuren
						</p>
						<label>
							<input
								type="checkbox"
								name="kindOfTeam"
								className="checkbox"
								defaultChecked={team.kind}
								// value={kindOfTeam}
								onChange={e => console.log(e)}
							/>
							Ik wil een gesloten team
						</label>
					</div>
					<div>
						<h4>Lopen of wandelen?</h4>
						<p className="uitlegTitle">
							Zo weten we hoeveel mensen we per route verwachten
						</p>
						<div>
							<label className="customRadio">
								<input
									type="radio"
									name="event"
									value="lopen"
									checked={team.typeOfEvent === "lopen"}
									onChange={e => console.log(e)}
								/>
								Wij gaan 3km lopen
							</label>
						</div>
						<div>
							<label className="customRadio">
								<input
									type="radio"
									name="event"
									value="wandelen"
									checked={team.typeOfEvent === "wandelen"}
									// onChange={handleChange}
								/>
								Wij gaan 6km wandelen
							</label>
						</div>
						<Bottle
							teamnaam={team.teamnaam}
							teamqoute={team.quote}
							cap={team.cap}
							bottle={team.bottle}
							className={styles.bottle}
						/>
					</div>
				</div>
				<button
					onClick={() => this.setEditMode(true)}
					className="secondaireButton"
				>
					Edit
				</button>
			</>
		);
	}
}

export default inject("teamStore")(observer(Info));
