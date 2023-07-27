import { ReactNode } from "react";
import Breadcrumps from "./header/Breadcrumps";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex gap-8">
			<Sidebar />
			<div className="w-full">
				<Breadcrumps />
				<div className="py-7 flow-y-6">{children}</div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
