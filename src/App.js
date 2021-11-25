import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashHeader from "./DashComponents/DashHeader";
import DashHolder from "./DashComponents/DashHolder";
import WorkSpace from "./DashComponents/WorkSpace";

function App() {
	return (
		<>
			<Router>
				<DashHeader />
				<DashHolder />
				<Routes>
					<Route path='/' element={<WorkSpace />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
