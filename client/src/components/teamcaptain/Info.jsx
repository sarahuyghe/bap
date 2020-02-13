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
					<div>
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
					</div>
					<div>
						<h4>Lopen of wandelen?</h4>
						<div className="customTesting">
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
						<div className="customTesting">
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
						<div>
							<h4>Gesloten team?</h4>
							<label className="customTesting">
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
					</div>
					<div className={styles.bottle}>
						<Bottle
							teamnaam={team.teamnaam}
							teamqoute={team.quote}
							cap={team.cap}
							bottle={team.bottle}
							custom={true}
						/>
					</div>
				</div>
				<button
					onClick={() => {
						onUpdate(team);
						this.setEditMode(false);
					}}
					className="mainButton"
				>
					Save
				</button>
			</>
		) : (
			<>
				<div key={team.id} className={styles.info}>
					<div>
						<h4>{team.teamnaam}</h4>
						<p>{team.quote}</p>
						<p>{team.reason}</p>
					</div>

					<div>
						<h4>Lopen of wandelen?</h4>

						<div className="customTesting">
							<label>
								<input
									type="radio"
									name="event"
									value="lopen"
									className={`checkbox ${styles.inputWidth}`}
									checked={team.typeOfEvent === "lopen"}
									disabled="disabled"
								/>
								Wij gaan 3km lopen
							</label>
						</div>
						<div className="customTesting">
							<label>
								<input
									type="radio"
									name="event"
									value="wandelen"
									className={`checkbox ${styles.inputWidth}`}
									checked={team.typeOfEvent === "wandelen"}
									disabled="disabled"
								/>
								Wij gaan 6km wandelen
							</label>
						</div>

						<div>
							<h4>Gesloten team?</h4>
							<label className="customTesting">
								<input
									type="checkbox"
									name="kindOfTeam"
									className={`checkbox ${styles.inputWidth}`}
									defaultChecked={team.kind}
									disabled="disabled"
								/>
								Ik wil een gesloten team
							</label>
						</div>
					</div>
					<div className={styles.bottle}>
						<Bottle
							teamnaam={team.teamnaam}
							teamqoute={team.quote}
							cap={team.cap}
							bottle={team.bottle}
						/>
					</div>
				</div>
				<button onClick={() => this.setEditMode(true)} className="mainButton">
					Edit
				</button>
			</>
		);
	}
}

export default inject("teamStore")(observer(Info));
