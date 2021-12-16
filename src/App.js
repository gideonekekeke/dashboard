import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashHeader from "./DashComponents/DashHeader";
import DashHolder from "./DashComponents/DashHolder";

import CreateProjects from "./Gideon/CreateProjects";
import CreateTask from "./Gideon/CreateTask";
import ExploreTask from "./Gideon/ExploreTask";

import ProjectsFile from "./Gideon/ProjectsFile";
import TaskOverview from "./Gideon/TaskOverview";
import WorkSpace from "./Gideon/WorkSpace";
import { AuthContext } from "./Global/AuthContext";
import { PrivateRoute } from "./Global/PrivateRoute";
import AllUsersPage from "./GoodLuck/AllUsersPage";

import HomePage from "./HomePage.js/HomePage";
import LandingPage from "./HomePage.js/LandingPage";
import SignUp from "./HomePage.js/SignUp";
import NotificationPage from "./Judith/NotificationPage";
import ActivityPage from "./Olorunda/ActivityPage";
import NowActive from "./Olorunda/NowActive";
import SettingsPage from "./Romanus/SettingsPage";

function App() {
	const { currentUser } = useContext(AuthContext);

	return (
		<>
			<Router>
				{currentUser ? (
					<div>
						<DashHeader />
						<DashHolder />
					</div>
				) : (
					<div>
						{" "}
						<Routes>
							{" "}
							<Route path='/' element={<LandingPage />} />
							<Route path='/signup' element={<HomePage />} />
							<Route path='/login' element={<SignUp />} />
						</Routes>
					</div>
				)}

				<div style={{ marginLeft: "300px" }}>
					{" "}
					<Routes>
						<Route
							path='/'
							element={
								<PrivateRoute>
									<NowActive />
								</PrivateRoute>
							}
						/>
						<Route
							path='/workspace'
							element={
								<PrivateRoute>
									<WorkSpace />
								</PrivateRoute>
							}
						/>

						<Route
							path='/project/:id'
							element={
								<PrivateRoute>
									<ProjectsFile />
								</PrivateRoute>
							}
						/>
						<Route
							path='/notification'
							element={
								<PrivateRoute>
									<NotificationPage />
								</PrivateRoute>
							}
						/>
						<Route
							path='/users'
							element={
								<PrivateRoute>
									<AllUsersPage />
								</PrivateRoute>
							}
						/>
						<Route
							path='/exploreTask/:id'
							element={
								<PrivateRoute>
									<ExploreTask />
								</PrivateRoute>
							}
						/>

						<Route
							path='/settings'
							element={
								<PrivateRoute>
									<SettingsPage />
								</PrivateRoute>
							}
						/>
						<Route
							path='/proj/:id'
							element={
								<PrivateRoute>
									<CreateProjects />
								</PrivateRoute>
							}
						/>
						<Route
							path='/task/:id'
							element={
								<PrivateRoute>
									<CreateTask />
								</PrivateRoute>
							}
						/>
						<Route
							path='/steps/:id'
							element={
								<PrivateRoute>
									<TaskOverview />
								</PrivateRoute>
							}
						/>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
