import NavItem from "./NavItem";
import { BsBoxFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { HiMiniUserCircle } from "react-icons/hi2";
import { BiSolidKey } from "react-icons/bi";
import { VandelayLogo } from "../../../assets/icons";

type Variant = { variant: "light" | "dark" };

const Header = ({ variant }: Variant) => {
	const items = [
		{
			text: "dashboard",
			to: "dashboard",
			icon: <BsBoxFill size="11" />,
		},
		{
			text: "profile",
			icon: <FaUser size="10" />,
		},
		{
			text: "sign up",
			to: "signup",
			icon: <HiMiniUserCircle size="13" />,
		},
		{
			text: "sign in",
			to: "signin",
			icon: <BiSolidKey size="12" />,
		},
	];

	return (
		<nav
			className={`header px-6 py-4 rounded-lg ${
				variant === "light"
					? "text-secondary"
					: "header__background text-gray-700 shadow-lg"
			}`}
		>
			<NavItem className="uppercase ml-3" icon={<VandelayLogo />} to="/">
				Vandelay Industries
			</NavItem>

			<ul className="header__nav gap-7" role="list">
				{items.map((item, id) => (
					<li>
						<NavItem
							className="uppercase text-xs leading-tight ml-1"
							icon={item.icon}
							to={`/${item.to}`}
							key={id}
						>
							{item.text}
						</NavItem>
					</li>
				))}
			</ul>

			<button
				type="button"
				style={{ minWidth: "150px" }}
				className={`text-xs font-bold rounded-full px-2 py-2.5 ${
					variant === "light"
						? "bg-secondary"
						: "bg-gradient text-secondary"
				}`}
			>
				Free Download
			</button>
		</nav>
	);
};

export default Header;
