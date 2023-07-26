import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Signup from "./components/pages/Signup";

function App() {
	return (
		<div className="p-6">
			<Routes>
				<Route path="/Signup" element={<Signup />} />
				<Route path="/" element={<Navigate to="/signup" />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
