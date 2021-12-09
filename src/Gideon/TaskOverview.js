import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import { SiTodoist } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { MdTaskAlt } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import FormControl from "@mui/material/FormControl";
import { Checkbox } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { FormControlLabel } from "@mui/material";
const TaskOverview = () => {
	const [checked, setChecked] = React.useState(false);
	const [progress, setProgress] = React.useState(10);

	const handleChanges = (event) => {
		setChecked(event.target.checked);
	};

	return (
		<Container>
			<Card>
				<HeaderPart>
					<Title>Agriculture Deploy</Title>
					<CancelHold>
						<ImCancelCircle />
					</CancelHold>
				</HeaderPart>
				<BoxHold>
					<Box1>
						<TitleHold>Feed The Cow</TitleHold>
						<ContentHold>
							<CheckBoxHolder>
								<FormControlLabel
									style={{ marginTop: "10px", fontSize: "15px" }}
									onChange={handleChanges}
									width='300px'
									label='A Terms and Conditions agreement or a Privacy Policy are legally binding agreements.'
									control={<Checkbox color='primary' checked={checked} />}
								/>
							</CheckBoxHolder>
							<AddHolder>
								<span>
									<MdAddBox />
								</span>
								<input placeholder='Set your progerss /  milestones' />
							</AddHolder>
							{checked ? (
								<ButtonHold1 bg='red'>Submit</ButtonHold1>
							) : (
								<ButtonHold1 disabled={true} bg='#cccccc'>
									Submit
								</ButtonHold1>
							)}
						</ContentHold>
						<But>
							<ButtonHold bg='#0F9D58'>
								{" "}
								<span style={{ marginTop: "5px", marginRight: "10px" }}>
									<MdTaskAlt />
								</span>
								Done
							</ButtonHold>
						</But>
					</Box1>

					<Box2>
						<TwoHold>
							<Holding>
								<FirstHold>status:</FirstHold>
								<FirstHold>AssignedTo:</FirstHold>
								<FirstHold>Priority:</FirstHold>
								<FirstHold>Progress:</FirstHold>
								<FirstHold>Deadline:</FirstHold>
								<FirstHold>Start/End:</FirstHold>
								<FirstHold>Description:</FirstHold>
							</Holding>
							<Holder>
								<SecondHold>
									{" "}
									<ButtonHold3 bg='#377dff'>
										{" "}
										<span
											style={{
												marginRight: "20px",
												fontSize: "20px",
												marginTop: "5px",
											}}>
											<SiTodoist />
										</span>
										Todo
									</ButtonHold3>
									<SecondText>
										<span>
											<FaUserCircle />
										</span>{" "}
										<span style={{ marginLeft: "10px" }}>
											{" "}
											GideonEkeke@gmail.com
										</span>
									</SecondText>
									<SecondText>
										<Prior></Prior>
										<span style={{ marginLeft: "10px" }}> High</span>
									</SecondText>
									<SecondText>
										<Box sx={{ width: "100px" }}>
											<LinearProgress variant='determinate' value={progress} />
										</Box>
										<span style={{ marginLeft: "10px" }}>{progress}%</span>
									</SecondText>
									<SecondText>Dec 04, 2021</SecondText>
									<SecondText>Nov 23 - Nov 27</SecondText>
									<SecondText>
										It is a long established fact that a reader will be
										distracted by the readable content of a page when looking at
										its layout.
									</SecondText>
								</SecondHold>
							</Holder>
						</TwoHold>
					</Box2>
				</BoxHold>
			</Card>
		</Container>
	);
};

export default TaskOverview;

const TitleHold = styled.div`
	margin: 10px;
	font-weight: bold;
	border-bottom: 1px solid silver;
`;

const CheckBoxHolder = styled.div`
	margin: 10px;
	padding-bottom: 20px;
`;

const But = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 500px;
`;

const ContentHold = styled.div`
	flex: 1;

	width: 100%;

	height: 350px;
	overflow-y: scroll;
`;

const AddHolder = styled.div`
	display: flex;
	margin: 10px; /* align-items: center; */ /* justify-content: center; */
	span {
		font-size: 20px;

		color: #377dff;
		cursor: pointer;
		padding: 0px 10px;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;

		:hover {
			background-color: rgba(225, 225, 225, 0.9);
		}
	}

	input {
		height: 20px;
		margin-left: 10px;
		width: 400px;
	}
`;
const Prior = styled.div`
	height: 10px;
	width: 10px;
	border-radius: 50%;
	background-color: #ffd700;
`;

const Holder = styled.div``;
const SecondText = styled.div`
	margin-top: 20px;
	font-size: 14px;
	display: flex;
	align-items: center;
`;
const Holding = styled.div``;

const ButtonHold1 = styled.button`
	width: 100px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ bg }) => bg};
	color: white;
	border-radius: 5px;
	font-weight: bold;
	font-size: 12px;
	border: none;
	outline: none;
	/* margin: 10px; */

	margin: 10px;
	margin-top: 30px;

	cursor: pointer;
`;
const ButtonHold = styled.div`
	width: 200px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ bg }) => bg};
	color: white;
	border-radius: 5px;
	font-weight: bold;
	font-size: 15px;
	/* margin: 10px; */
	margin-top: 10px;

	cursor: pointer;
`;
const ButtonHold3 = styled.div`
	width: 170px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ bg }) => bg};
	color: white;
	border-radius: 5px;
	font-weight: bold;
	font-size: 12px;
	/* margin: 10px; */
	margin-top: 10px;

	cursor: pointer;
`;

const TwoHold = styled.div`
	display: flex;
	width: 300px;
	margin: 10px;
	/* align-items: center; */
`;
const FirstHold = styled.div`
	margin: 10px;
	margin-top: 20px;
	color: gray;
`;
const SecondHold = styled.div`
	margin: 10px;
	margin-left: 50px;
`;

const BoxHold = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;
const Box1 = styled.div`
	flex: 1;
`;
const Box2 = styled.div`
	width: 540px;
	background-color: #eaf1fb;
	height: 500px;
	border-bottom-right-radius: 10px;
	border: 1px solid silver;
`;

const CancelHold = styled.div`
	margin-right: 40px;
	font-size: 20px;
	cursor: pointer;
`;
const Title = styled.div`
	margin-left: 10px;
	color: gray;
	font-weight: bold;
`;

const HeaderPart = styled.div`
	height: 50px;
	background: #eaf1fb;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
`;

const Container = styled.div`
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.5);
	height: 100vh;
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(2px);
`;

const Card = styled.div`
	height: 540px;
	width: 900px;
	background-color: white;
	border-radius: 5px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

// TaskOverview;
