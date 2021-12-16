import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
const HeaderView = () => {
	return (
		<Container>
			<UserLogo />
			<Link to='/signup'>
				{" "}
				<ButtonHold>Login</ButtonHold>
			</Link>
		</Container>
	);
};

export default HeaderView;

const Container = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	background: black;
	align-items: center;
`;
const UserLogo = styled.div`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: silver;
`;
const ButtonHold = styled.button`
	height: 40px;
	width: 150px;
	background: brown;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
`;
