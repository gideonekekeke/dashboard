import React from "react";
import styled from "styled-components";

const DashHeader = () => {
	return (
		<Container>
			<ContentHold>
				<div></div>
				<Holding>
					<ButtonHold>New Projects</ButtonHold>
					<ButtonHold>New Task</ButtonHold>
					<ImageHold>
						{" "}
						<Userimage />
					</ImageHold>
				</Holding>
			</ContentHold>
		</Container>
	);
};

export default DashHeader;

const ImageHold = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Holding = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	justify-content: space-between;
	width: 400px;
	cursor: pointer;
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
const Userimage = styled.div`
	height: 40px;
	width: 40px;
	background: silver;
	border-radius: 50%;
	margin-left: 10px;
`;

const Container = styled.div`
	height: 70px;
	background: rgba(225, 225, 225, 0.5);
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ContentHold = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-right: 50px;
`;
