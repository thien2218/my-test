import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/404/NotFound";
import Signup from "./components/signup/Signup";

function App() {
	return (
		<div className="p-6">
			<Routes>
				<Route path="/Signup" element={<Signup />} />
				<Route path="/" element={<Navigate to="/Signup" />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
