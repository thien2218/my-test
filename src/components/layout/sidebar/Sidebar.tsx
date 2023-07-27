import { VandelayIcon } from "../../../assets/icon";
import NavItem from "../header/NavItem";

const Sidebar = () => {
	return (
		<div className="sidebar flex flex-column items-center">
			<NavItem to="/" icon={<VandelayIcon />} className="uppercase ml-3">
				Vandelay industry
			</NavItem>
		</div>
	);
};

export default Sidebar;
