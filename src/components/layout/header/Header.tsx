import {
	VandelayIcon,
	DashboardIcon,
	ProfileIcon,
	SignupIcon,
	SigninIcon,
} from "../../../assets/icon";
import NavItem from "./NavItem";

type Variant = { variant: "light" | "dark" };

const Header = ({ variant }: Variant) => {
	const items = [
		{
			text: "dashboard",
			to: "dashboard",
			icon: <DashboardIcon />,
		},
		{
			text: "profile",
			icon: <ProfileIcon />,
		},
		{
			text: "sign up",
			to: "signup",
			icon: <SignupIcon />,
		},
		{
			text: "sign in",
			to: "signin",
			icon: <SigninIcon />,
		},
	];

	return (
		<nav
			className={`flex justify-between px-6 py-4 rounded-lg ${
				variant === "light"
					? "text-secondary"
					: "header__background text-gray-700 shadow-lg"
			}`}
		>
			<NavItem className="uppercase ml-3" icon={<VandelayIcon />} to="/">
				Vandelay Industries
			</NavItem>

			<ul className="flex items-center gap-7" role="list">
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
