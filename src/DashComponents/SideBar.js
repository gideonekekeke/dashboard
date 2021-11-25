import React from "react";
import styled from "styled-components";
import SideBarToogle from "./SideBarToogle";
import { IoIosHome } from "react-icons/io";
import { IoIosStats } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
const SideBar = () => {
	const [showHome, setShowHome] = React.useState(false);
	const [showAbout, setShowAbout] = React.useState(false);

	const handleHome = () => {
		setShowHome(!showHome);
	};
	const handleAbout = () => {
		setShowAbout(!showAbout);
	};

	return (
		<div style={{ display: "flex" }}>
			<Container>
				<span> Logo</span>
				<TwoComp>
					<FirstHold>
						<MainComp>
							<span onClick={handleHome}>
								<IoIosHome />
							</span>
						</MainComp>
						<MainComp>
							<span>
								<IoIosStats />
							</span>
						</MainComp>
						<MainComp>
							<span>
								<MdNotifications />
							</span>
						</MainComp>
						<MainComp>
							<span>
								<BsPeopleFill />
							</span>
						</MainComp>
					</FirstHold>

					<SecondComp>
						<MainComp>
							<span>
								<AiFillSetting />
							</span>
						</MainComp>
					</SecondComp>
				</TwoComp>
			</Container>
			<SideBarToogle showAbout={showAbout} showHome={showHome} />
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

const MainComp = styled.div`
	margin-top: 5px;
	cursor: pointer;
	padding: 10px 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	transition: all 350ms;

	:hover {
		background: rgba(225, 225, 225, 0.3);
	}

	span {
		font-size: 20px;
	}
`;

const Container = styled.div`
	height: 100vh;
	width: 50px;
	background: #377dff;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	position: absolute;
	display: flex;
	flex-direction: column;
`;

const CompHold = styled.div``;
const FirstPart = styled.div``;
