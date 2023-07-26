import {
	VandelayIcon,
	DashboardIcon,
	ProfileIcon,
	SignupIcon,
	SigninIcon,
} from "../../assets/Icons";
import NavItem from "./NavItem";

type Variant = { variant: "light" | "dark" };

const Header = ({ variant }: Variant) => {
	return (
		<nav
			className={`flex justify-between px-6 py-4 rounded-md ${
				variant === "light"
					? "text-secondary"
					: "header__background text-gray-700 shadow-lg"
			}`}
		>
			<NavItem className="ml-3" text="vandelay industries" to="/">
				<VandelayIcon />
			</NavItem>

			<ul className="flex items-center gap-7" role="list">
				<li>
					<NavItem
						className="text-xs leading-tight ml-1"
						text="dashboard"
						to="/dashboard"
					>
						<DashboardIcon />
					</NavItem>
				</li>

				<li>
					<NavItem
						className="text-xs leading-tight ml-1"
						text="profile"
						to="/"
					>
						<ProfileIcon />
					</NavItem>
				</li>

				<li>
					<NavItem
						className="text-xs leading-tight ml-1"
						text="sign up"
						to="/signup"
					>
						<SignupIcon />
					</NavItem>
				</li>

				<li>
					<NavItem
						className="text-xs leading-tight ml-1"
						text="sign in"
						to="/signin"
					>
						<SigninIcon />
					</NavItem>
				</li>
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
