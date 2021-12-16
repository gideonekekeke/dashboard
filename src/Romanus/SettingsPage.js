import React, { useContext } from "react";
import styled from "styled-components";
import { app } from "../Base";
import { AuthContext } from "../Global/AuthContext";
const SettingsPage = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<Container>
			settings page
			<br />
			<br />
			{currentUser ? (
				<ButtonHold
					onClick={() => {
						app.auth().signOut();
					}}>
					Sign out
				</ButtonHold>
			) : null}
			<br />
			<br />
			<br />
			<div>{currentUser?.uid}</div>
		</Container>
	);
};

export default SettingsPage;
const Container = styled.div``;
const ButtonHold = styled.button`
	height: 40px;
	width: 150px;
	background: brown;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
