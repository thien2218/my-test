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
	const textColor = variant === "light" ? "text-secondary" : "text-gray-700";

	return (
		<nav className="navbar px-6 py-4">
			<NavItem
				className={`ml-3 ${textColor}`}
				text="vandelay industries"
				to="/"
			>
				<VandelayIcon className={textColor} />
			</NavItem>

			<ul
				className="gap-7"
				style={{ display: "flex", alignItems: "center" }}
				role="list"
			>
				<li>
					<NavItem
						className={`text-xs leading-tight ml-1 ${textColor}`}
						text="dashboard"
						to="/dashboard"
					>
						<DashboardIcon className={textColor} />
					</NavItem>
				</li>

				<li>
					<NavItem
						className={`text-xs leading-tight ml-1 ${textColor}`}
						text="profile"
						to="/"
					>
						<ProfileIcon className={textColor} />
					</NavItem>
				</li>

				<li>
					<NavItem
						className={`text-xs leading-tight ml-1 ${textColor}`}
						text="sign up"
						to="/"
					>
						<SignupIcon className={textColor} />
					</NavItem>
				</li>

				<li>
					<NavItem
						className={`text-xs leading-tight ml-1 ${textColor}`}
						text="sign in"
						to="/"
					>
						<SigninIcon className={textColor} />
					</NavItem>
				</li>
			</ul>

			<button
				style={{ minWidth: "150px" }}
				className="btn btn-secondary rounded-full px-2 py-2.5"
			>
				Free Download
			</button>
		</nav>
	);
};

export default Header;
