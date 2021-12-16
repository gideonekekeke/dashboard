import React from "react";
import styled from "styled-components";
import { app } from "../Base";

const TaskTeam = ({ id }) => {
	const [userData, setUserData] = React.useState([]);

	const viewUser = async () => {
		await app
			.firestore()
			.collection("users")
			.doc(id)
			.get()
			.then((user) => {
				setUserData(user.data());
			});
	};

	React.useEffect(() => {
		viewUser();
	}, []);
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<ImgCir src={userData?.img} />
		</div>
	);
};

export default TaskTeam;

const ImgCir = styled.img`
	margin-left: 10px;
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background-color: #f5f5f5;
	object-fit: cover;
	margin-top: -10px;
`;
