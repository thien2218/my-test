import { ReactNode } from "react";
import Breadcrumps from "./header/Breadcrumps";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
	const location = useLocation();

	return (
		<div className="flex gap-8">
			<Sidebar />
			<div className="w-full">
				<Breadcrumps pathname={location.pathname} />
				<div className="py-7 flow-y-6">{children}</div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
