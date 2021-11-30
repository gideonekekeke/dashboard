import React from "react";
import styled from "styled-components";
import { FiActivity } from "react-icons/fi";
import { BiTask } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import pic from "../img/2.svg";
const ActivityPage = () => {
	return (
		<Container>
			<ActiveText>
				{" "}
				<span>
					<FiActivity />
				</span>
				Activity
			</ActiveText>
			<ContentHold>
				<ImageHold>
					<Image src={pic} />
				</ImageHold>
				<div>No activity yet, invite people to get started</div>
			</ContentHold>
		</Container>
	);
};

export default ActivityPage;

const ContentHold = styled.div`
	min-height: calc(100vh - 210px);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-weight: bold;
`;
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

const ActiveText = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 80%;
	margin-left: 200px;
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
	flex-direction: column;
	margin-top: 10px;
`;

const ButtonHolder = styled.div`
	display: flex;
	justify-content: space-between;
	width: 340px;
`;
