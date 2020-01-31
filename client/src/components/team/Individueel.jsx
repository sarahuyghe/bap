import React from "react";

const Individueel = () => {
	const firstnameInput = React.createRef();
	const lastnameInput = React.createRef();
	const mailInput = React.createRef();
	const eventInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();
		// teamStore.addTeam({
		// 	teamnaam: teamNameInput.current.value,
		// 	reason: whyInput.current.value,
		// 	quote: quoteInput.current.value,
		// 	event: eventInput.current.value,
		// 	kind: kindInput.current.checked,
		// 	teamcaptainId: uiStore.authUser._id
		// });

		firstnameInput.current.value = "";
		lastnameInput.current.value = "";
		mailInput.current.value = "";
		console.log("individueel form toegevoegd");
	};
	return (
		<>
			<h3>Uw team instellen</h3>
			<form onSubmit={handleSubmit}>
				<h3>Wat is uw naam?</h3>
				<p>Zo kunnen we je bij naam aanspreken</p>
				<label>
					Mijn voornaam is
					<input type="text" name="firstname" ref={firstnameInput} />
				</label>
				<label>
					en
					<input type="text" name="lastname" ref={lastnameInput} />
					is mijn achternaams
				</label>
				<br />
				<h3>Wat is uw Email adres?</h3>
				<p>
					We hebben uw Email adres nodig om u een bevestigingsbericht te sturen
				</p>
				<label>
					Mijn Email adres is
					<input type="text" name="mail" ref={mailInput} />
				</label>
				<br />
				<h3>Lopen of wandelen?</h3>
				<p>Zo weten we hoeveel mensen we per route verwachten</p>
				<div>
					<input type="radio" name="event" value="lopen" ref={eventInput} />
					<label>Ik ga 3km lopen</label>
				</div>
				<div>
					<input type="radio" name="event" value="wandelen" ref={eventInput} />
					<label>Ik ga 6km wandelen</label>
				</div>
				<input type="submit" value="Inschrijven" />
			</form>
		</>
	);
};

export default Individueel;
