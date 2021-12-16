import React from "react";
import styled from "styled-components";
import { app } from "../Base";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSelector } from "react-redux";

const TeamMembers = ({ id }) => {
	const [userData, setUserData] = React.useState([]);
	const [copyClip, setCopyClip] = React.useState(false);
	const wrkID = useSelector((state) => state.persistedReducer.workspaceID);

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
		setInterval(() => {
			setCopyClip(false);
		}, 1000);
		viewUser();
	}, [id]);

	return (
		<Container>
			<TeamHolder>
				<div>
					{" "}
					<TeamImage src={userData?.img} />
					<TeamName>{userData?.userName}</TeamName>
					<CopyToClipboard
						style={{
							height: "30px",
							width: "120px",
							background: "#377DFF",
							justifyContent: "center",
							alignItems: "center",
							color: "white",
							display: "flex",
							borderRadius: "5px",
							fontSize: "12px",
							cursor: "pointer",
						}}
						text={id}
						onCopy={() => {
							setCopyClip(true);
						}}>
						<span>Click to copy</span>
					</CopyToClipboard>
				</div>

				{copyClip ? <span style={{ color: "red" }}>Copied.</span> : null}
			</TeamHolder>
		</Container>
	);
};

export default TeamMembers;

const Container = styled.div`
	margin-top: 20px;
`;
const TeamHolder = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const TeamImage = styled.img`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: silver;
	object-fit: cover;
`;
const TeamName = styled.div`
	font-size: 13px;
	font-weight: bold;
`;
