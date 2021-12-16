import React, { useContext } from "react";
import styled from "styled-components";
import { FiActivity } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { AiFillFolderAdd } from "react-icons/ai";
import avat from "./aaa.JPG";
import { useSelector } from "react-redux";
import { AuthContext } from "../Global/AuthContext";
import { app } from "../Base";
import pic from "../img/2.svg";
import { Link, NavLink } from "react-router-dom";
import ActiveDisaplayUser from "./ActiveDisaplayUser";
import TaskTeam from "./TaskTeam";

const NowActive = () => {
	const { currentUser } = useContext(AuthContext);
	const [projectData, setProjectData] = React.useState([]);
	const [memb, setMemb] = React.useState([]);

	const wrkID = useSelector((state) => state.persistedReducer.sideBarID);

	const getProjects = async () => {
		await app
			.firestore()
			.collection("workspace")
			.doc(wrkID)
			.collection("project")
			.onSnapshot((snap) => {
				const item = [];
				snap.forEach((doc) => {
					item.push({ ...doc.data(), id: doc.id });
				});
				setProjectData(item);
			});
	};
	const MapMemebersImage = async () => {
		await app
			.firestore()
			.collection("workspace")

			.onSnapshot((snap) => {
				const item = [];
				snap.forEach((doc) => {
					item.push({ ...doc.data(), id: doc.id });
				});
				setMemb(item);
			});
	};

	React.useEffect(() => {
		getProjects();
		MapMemebersImage();
	}, [wrkID]);
	return (
		<Container>
			<ActiveTitleIcon>
				<FiActivity />
				Activity
			</ActiveTitleIcon>
			<Wrapper>
				<ToLine></ToLine>

				{projectData.length <= 0 ? (
					<div>
						{" "}
						<ActiveText>
							{" "}
							<span></span>
						</ActiveText>
						<ContentHold>
							<ImageHold>
								<Image src={pic} />
							</ImageHold>
							<div>No activity yet, invite people to get started</div>
						</ContentHold>
					</div>
				) : (
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
							flexDirection: "column",
						}}>
						{projectData.map((props) => (
							<ActNotBox>
								<BoxOne>
									<IconType>
										{" "}
										<FaProjectDiagram color='#fff' size='10px' />{" "}
									</IconType>
									<ActionNotText>
										<MainText> {props.ProjectName} </MainText>
										<div style={{ display: "flex", alignItems: "center" }}>
											{" "}
											<ActiveDisaplayUser id={props.createdBy} />
											{memb.map((props) => (
												<div>
													{props.id === wrkID ? (
														<div>
															{currentUser.uid === props.createdBy ||
															props.myTeam.find((el) => {
																return el.staff === currentUser.uid;
															}) ? (
																<div>
																	{" "}
																	<div
																		style={{
																			display: "flex",
																			alignItems: "center",
																		}}>
																		{props.myTeam.map((props) => (
																			<div>
																				<TaskTeam id={props.staff} />
																			</div>
																		))}
																	</div>
																</div>
															) : null}
														</div>
													) : null}
												</div>
											))}
										</div>
									</ActionNotText>
								</BoxOne>
								<BoxTwo>
									<IconsPac>
										{props.createdBy === currentUser.uid ? (
											<div
												style={{
													display: "flex",
													flexDirection: "column",
													justifyContent: "center",
													alignItems: "center",
													fontWeight: "bold",
												}}>
												<LitText> Assign Task </LitText>
												<Icon1 to={`/task/${props.id}`}>
													<AiFillFolderAdd />
												</Icon1>
											</div>
										) : null}

										<Icon2> {props.priority} </Icon2>
										<Icon3>
											{" "}
											<AiOutlineDelete />{" "}
										</Icon3>
									</IconsPac>
								</BoxTwo>
							</ActNotBox>
						))}
					</div>
				)}

				<ToLineMin></ToLineMin>
			</Wrapper>
		</Container>
	);
};

export default NowActive;

const ImageHold = styled.div`
	background: rgba(225, 225, 225, 0.5);
	height: 400px;
	width: 400px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Image = styled.img`
	height: 250px;
	width: 250px;
	object-fit: cover;
	border-radius: 50%;
`;

const ContentHold = styled.div`
	min-height: calc(100vh - 210px);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-weight: bold;
`;

const ActiveText = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 80%;

	align-items: center;
	margin-top: 10px;
	font-size: 20px;
	font-weight: 800;

	@media screen and (max-width: 960px) {
		justify-content: center;
		margin-left: 0;
		margin-top: 50px;
	}
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	flex-wrap: wrap;
	/* background-color: brown; */
`;
const Wrapper = styled.div`
	width: 93%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column wrap;
`;
const ActiveTitleIcon = styled.div`
	width: 130px;
	/* background-color: green; */
	font-family: Fredoka One, cursive;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20px;
	font-size: 25px;
	margin-bottom: 20px;
`;
const ActivityContent = styled.div`
	width: 100%;
	/* background-color: blue; */
`;

const ToLine = styled.div`
	height: 2px;
	width: 100%;
	background: #ebebeb;
`;
const ToLineMin = styled.div`
	height: 2px;
	width: 93%;
`;

const ActNotBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ebebeb;
	margin: 10px;
`;
const BoxOne = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const IconType = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 20px;
	width: 20px;
	border-radius: 50%;
	background-color: #7f5af2;
`;
const ActionNotText = styled.div`
	margin-left: 10px;
`;
const MainText = styled.div`
	font-size: 16px;
	font-weight: 600;
`;
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
`;
const BoxTwo = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	flex-direction: column;
	margin-bottom: 8px;
`;
const LitText = styled.div`
	font-size: 14px;
`;
const IconsPac = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Icon1 = styled(NavLink)`
	height: 20px;
	width: 20px;
	background-color: #377dff;
	border-radius: 50%;
	color: #fff;
	font-size: 13px;
	font-weight: 800;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Icon2 = styled.div`
	height: 20px;
	width: 60px;
	background-color: #ffd700;
	border-radius: 100px;
	color: black;
	font-size: 13px;
	font-weight: 500;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 7px;
`;
const Icon3 = styled.div`
	height: 20px;
	width: 20px;
	background-color: #e90101;
	border-radius: 50%;
	color: #fff;
	font-size: 15px;
	font-weight: 800;
	display: flex;
	justify-content: center;
	align-items: center;
`;
