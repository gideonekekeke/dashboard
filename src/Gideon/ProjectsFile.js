import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { SaveProjectId, ViewsideBarID } from "../Global/ReduxState";
import pic from "../img/pro.svg";

const ProjectsFile = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	dispatch(ViewsideBarID(id));

	console.log("sidebar", id);
	return (
		<Container>
			<ActiveTitleIcon>Projects</ActiveTitleIcon>
			<Wrapper>
				<ToLine></ToLine>

				<div>
					{" "}
					<ActiveText>
						{" "}
						<span></span>
					</ActiveText>
					<ContentHold>
						<ImageHold>
							<Image src={pic} />
						</ImageHold>
						<div style={{ marginTop: "10px" }}>
							This are your Project files, Click to open Project Task
						</div>
					</ContentHold>
				</div>
			</Wrapper>
		</Container>
	);
};

export default ProjectsFile;

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

const ContentHold = styled.div`
	min-height: calc(100vh - 210px);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-weight: bold;
`;

const ActiveText = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 80%;

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

const Container = styled.div`
	width: 100%;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	flex-wrap: wrap;
	/* background-color: brown; */
`;
const Wrapper = styled.div`
	width: 93%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column wrap;
`;
const ActiveTitleIcon = styled.div`
	width: 130px;
	/* background-color: green; */
	font-family: Fredoka One, cursive;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20px;
	font-size: 25px;
	margin-bottom: 20px;
`;
const ActivityContent = styled.div`
	width: 100%;
	/* background-color: blue; */
`;

const ToLine = styled.div`
	height: 2px;
	width: 100%;
	background: #ebebeb;
`;
const ToLineMin = styled.div`
	height: 2px;
	width: 93%;
`;

const ActNotBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ebebeb;
	margin: 10px;
`;
const BoxOne = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const IconType = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 20px;
	width: 20px;
	border-radius: 50%;
	background-color: #7f5af2;
`;
const ActionNotText = styled.div`
	margin-left: 10px;
`;
const MainText = styled.div`
	font-size: 16px;
	font-weight: 600;
`;
const SubText = styled.div`
	font-size: 10px;
`;
const ImgCir = styled.img`
	margin-left: 10px;
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background-color: brown;
	object-fit: cover;
`;
const BoxTwo = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	flex-direction: column;
	margin-bottom: 8px;
`;
const LitText = styled.div`
	font-size: 14px;
`;
const IconsPac = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Icon1 = styled(NavLink)`
	height: 20px;
	width: 20px;
	background-color: #377dff;
	border-radius: 50%;
	color: #fff;
	font-size: 13px;
	font-weight: 800;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Icon2 = styled.div`
	height: 20px;
	width: 60px;
	background-color: #ffd700;
	border-radius: 100px;
	color: black;
	font-size: 13px;
	font-weight: 500;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 7px;
`;
const Icon3 = styled.div`
	height: 20px;
	width: 20px;
	background-color: #e90101;
	border-radius: 50%;
	color: #fff;
	font-size: 15px;
	font-weight: 800;
	display: flex;
	justify-content: center;
	align-items: center;
`;
