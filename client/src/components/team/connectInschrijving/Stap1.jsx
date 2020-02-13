import React, { Component } from "react";
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ROUTES } from "./../../../constants/";
import { NavLink } from "react-router-dom";

import styles from "./../ConnectTeam.module.css";

import TeamPallet from "./../../TeamPallet";

class Stap1 extends Component {
	constructor(props) {
		super(props);
		this.state = { searchvalue: "" };
	}

	render() {
		const {
			teamId,
			searching,
			handleChange,
			handleChangeOnSearch,
			button
			// handleLoad
		} = this.props;
		if (this.props.currentStep !== 1) {
			// Prop: The current step
			return null;
		}
		console.log(searching);
		console.log(teamId);
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
					onChange={e => {
						this.setState({ searchValue: e.currentTarget.value });
						handleChangeOnSearch(e);
					}}
				/>
				<p>
					{searching.length} resultaten voor {this.state.searchValue}
				</p>
				{/* {searching.map(
						team => (
							<option key={team.id} value={team.id}>
								{team.teamnaam}
							</option>
						)
						// team.map(test => (
						// 	<>
						// 		{test.teamnaam ? (
						// 			<option key={test.id} value={test.id}>
						// 				{test.teamnaam}
						// 			</option>
						// 		) : (
						// 			<option key={test.id} value={test.teamId}>
						// 				{test.name}
						// 			</option>
						// 		)}
						// 	</>
						// ))
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
				{/* </select> */}

				{/* <div className={styles.resultaten}> */}
				{/* <CarouselProvider
					naturalSlideWidth={410}
					naturalSlideHeight={125}
					totalSlides={searching.length}
					className={styles.resultaten}
				>
					<Slider> */}
				{searching.map(
					(team, index) => (
						// <Slide index={index}>
						<TeamPallet
							key={index}
							name="teamId"
							teamnaam={team.teamnaam}
							teamquote={team.teamquote}
							motivation={team.motivation}
							bottle={team.bottle}
							cap={team.cap}
							teamId={team.id}
							kind={team.kind}
							handleClickPallet={handleChange}
						/>
						// </Slide>
					)
					// <p key={test.id} value={test.teamId}>
					// 	{test.teamnaam ? test.teamnaam : test.name}
					// </p>
				)}
				{/* </Slider>
					<ButtonBack>Back</ButtonBack>
					<ButtonNext>Next</ButtonNext>
				</CarouselProvider> */}

				{/* </Slider> */}
				{/* </div> */}
				{button}
				<NavLink to={ROUTES.team} className="mainButton backButton">
					Terug
				</NavLink>
			</section>
		);
	}
}
export default Stap1;
