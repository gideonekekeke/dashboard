import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashHeader from "./DashComponents/DashHeader";
import DashHolder from "./DashComponents/DashHolder";

import ProjectsFile from "./Gideon/ProjectsFile";
import AllUsersPage from "./GoodLuck/AllUsersPage";
import NotificationPage from "./Judith/NotificationPage";
import ActivityPage from "./Olorunda/WorkSpace";
import SettingsPage from "./Romanus/SettingsPage";

function App() {
	return (
		<>
			<Router>
				<DashHeader />
				<DashHolder />
				<div style={{ marginLeft: "300px" }}>
					<Routes>
						<Route path='/' element={<ActivityPage />} />
						<Route path='/project' element={<ProjectsFile />} />
						<Route path='/notification' element={<NotificationPage />} />
						<Route path='/users' element={<AllUsersPage />} />
						<Route path='/settings' element={<SettingsPage />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
