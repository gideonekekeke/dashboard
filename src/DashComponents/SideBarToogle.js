import React from "react";
import styled from "styled-components";
import { AiFillFolderOpen } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { MdSettingsInputComponent } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FiActivity } from "react-icons/fi";
import { FaGreaterThan } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
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

	return (
		<div>
			<SecondComp>
				{showHome && (
					<TextHold>
						<Text>Home</Text>
						<MainHold to='/'>
							<ButtonHold3>Create your workspace</ButtonHold3>
						</MainHold>

						<MainHold to='/'>
							<span onClick={handleTogglePro}>
								Growth Capital
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
							<>
								{" "}
								<ProHold>Shotkode project</ProHold>
								<ProHold>Udeme Kitchen</ProHold>
							</>
						) : null}
					</TextHold>
				)}
				{showProject && (
					<TextHold>
						<Text>WorkSpace</Text>
						<MainHolding>
							<span>
								{" "}
								Empty Project list, Click the Button below to get started
							</span>
						</MainHolding>
						<ButHold to='/proj'>
							<span>
								<ButtonHold>Create Project</ButtonHold>
							</span>
						</ButHold>
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

const ProHold = styled.div`
	font-size: 12px;
	margin-left: 30px;
	font-weight: bold;
	padding: 5px 10px;

	:hover {
		background: rgba(225, 225, 225, 0.7);
		cursor: pointer;
		transition: all 350ms;
		border-radius: 5px;
	}
`;

const ButtonHold3 = styled.div`
	width: 150px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #377dff;
	color: white;
	border-radius: 5px;
	font-weight: bold;
	font-size: 10px;
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
