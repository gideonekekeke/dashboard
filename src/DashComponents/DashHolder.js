import React from "react";
import DashHeader from "./DashHeader";
import SideBar from "./SideBar";
import styled from "styled-components";

const DashHolder = () => {
	return (
		<Container>
			<SideBar />
			{/* <DashHeader/> */}
		</Container>
	);
};

export default DashHolder;

const Container = styled.div`
	display: flex;
	width: 100%;
	// background : red
`;
