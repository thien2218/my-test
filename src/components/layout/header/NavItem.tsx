import { Link } from "react-router-dom";
import { ReactNode } from "react";

type NavItemProps = {
	className: string;
	icon: ReactNode;
	children: string;
	to: string;
};

const NavItem = ({ className, children, to, icon }: NavItemProps) => {
	return (
		<Link to={to} className="flex items-center">
			{icon}
			<span className={`font-bold ${className}`}>{children}</span>
		</Link>
	);
};

export default NavItem;
