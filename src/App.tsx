import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import Dashboard from "./components/pages/Dashboard";
import Tables from "./components/pages/Tables";

function App() {
	return (
		<div className="p-6">
			<Routes>
				<Route path="/signup" element={<Signup />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/tables" element={<Tables />} />
				<Route path="/" element={<Navigate to="/signup" />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
