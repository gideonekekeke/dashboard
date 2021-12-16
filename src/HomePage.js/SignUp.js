import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import firebase from "firebase";
import { app } from "../Base";
const SignUp = () => {
	const navigate = useNavigate();

	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const SignUpUser = async () => {
		await app.auth().signInWithEmailAndPassword(email, password);
		navigate("/");
	};

	return (
		<div>
			<Container>
				<Wrapper>
					<Text>Register</Text>
					<Card>
						<input
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							placeholder='Email'
						/>
						<input
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							placeholder='Password'
						/>
						<ButtonHold onClick={SignUpUser} cl='white' bg=' #377dff'>
							Login
						</ButtonHold>
					</Card>
					<Text>
						Already Have an Account ?{" "}
						<Link style={{ textDecoration: "none", color: "red" }} to='/signup'>
							<span
								style={{ color: "red", cursor: "pointer", fontWeight: "bold" }}>
								Sign up
							</span>
						</Link>
					</Text>
				</Wrapper>
			</Container>
		</div>
	);
};

export default SignUp;

const ButtonHold = styled.button`
	width: 150px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ bg }) => bg};
	color: ${({ cl }) => cl};
	border-radius: 5px;
	font-weight: bold;
	text-decoration: none;
	transition: all 350ms;
	margin-bottom: 50px;
	margin-top: 20px;
	border: none;
	cursor: pointer;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-top: 200px;
`;
const ImageInput = styled.input`
	display: none;
`;

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 70px);
	background: silver;
`;
const Text = styled.div`
	margin-bottom: 50px;
`;
const Card = styled.div`
	min-width: 500px;
	min-height: 300px;
	border: 1px solid gray;
	/* justify-content: center; */
	align-items: center;
	flex-direction: column;
	display: flex;

	input {
		height: 35px;
		width: 80%;
		padding-left: 10px;
		margin: 3px;
	}
`;
const ImageLabel = styled.label`
	padding: 10px 20px;
	color: white;
	transition: all 350ms;
	transform: scale(1);
	background: #377dff;
	border-radius: 10px;
	cursor: pointer;

	:hover {
		transform: scale(0.94);
	}
`;
const Image = styled.img`
	height: 100px;
	width: 100px;
	border-radius: 50%;
	border: 1px solid black;
	margin-top: 10px;
	margin-bottom: 20px;
`;
