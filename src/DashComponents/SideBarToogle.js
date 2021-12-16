import React, { useContext } from "react";
import styled from "styled-components";
import { AiFillFolderOpen } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { MdSettingsInputComponent } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { FiActivity } from "react-icons/fi";
import { FaGreaterThan } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { app } from "../Base";
import { AuthContext } from "../Global/AuthContext";
import SideBarProject from "../Gideon/SideBarProject";
import { useDispatch, useSelector } from "react-redux";
import { ViewWorkSpace } from "../Global/ReduxState";

const SideBarToogle = ({
	showHome,
	showProject,
	showUsers,
	showSettings,
	showNotification,
}) => {
	const [togglePro, setTogglePro] = React.useState(false);

	const handleTogglePro = () => {
		setTogglePro(!togglePro);
	};

	const dispatch = useDispatch();

	const spaceID = useSelector((state) => state.persistedReducer.sideBarID);

	const { currentUser } = useContext(AuthContext);

	const [workSpaceData, setWorkSpaceData] = React.useState([]);

	const [getProjects, setGetProjects] = React.useState([]);

	const getWorkSpace = async () => {
		await app
			.firestore()
			.collection("workspace")
			.onSnapshot((snap) => {
				const item = [];
				snap.forEach((doc) => {
					item.push({ ...doc.data(), id: doc.id });
				});
				setWorkSpaceData(item);
			});
	};
	const getTheProjects = async () => {
		await app
			.firestore()
			.collection("workspace")
			.doc(spaceID)
			.collection("project")
			.onSnapshot((snap) => {
				const item = [];
				snap.forEach((doc) => {
					item.push({ ...doc.data(), id: doc.id });
				});
				setGetProjects(item);
			});
	};

	React.useEffect(() => {
		getWorkSpace();
		console.log("dgrfhj", workSpaceData);
		getTheProjects();
	}, [spaceID]);

	return (
		<div>
			<SecondComp>
				{showHome && (
					<TextHold>
						<Text>Home</Text>
						<MainHold to='/workspace'>
							<ButtonHold3>Create your workspace</ButtonHold3>
						</MainHold>

						{workSpaceData?.map((props) => (
							<div>
								{currentUser?.uid === props?.createdBy ||
								props.myTeam.find((el) => {
									return el.staff === currentUser.uid;
								}) ? (
									<div>
										<MainHold to={`/project/${props.id}`}>
											<span
												onClick={() => {
													handleTogglePro();
													dispatch(ViewWorkSpace(props.id));
												}}>
												{props.WorkName}
												{togglePro ? (
													<AiOutlineDown
														style={{
															fontSize: "13px",
															marginLeft: "10px",
														}}
													/>
												) : (
													<FaGreaterThan
														style={{ fontSize: "10px", marginLeft: "10px" }}
													/>
												)}
											</span>
										</MainHold>

										{togglePro ? (
											<div>
												{currentUser.uid === props.createdBy ? (
													<MainHold to={`/proj/${props.id}`}>
														<ButtonHold4>Add a Project</ButtonHold4>
													</MainHold>
												) : null}
												<SideBarProject id={props.id} />
											</div>
										) : null}
									</div>
								) : null}
							</div>
						))}
					</TextHold>
				)}
				{showProject && (
					<TextHold>
						<Text>Projects</Text>

						{getProjects &&
							getProjects.map((props) => (
								<ProHold to={`/exploreTask/${props.id}`}>
									{" "}
									<span>
										<BsBriefcaseFill style={{ marginTop: "10px" }} />
									</span>
									{props.ProjectName}
								</ProHold>
							))}
					</TextHold>
				)}

				{showUsers && (
					<TextHold>
						<Text>Users</Text>
						<MainHold to='/'>
							<span>
								<BsPeopleFill />
							</span>
							All Users
						</MainHold>
					</TextHold>
				)}
				{showSettings && (
					<TextHold>
						<Text>Settings</Text>
						<MainHold to='/'>
							<span>
								<MdSettingsInputComponent />
							</span>
							General Settings
						</MainHold>
					</TextHold>
				)}
				{showNotification && (
					<TextHold>
						<Text>Notification</Text>
						<MainHold to='/'>
							<span>
								<MdNotifications />
							</span>
							All Notification
						</MainHold>
					</TextHold>
				)}
			</SecondComp>
		</div>
	);
};

export default SideBarToogle;

const ProHold = styled(Link)`
	font-size: 15px;

	font-weight: bold;
	padding: 3px 10px;
	text-decoration: none;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: black;
	span {
		margin-right: 10px;
	}

	:hover {
		background: rgba(225, 225, 225, 0.7);
		cursor: pointer;
		transition: all 350ms;
		border-radius: 5px;
		color: #377dff;
	}
`;

const ButtonHold4 = styled.div`
	width: 150px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #377dff;
	color: white;
	border-radius: 5px;
	font-weight: bold;
	font-size: 12px;
	cursor: pointer;
	margin-left: 10px;
`;
const ButtonHold3 = styled.div`
	width: 150px;
	height: 45px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #091e42;
	color: white;
	border-radius: 5px;
	font-weight: bold;
	font-size: 11px;
`;

const ButtonHold = styled.div`
	width: 150px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #377dff;
	color: white;
	border-radius: 5px;
	font-weight: bold;
`;

const TextHold = styled.div`
	margin-left: 20px;
	margin-top: 10px;

	p {
		font-size: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80%;
	}
`;
const Text = styled.div`
	font-weight: bold;
	font-family: Fredoka One, cursive;
	margin-bottom: 10px;
	color: gray;
`;
const ButHold = styled(NavLink)`
	display: flex;
	color: gray;
	align-items: center;
	justify-content: center;

	text-decoration: none;

	/* font-weight: bold; */

	:hover {
		background: rgba(225, 225, 225, 0.7);
		cursor: pointer;
		transition: all 350ms;
		border-radius: 5px;
	}

	span {
		margin-right: 10px;
		margin-top: 10px;
		font-size: 13px;
	}
`;
const MainHolding = styled.div`
	display: flex;
	color: gray;
	align-items: center;

	/* font-weight: bold; */

	:hover {
		background: rgba(225, 225, 225, 0.7);
		cursor: pointer;
		transition: all 350ms;
		border-radius: 5px;
	}

	span {
		margin-right: 10px;
		margin-top: 10px;
		font-size: 13px;
	}
`;
const MainHold = styled(NavLink)`
	display: flex;
	color: gray;
	align-items: center;
	padding: 5px 10px;
	text-decoration: none;

	/* font-weight: bold; */

	:hover {
		background: #dbeaff;
		cursor: pointer;
		transition: all 350ms;
		border-radius: 5px;
		color: #377dff;
	}

	span {
		margin-right: 10px;
		margin-top: 10px;
	}
`;
const MainHold1 = styled.div`
	display: flex;
	color: gray;
	align-items: center;
	margin-left: 25px;
	/* font-weight: bold; */

	:hover {
		background: #dbeaff;
		cursor: pointer;
		transition: all 350ms;
		border-radius: 5px;
		color: #377dff;
	}

	span {
		margin-right: 10px;
		margin-top: 10px;
	}
`;
const MainHold2 = styled.div`
	display: flex;
	color: gray;
	align-items: center;

	/* font-weight: bold; */

	:hover {
		background: rgba(225, 225, 225, 0.7);
		cursor: pointer;
		transition: all 350ms;
		border-radius: 5px;
	}

	span {
		margin-right: 10px;
		margin-top: 10px;
	}
`;

const SecondComp = styled.div`
	height: 100vh;
	width: 220px;

	top: 0;
	left: 0;
	bottom: 0;
	// border : 1px solid silver;
	position: absolute;
	// display : flex;
	margin-left: 50px;
	// z-index : -1
	flex: 0.3;
	background: whitesmoke;
	transition: all 350ms;
`;
