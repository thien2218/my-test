import { Link } from "react-router-dom";
import { ReactNode } from "react";

type NavItemProps = {
	className: string;
	children: ReactNode;
	to: string;
	text: string;
};

const NavItem = ({ className, children, to, text }: NavItemProps) => {
	return (
		<Link to={to} style={{ display: "flex", alignItems: "center" }}>
			{children}
			<span className={`navbar__item ${className}`}>{text}</span>
		</Link>
	);
};

export default NavItem;