import React from "react";
import styled from "styled-components";
import { app } from "../Base";

const ActiveDisaplayUser = ({ id }) => {
	const [data, setData] = React.useState([]);

	const getData = async () => {
		await app
			.firestore()
			.collection("users")
			.doc(id)
			.get()
			.then((doc) => {
				setData(doc.data());
			});
	};

	React.useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<SubText>This project was created by {data.userName} </SubText>
		</div>
	);
};

export default ActiveDisaplayUser;
const SubText = styled.div`
	font-size: 10px;
`;

const ImgCir = styled.img`
	margin-left: 10px;
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background-color: brown;
	object-fit: cover;
	margin-top: -10px;
`;
