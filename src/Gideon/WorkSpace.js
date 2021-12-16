import React, { useContext } from "react";
import styled from "styled-components";
import { app } from "../Base";
import { AuthContext } from "../Global/AuthContext";
import firebase from "firebase";
import { IoMdAddCircle } from "react-icons/io";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const WorkSpace = () => {
	const navigate = useNavigate();
	const { currentUser, currentData } = useContext(AuthContext);
	const [myTeam, setMyTeam] = React.useState([{ staff: "" }]);
	const [toggle, setToogle] = React.useState(false);
	const [WorkName, setWorkName] = React.useState("");

	const handleToogle = () => {
		setToogle(!toggle);
	};

	const addTeam = () => {
		setMyTeam([...myTeam, { staff: "" }]);
	};

	const onChangeTeam = (i, e) => {
		const values = [...myTeam];
		values[i][e.target.name] = e.target.value;
		setMyTeam(values);
	};
	const removeTeam = (i, e) => {
		const values = [...myTeam];
		values.splice(i, 1);
		setMyTeam(values);
	};

	const pushWorkSpace = async () => {
		await app.firestore().collection("workspace").doc().set({
			WorkName,
			myTeam,
			createdBy: currentUser?.uid,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		});
		navigate("/");
	};

	return (
		<Container>
			<Card>
				<Text>
					Welcome, <span>{currentData?.userName}</span>
				</Text>

				<p>You need to set up your vitual work space</p>

				{toggle ? (
					<ButtonHold
						disabled={true}
						onClick={handleToogle}
						cl='white'
						bg=' #377dff'>
						Click to Create WorkStation
					</ButtonHold>
				) : (
					<ButtonHold onClick={handleToogle} cl='white' bg=' #377dff'>
						Click to Create WorkStation
					</ButtonHold>
				)}
				<br />

				{toggle ? (
					<div>
						<input
							onChange={(e) => {
								setWorkName(e.target.value);
							}}
							placeholder='enter your new work station e.g mywork'
							style={{
								height: "40px",
								width: "350px",
								marginTop: "10px",
								paddingLeft: "10px",
							}}
						/>
						{myTeam.map((props, i) => (
							<div style={{ display: "flex", alignItems: "center" }}>
								<span>
									<IoMdAddCircle
										style={{
											fontSize: "20px",
											marginTop: "15px",
											cursor: "pointer",
										}}
										onClick={addTeam}
									/>
								</span>
								<span>
									{myTeam.length > 1 ? (
										<AiOutlineMinusCircle
											onClick={removeTeam}
											style={{
												fontSize: "20px",
												marginTop: "15px",
												color: "red",
												marginLeft: "10px",
												cursor: "pointer",
											}}
										/>
									) : null}
								</span>
								<input
									value={props.staff}
									name='staff'
									placeholder='enter team secret id e.g (ikfjuhuwo5fhgj)'
									onChange={(e) => {
										onChangeTeam(i, e);
									}}
									style={{
										height: "40px",
										width: "300px",
										marginTop: "10px",
										paddingLeft: "10px",
									}}
								/>
							</div>
						))}
						<ButtonHold1
							onClick={() => {
								console.log(myTeam);
								pushWorkSpace();
							}}
							cl='white'
							bg=' #377dff'>
							Create
						</ButtonHold1>
					</div>
				) : null}
			</Card>
		</Container>
	);
};

export default WorkSpace;

const ButtonHold1 = styled.button`
	width: 300px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ bg }) => bg};
	color: ${({ cl }) => cl};
	border-radius: 5px;
	font-weight: bold;
	text-decoration: none;
	transition: all 350ms;
	border: none;
	cursor: pointer;
	margin: 10px;
	/* margin-top: 20px; */

	:hover {
		background: silver;
		color: white;
	}
`;
const ButtonHold = styled.button`
	width: 300px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ bg }) => bg};
	color: ${({ cl }) => cl};
	border-radius: 5px;
	font-weight: bold;
	text-decoration: none;
	transition: all 350ms;
	border: none;
	cursor: pointer;
	/* margin-top: 20px; */

	:hover {
		background: silver;
		color: white;
	}
`;

const Text = styled.div`
	margin-top: 100px;
	font-size: 23px;

	span {
		font-weight: bold;
	}
`;

const Container = styled.div`
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.5);
	height: 100vh;
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(2px);
`;

const Card = styled.div`
	min-height: 470px;
	width: 800px;
	background-color: white;
	border-radius: 5px;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding-bottom: 50px;
`;
