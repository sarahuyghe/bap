import React, { Component } from "react";

class Participants extends Component {
	constructor(props) {
		super(props);
		this.state = { accepting: {} };
	}
	checkAccepted = person => {
		const { accepting } = this.state;
		// const updatedAccepting = { ...this.state.accepting };
		// updatedAccepting[person.id] = { person };
		// this.setState({ accepting: updatedAccepting });
		// console.log(updatedAccepting);
		this.setState({ accepting: person });
		// this.setState(previousState => ({
		// 	accepting: [...this.state.accepting, person]
		// }));
	};
	render() {
		const { accepting } = this.state;
		const { person, onDelete, onUpdate } = this.props;
		// if (person.accepted === false) {
		// 	this.checkAccepted(person);
		// }
		return (
			<section>
				<div key={person.id}>
					<h1>{person.name}</h1>
					<p>{person.mail}</p>
					{/* <p>{person.reason}</p> */}
					{/* {team.teamcaptainId.map(person => console.log(person))}
		{team.teamcaptainId.map(person => console.log(person))} */}
					<button
						onClick={() => onUpdate(person)}
						// className={styles.buttonDelete}
					>
						Verwijderen persoon
					</button>
				</div>
				)}
			</section>
		);
		// ))}
		// <h4>Moet nog worden goedgekeurd</h4>
		// {acceptingParticipants.map(person => (
		//   <div key={person.id}>
		//     <h1>{person.name}</h1>
		//     <p>{person.mail}</p>
		//     {/* <p>{person.reason}</p> */}
		//     {/* {team.teamcaptainId.map(person => console.log(person))}
		//   {team.teamcaptainId.map(person => console.log(person))} */}
		//     <button
		//       onClick={() => deleteParticipant(person)}
		//       // className={styles.buttonDelete}
		//     >
		//       Verwijderen persoon
		//     </button>
		//   </div>
		//   ))}
		// </section>}
	}
}

export default Participants;
