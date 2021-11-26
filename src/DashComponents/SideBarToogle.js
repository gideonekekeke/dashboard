import React from "react";
import styled from "styled-components";
import { AiFillFolderOpen } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
const SideBarToogle = ({ showHome, showAbout }) => {
	return (
		<div>
			{showHome && (
				<SecondComp>
					<TextHold>
						<Text>Home</Text>
						<MainHold>
							<span>
								<AiFillFolderOpen />
							</span>
							WorkSpace
						</MainHold>
						<MainHold>
							<span>
								<FaTasks />
							</span>
							MyTask
						</MainHold>
						<MainHold>
							<span>
								<FaRegCalendarAlt />
							</span>
							Calendar
						</MainHold>
					</TextHold>
				</SecondComp>
			)}
		</div>
	);
};

export default SideBarToogle;

const TextHold = styled.div`
	margin-left: 20px;
	margin-top: 10px;
`;
const Text = styled.div`
	font-weight: bold;
`;
const MainHold = styled.div`
	margin-top: 17px;
	display: flex;

	align-items: center;
	padding: 10px 0px;
	font-weight: bold;

	:hover {
		background: rgba(225, 225, 225, 0.7);
		cursor: pointer;
		transition: all 350ms;
		border-radius: 5px;
	}

	span {
		margin-right: 10px;
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
