import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineAddTask } from "react-icons/md";
import { RiFolderOpenLine } from "react-icons/ri";
import { ImUserPlus } from "react-icons/im";
import { MdDescription } from "react-icons/md";
import { BsHourglassTop } from "react-icons/bs";
import "./CalenderStyle.css";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { app } from "../Base";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../Global/AuthContext";

import TeamMembers from "./TeamMembers";
import { ViewProjectID } from "../Global/ReduxState";
const CreateTask = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const { currentUser, currentData } = useContext(AuthContext);

	const [dateValue, setDateValue] = React.useState("");
	const [title, setTitle] = React.useState("");
	const [userID, setUserID] = React.useState("");
	const [description, setDescription] = React.useState("");

	const wrkID = useSelector((state) => state.persistedReducer.sideBarID);
	dispatch(ViewProjectID(id));

	const [data, setData] = React.useState([]);
	const [workdata, setWorkData] = React.useState([]);
	const [workdatas, setWorkDatas] = React.useState([]);

	const getData = async () => {
		await app
			.firestore()
			.collection("workspace")
			.doc(wrkID)
			.collection("project")
			.doc(id)
			.get()
			.then((doc) => {
				setData(doc.data());
			});
	};

	const getWorkDatas = async () => {
		await app
			.firestore()
			.collection("workspace")
			.onSnapshot((snapshot) => {
				const r = [];
				snapshot.forEach((doc) => {
					r.push({ ...doc.data(), id: doc.id });
				});
				setWorkDatas(r);
			});
	};

	const uploadTask = async () => {
		await app
			.firestore()
			.collection("workspace")
			.doc(wrkID)
			.collection("project")
			.doc(id)
			.collection("task")
			.doc()
			.set({
				title,
				projectN: data?.ProjectName,
				userID,
				description,
				dateValue,
				createdBy: currentUser?.uid,
			});
		setUserID("");
		setDateValue("");
		setTitle("");
		setDescription("");
		navigate("/");
	};

	React.useEffect(() => {
		getData();

		getWorkDatas();
		console.log("this is the main data", data);
	}, [wrkID, id]);

	return (
		<Container>
			<Card>
				{" "}
				<MyTaskHold>
					<span>
						<FaTasks />
					</span>
					<Text>Create Task</Text>
					<CancelHold to='/'>
						<ImCancelCircle />
					</CancelHold>
				</MyTaskHold>
				<ContentHold>
					<Holder>
						<span>
							<MdOutlineAddTask />
						</span>
						<TextIcon>title</TextIcon>
					</Holder>
					<input
						onChange={(e) => {
							setTitle(e.target.value);
						}}
						placeholder='add your project title '
					/>
				</ContentHold>
				<ContentHold1>
					<Holder>
						<span>
							<RiFolderOpenLine />
						</span>
						<TextIcon>Project</TextIcon>
					</Holder>
					<input
						disabled={true}
						placeholder={data?.ProjectName}
						value={data?.ProjectName}
					/>
				</ContentHold1>
				<ContentHold1>
					<Holder>
						<span>
							<ImUserPlus />
						</span>
						<TextIcon>users</TextIcon>
					</Holder>
					<MainHold>
						<input
							onChange={(e) => {
								setUserID(e.target.value);
							}}
							maxlength='28'
							placeholder='place a team secret id (copy secret id below)'
						/>
					</MainHold>
				</ContentHold1>
				<ContentHold2>
					<Holder>
						<span>
							<MdDescription />
						</span>
						<TextIcon>Description</TextIcon>
					</Holder>
					<AreaHold>
						<textarea
							onChange={(e) => {
								setDescription(e.target.value);
							}}
							placeholder='Give a good description about the project/task you are creating'
						/>
						<AllButton>
							<PriorHold>
								<span>priority</span>
								<ButtonHold1 bg='#ff6600'>{data?.priority}</ButtonHold1>
							</PriorHold>
							<PriorHold>
								<span>Start date - Due date</span>
								<BookingBox>
									<DateRangePickerComponent
										value={dateValue}
										onChange={(e) => {
											setDateValue(e.target.value);
										}}
										style={{
											width: "200px",
											display: "flex",
											justifyContent: "center",

											paddingLeft: "20px",
											padding: "10px",
											color: "white",
										}}
										placeholder='Enter Date Range'
										// minDays={10}
										// maxDays={10}
										format='dd-MMM-yy'></DateRangePickerComponent>
								</BookingBox>
							</PriorHold>
							<PriorHold>
								<span>Project Deadline</span>
								<ButtonHold1 bg='red'>
									{" "}
									<span style={{ marginTop: "5px", marginRight: "5px" }}>
										<BsHourglassTop />
									</span>
									{data?.deadline}
								</ButtonHold1>
							</PriorHold>
						</AllButton>
					</AreaHold>
				</ContentHold2>
				<TeamHold>
					<p>Here are your Team memebers.</p>
					<span>
						Click on the button to copy a team secret id, and paste it on user
						the input{" "}
					</span>
					{workdatas.map((props) => (
						<div>
							{props.id === wrkID ? (
								<div>
									{currentUser.uid === props.createdBy ? (
										<div>
											{" "}
											<div
												style={{
													display: "flex",
													minWidth: "450px",
													justifyContent: "space-between",
													alignItems: "center",
												}}>
												{props.myTeam.map((props) => (
													<div>
														<TeamMembers id={props.staff} />
													</div>
												))}
											</div>
										</div>
									) : null}
								</div>
							) : null}
						</div>
					))}

					<ButtonHold3
						onClick={() => {
							uploadTask();
						}}
						bg='#091e42'>
						Create Task
					</ButtonHold3>
				</TeamHold>
			</Card>
		</Container>
	);
};

export default CreateTask;

const TeamHold = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	p {
		font-size: 13px;
		font-weight: bold;
	}

	span {
		font-weight: bold;
	}
`;

// <ButtonHold bg='#091e42'>Assign users</ButtonHold>
// <ButtonHold bg='silver'>No users assigned</ButtonHold>

const BookingFormat = styled.div`
	font-size: 12px;
	margin-top: 5px;
`;

const BookingBox = styled.div`
	height: 35px;
	width: 180px;
	background-color: #0f9d58;
	/* border-radius: 5px; */
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	padding: 10px;
	border-radius: 20px;
	margin-left: 10px;
`;

const PriorHold = styled.div`
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;

	span {
		font-weight: bold;
	}
`;
const AreaHold = styled.div``;
const AllButton = styled.div`
	margin-top: 10px;
	/* background-color: red; */
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const TextIcon = styled.div`
	margin-left: 5px;
	font-weight: bold;
`;

const ContentHold2 = styled.div`
	/* background: red; */
	display: flex;
	width: 70%;
	margin: 10px;
	font-size: 13px;

	/* justify-content: space-between; */
	textarea {
		height: 80px;
		width: 400px;
		margin-left: 10px;
		padding: 10px;
		border-radius: 5px;
		/* outline: none; */
		resize: none;
	}

	::placeholder {
		color: silver;
	}
`;
const ContentHold1 = styled.div`
	/* background: red; */
	display: flex;
	width: 70%;
	margin: 10px;
	/* justify-content: space-between; */
	input {
		height: 20px;
		width: 300px;
		margin-left: 30px;
		padding: 10px;
		border-radius: 5px;
		outline: none;
	}

	::placeholder {
		color: silver;
	}
`;
const ContentHold = styled.div`
	/* background: red; */
	display: flex;
	width: 70%;
	margin: 10px;

	input {
		height: 20px;
		width: 400px;
		margin-left: 55px;
		padding: 10px;
		border-radius: 5px;
		outline: none;
	}

	::placeholder {
		color: silver;
	}
`;
const Holder = styled.div`
	display: flex;
`;

const ButtonHold1 = styled.div`
	width: 120px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ bg }) => bg};
	color: white;
	border-radius: 20px;
	font-weight: bold;
	margin-left: 10px;
	cursor: pointer;
`;
const ButtonHold = styled.div`
	width: 200px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ bg }) => bg};
	color: white;
	border-radius: 5px;
	font-weight: bold;

	cursor: pointer;
	margin-left: 40px;
`;
const ButtonHold3 = styled.button`
	width: 300px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ bg }) => bg};
	color: white;
	border-radius: 5px;
	font-weight: bold;
	text-decoration: none;
	font-size: 15px;

	cursor: pointer;

	margin-top: 30px;
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

	select {
		margin-left: 45px;
		width: 420px;
		height: 50px;
		cursor: pointer;
	}

	input {
		margin-left: 43px;
		width: 400px;
	}
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
	/* height: 470px; */
	width: 800px;
	background-color: white;
	border-radius: 5px;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding-bottom: 50px;
`;
