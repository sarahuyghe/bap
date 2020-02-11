import React, { Component } from "react";
import styles from "./../ConnectTeam.module.css";

class Stap1 extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { teamId, handleChange } = this.props;
		if (this.props.currentStep !== 1) {
			// Prop: The current step
			return null;
		}
		return (
			<section id="sec2" className={styles.panel}>
				<div className="extraInfo">
					<h3>2. Selecteer een team</h3>
					<p>Bij welk team wilt u zich aansluiten</p>
				</div>
				<div className="deeltitel">Aansluiten bij een team</div>
				<input
					type="search"
					className="form_input"
					onChange={handleChange}
					className="form_input"
				/>
				<p>23 resultaten voor {}</p>
				{/* <select>
					{searching.map(team =>
						team.map(test => (
							<>
								{test.teamnaam ? (
									<option key={test.id} value={test.id}>
										{test.teamnaam}
									</option>
								) : (
									<option key={test.id} value={test.teamId}>
										{test.name}
									</option>
								)}
							</>
						))
					)} */}
				{/* {teams.map(team => */}
				{/* {teams.map(test => (
      <>
        {test.teamnaam ? (
          <option key={test.id} value={test.id}>
            {test.teamnaam}
          </option>
        ) : (
          <option key={test.id} value={test.teamId}>
            {test.name}
          </option>
        )}
      </>
    ))} */}
				{/* </select>
				<div className={styles.resultaten}>
					<TeamPallet />
					{searching.map(team =>
						team.map(test => (
							<TeamPallet />
							// <p key={test.id} value={test.teamId}>
							// 	{test.teamnaam ? test.teamnaam : test.name}
							// </p>
						))
					)}
				</div>
				<a href="#sec2" className="secondaireButton">
					Volgende
				</a>

				<a href="#sec3" className="secondaireButton">
					Volgende
				</a> */}
			</section>
		);
	}
}
export default Stap1;
