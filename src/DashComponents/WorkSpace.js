import React from "react";
import styled from "styled-components";
import { FiActivity } from "react-icons/fi";
import { BiTask } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
const WorkSpace = () => {
	return (
		<Container>
			<ButtonHolder>
				<ButtonHold1>
					{" "}
					<span>
						<FiActivity />
					</span>
					Activity
				</ButtonHold1>
				<ButtonHold>
					<span>
						<FaTasks />
					</span>
					MyTask
				</ButtonHold>
			</ButtonHolder>
		</Container>
	);
};

export default WorkSpace;

const ButtonHold1 = styled.div`
	width: 155px;
	height: 45px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #212429;
	color: white;
	border-radius: 5px;
	font-weight: bold;
	cursor: pointer;

	span {
		font-size: 20px;
		margin-right: 5px;
	}
`;
const ButtonHold = styled.div`
	width: 155px;
	height: 45px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #edfafe;
	color: black;
	border-radius: 5px;
	cursor: pointer;
	font-weight: bold;
	span {
		font-size: 20px;
		margin-right: 10px;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 10px;
`;

const ButtonHolder = styled.div`
	display: flex;
	justify-content: space-between;
	width: 340px;
`;
