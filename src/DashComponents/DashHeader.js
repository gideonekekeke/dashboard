import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Global/AuthContext";
const DashHeader = () => {
	const { currentData } = useContext(AuthContext);
	return (
		<Container>
			<ContentHold>
				<div>defghjk</div>

				<ImageHold>
					<Userimage src={currentData?.img} />
				</ImageHold>
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
const ButtonHold = styled(NavLink)`
	width: 150px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #377dff;
	color: white;
	border-radius: 5px;
	font-weight: bold;
	text-decoration: none;
`;
const Userimage = styled.img`
	height: 45px;
	width: 45px;
	background: silver;
	border-radius: 50%;
	margin-left: 10px;
	object-fit: cover;
	display: flex;
	justify-content: flex-end;
	border: 2px solid #377dff;
`;

const Container = styled.div`
	height: 70px;
	background: rgba(225, 225, 225, 0.5);
	width: 100%;
	display: flex;
	// justify-content: space-between;
	align-items: center;
`;

const ContentHold = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 95%;
`;
