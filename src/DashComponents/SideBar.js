import React from "react";
import styled from "styled-components";
import SideBarToogle from "./SideBarToogle";
import { IoIosHome } from "react-icons/io";
import { IoIosStats } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { FaSuitcase } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBar = () => {
	const [showHome, setShowHome] = React.useState(true);
	const [showProject, setShowProject] = React.useState(false);
	const [showUsers, setShowUsers] = React.useState(false);
	const [showSettings, setShowSettings] = React.useState(false);
	const [showNotification, setShowNotitcation] = React.useState(false);

	const handleHome = () => {
		setShowHome(true);
		setShowProject(false);
		setShowUsers(false);
		setShowSettings(false);
		setShowNotitcation(false);
	};
	const handleProject = () => {
		setShowProject(true);
		setShowHome(false);
		setShowUsers(false);
		setShowSettings(false);
		setShowNotitcation(false);
	};
	const handleUsers = () => {
		setShowProject(false);
		setShowHome(false);
		setShowUsers(true);
		setShowSettings(false);
		setShowNotitcation(false);
	};
	const handleSetting = () => {
		setShowProject(false);
		setShowHome(false);
		setShowUsers(false);
		setShowSettings(true);
		setShowNotitcation(false);
	};
	const handleNotification = () => {
		setShowProject(false);
		setShowHome(false);
		setShowUsers(false);
		setShowSettings(false);
		setShowNotitcation(true);
	};

	return (
		<div style={{ display: "flex" }}>
			<Container>
				<span
					style={{
						fontSize: "13px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						color: "white",
						fontWeight: "bold",
						marginTop: "10px",
					}}>
					{" "}
					Simple
				</span>
				<TwoComp>
					<FirstHold>
						<MainComp to='/'>
							<span>
								<IoIosHome onClick={handleHome} />
							</span>
						</MainComp>
						<MainComp to='/project'>
							<span>
								<FaSuitcase onClick={handleProject} />
							</span>
						</MainComp>
						<MainComp to='/notification'>
							<span>
								<MdNotifications onClick={handleNotification} />
							</span>
						</MainComp>
						<MainComp to='/users'>
							<span>
								<BsPeopleFill onClick={handleUsers} />
							</span>
						</MainComp>
					</FirstHold>

					<SecondComp>
						<MainComp to='/settings'>
							<span>
								<AiFillSetting onClick={handleSetting} />
							</span>
						</MainComp>
					</SecondComp>
				</TwoComp>
			</Container>
			<SideBarToogle
				showHome={showHome}
				showProject={showProject}
				showUsers={showUsers}
				showSettings={showSettings}
				showNotification={showNotification}
			/>
		</div>
	);
};

export default SideBar;

const FirstHold = styled.div`
	margin-top: 15px;
`;

const TwoComp = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 95%;
`;
const SecondComp = styled.div`
	padding-top: -20px;
`;

const MainComp = styled(NavLink)`
	margin-top: 5px;
	cursor: pointer;
	padding: 10px 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	transition: all 350ms;
	text-decoration: none;

	&.active {
		background: rgba(225, 225, 225, 0.3);
	}

	:hover {
		background: rgba(225, 225, 225, 0.3);
	}

	span {
		font-size: 20px;
	}
`;

const Container = styled.div`
	height: 100%;
	width: 50px;
	background: #377dff;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	position: absolute;
	display: flex;
	flex-direction: column;
	position: fixed;
`;

const CompHold = styled.div``;
const FirstPart = styled.div``;
