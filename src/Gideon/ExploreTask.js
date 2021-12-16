import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { app } from "../Base";
import { AuthContext } from "../Global/AuthContext";
const ExploreTask = () => {
	const { currentUser } = useContext(AuthContext);
	const [taskData, setTaskData] = React.useState([]);
	const { id } = useParams();

	console.log("drghsfdngdshjhgcfvbhjhg", id);

	const spaceID = useSelector((state) => state.persistedReducer.sideBarID);

	const mapTaskData = async () => {
		await app
			.firestore()
			.collection("workspace")
			.doc(spaceID)
			.collection("project")
			.doc(id)
			.collection("task")
			.onSnapshot((snap) => {
				const item = [];
				snap.forEach((doc) => {
					item.push(doc.data());
				});
				setTaskData(item);
			});
	};

	React.useEffect(() => {
		mapTaskData();
		console.log(taskData);
	}, [id]);

	return (
		<Container>
			{taskData?.map((props) => (
				<Card>
					<Title>{props.title}</Title>
					{props.userID === currentUser.uid ? (
						<div>
							<Link to={`/steps/${props.id}`}>
								<button>Create Steps</button>
							</Link>
						</div>
					) : null}
				</Card>
			))}
		</Container>
	);
};

export default ExploreTask;
const Container = styled.div`
	display: flex;
`;
const Title = styled.div`
	color: black;
	padding-bottom: 30px;
	text-align: center;
`;
const Card = styled.div`
	height: 200px;
	width: 300px;
	background: #f5f5f5;
	margin: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
