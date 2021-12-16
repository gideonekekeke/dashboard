import React from "react";
import { app } from "../Base";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ViewWorkSpace } from "../Global/ReduxState";
const SideBarProject = ({ id }) => {
	const [data, setData] = React.useState([]);

	const dispatch = useDispatch();

	const getData = async () => {
		await app
			.firestore()
			.collection("workspace")
			.doc(id)
			.collection("project")
			.onSnapshot((snap) => {
				const item = [];
				snap.forEach((doc) => {
					item.push({ ...doc.data(), id: doc.id });
				});

				setData(item);
			});
	};

	React.useEffect(() => {
		getData();
		console.log("sdttgf", data);
	}, [id]);

	return (
		<div>
			{data?.map((props) => (
				<div>
					{" "}
					<ProHold>{props.ProjectName} </ProHold>
				</div>
			))}
		</div>
	);
};

export default SideBarProject;

const ProHold = styled.div`
	font-size: 12px;
	margin-left: 30px;
	font-weight: bold;
	padding: 5px 10px;
	text-decoration: none;

	:hover {
		background: rgba(225, 225, 225, 0.7);
		cursor: pointer;
		transition: all 350ms;
		border-radius: 5px;
	}
`;
