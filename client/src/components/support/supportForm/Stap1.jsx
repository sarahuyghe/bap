import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import Carousel from "nuka-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ROUTES } from "./../../../constants/";
import { NavLink } from "react-router-dom";

import styles from "./../../team/ConnectTeam.module.css";

import TeamPallet from "./../../TeamPallet";

class Stap1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchvalue: "",
			searching: {},
			heightMode: "max"
		};
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.searching !== this.props.searching) {
			// this.setState({ searching: this.props.searching });
			console.log("pokemons state has changed.");
			this.forceUpdate();
		}
	}
	render() {
		const {
			searching,
			handleChange,
			handleChangeOnSearch,
			button
			// handleLoad
		} = this.props;
		// const { teams, teamId, handleChange, button } = this.props;
		if (this.props.currentStep !== 1) {
			// Prop: The current step
			return null;
		}
		const { heightMode } = this.state;
		console.log(searching);
		return (
			<section id="sec2" className={styles.panel}>
				<div className="extraInfo">
					<h3>1. Selecteer een team</h3>
					<p>Bij welk team wilt u zich aansluiten</p>
					<div>
						<input
							type="search"
							className="form_input"
							placeholder="teamnaam"
							onChange={e => {
								this.setState({ searchValue: e.currentTarget.value });
								handleChangeOnSearch(e);
							}}
						/>
						<p>
							{searching.length} resultaten voor {this.state.searchValue}
						</p>
					</div>
				</div>
				<div className="deeltitel">Aansluiten bij een team</div>
				<div className={styles.resultaten}>
					<Carousel
						slidesToShow={2}
						heightMode={heightMode}
						cellSpacing={20}
						defaultControlsConfig={{
							prevButtonStyle: {
								background: "transparent",
								marginLeft: "-50px",
								color: "black",
								fontSize: "2.4rem"
							},
							nextButtonStyle: {
								background: "transparent",
								marginRight: "-50px",
								color: "black",
								fontSize: "2.4rem"
							},
							nextButtonText: ">",
							prevButtonText: "<",
							pagingDotsStyle: {
								display: "none"
							}
						}}
					>
						{searching.map((team, index) => (
							<div
								key={index}
								style={{
									height: this.state.heightMode === "current" ? 100 : 400
								}}
							>
								<TeamPallet
									name="teamId"
									teamnaam={team.teamnaam}
									quote={team.teamquote}
									motivation={team.reason}
									bottle={2}
									cap={2}
									teamId={team.id}
									kind={team.kind}
									handleClickPallet={handleChange}
								/>
							</div>
						))}
					</Carousel>
				</div>
				{button}
				<NavLink to={ROUTES.support} className="secondaireButton backButton">
					Terug
				</NavLink>
			</section>
		);
	}
}

export default inject("teamStore")(observer(Stap1));
