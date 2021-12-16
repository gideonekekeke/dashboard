import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaFolderPlus } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { RiFolder2Fill } from "react-icons/ri";
import { MdOutlineLowPriority } from "react-icons/md";
import { BsHourglassTop } from "react-icons/bs";
import { app } from "../Base";
import { AuthContext } from "../Global/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
const CreateProjects = () => {
	const { currentUser } = useContext(AuthContext);

	const navigate = useNavigate();

	const { id } = useParams();
	const [ProjectName, setProjectName] = React.useState("");
	const [priority, setPriority] = React.useState("");
	const [deadline, setDeadline] = React.useState("");

	const uploadProject = async () => {
		await app
			.firestore()
			.collection("workspace")
			.doc(id)
			.collection("project")
			.doc()
			.set({
				ProjectName,
				priority,
				deadline,

				createdBy: currentUser?.uid,
			});

		navigate("/");
	};

	return (
		<Container>
			<Card>
				<MyTaskHold>
					<span>
						<FaFolderPlus />
					</span>
					<Text>Create Project</Text>
					<CancelHold to='/project'>
						<ImCancelCircle />
					</CancelHold>
				</MyTaskHold>
				<InputContainer>
					<MainHold>
						<span>
							<RiFolder2Fill />
						</span>
						<MainText>Project Name</MainText>
					</MainHold>
					<InputHold>
						<input
							onChange={(e) => {
								setProjectName(e.target.value);
							}}
							placeholder='Give a name of your projet eg agile project'
						/>
					</InputHold>
				</InputContainer>
				<InputContainer1>
					<TwoHold>
						<MainHold>
							<span>
								<MdOutlineLowPriority />
							</span>
							<MainText>Set Priority</MainText>
						</MainHold>
						<InputHold1>
							<select
								onChange={(e) => {
									setPriority(e.target.value);
								}}>
								<option value='urgent'>Urgent</option>
								<option value='high'>high</option>
								<option value='low'>Low</option>
							</select>
						</InputHold1>
					</TwoHold>
					<TwoHold2>
						<MainHold>
							<span>
								<BsHourglassTop />
							</span>
							<MainText>Deadline</MainText>
						</MainHold>
						<InputHold2>
							<input
								onChange={(e) => {
									setDeadline(e.target.value);
								}}
								type='date'
								placeholder='Give a name of your projet eg agile project'
							/>
						</InputHold2>
					</TwoHold2>
				</InputContainer1>
				<ButtonHold
					onClick={() => {
						uploadProject();
					}}>
					Create Project
				</ButtonHold>
			</Card>
		</Container>
	);
};

export default CreateProjects;

const ButtonHold = styled.div`
	width: 200px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #377dff;
	color: white;
	border-radius: 5px;
	font-weight: bold;
	margin-top: 30px;
	cursor: pointer;
`;

const TwoHold = styled.div`
	display: flex;
	/* align-items: center; */
	flex-direction: column;
`;
const TwoHold2 = styled.div`
	display: flex;
	/* align-items: center; */
	flex-direction: column;
	margin-left: 50px;
`;

const InputContainer1 = styled.div`
	width: 400px;
	display: flex;
	margin-top: 30px;
	justify-content: space-between;
`;
const InputContainer = styled.div`
	width: 400px;

	margin-top: 30px;
`;
const MainText = styled.div`
	margin-left: 7px;
`;
const InputHold1 = styled.div`
	select {
		height: 50px;
		width: 200px;

		padding: 5px;
		border-radius: 5px;
		outline: none;
		cursor: pointer;
	}

	::placeholder {
		color: silver;
	}
`;
const InputHold2 = styled.div`
	input {
		height: 30px;
		/* width: 400px; */

		padding: 10px;
		border-radius: 5px;
		outline: none;
		cursor: pointer;
	}

	::placeholder {
		color: silver;
	}
`;
const InputHold = styled.div`
	input {
		height: 30px;
		width: 400px;

		padding: 10px;
		border-radius: 5px;
		outline: none;
	}

	::placeholder {
		color: silver;
	}
`;
const MainHold = styled.div`
	display: flex;
`;

const CancelHold = styled(NavLink)`
	display: flex;
	/* padding-left: 200px; */
	justify-content: flex-start;
	font-size: 23px;
	cursor: pointer;
	text-decoration: none;
	color: #212429;
`;

const MyTaskHold = styled.div`
	display: flex;

	/* background-color: red; */
	width: 80%;
	/* justify-content: center; */
	align-items: center;
	justify-content: flex-end;
	margin-top: 30px;
	font-size: 30px;
	color: #212429;
	span {
		margin-top: 10px;
		margin-right: 10px;
	}
`;
const Text = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 180px;

	font-weight: bold;
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
	height: 470px;
	width: 800px;
	background-color: white;
	border-radius: 5px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
