import { BellIcon, ProfileIcon, SettingsIcon } from "../../../assets/icon";
import SearchInput from "../../form/SearchInput";
import NavItem from "./NavItem";

const Breadcrumps = ({ pathname }: { pathname: string }) => {
	const pageName = pathname.replace("/", "");

	return (
		<div className="flex justify-between items-start px-3">
			<div className="mt-2.5">
				<nav>
					<ol role="list" className="inline-flex items-center">
						<li className="text-gray-400">Pages</li>
						<span className="mx-2">/</span>
						<li className="capitalize">{pageName}</li>
					</ol>
				</nav>

				<h1 className="font-bold mt-1.5 capitalize">{pageName}</h1>
			</div>

			<div className="flex items-center gap-4.5 text-gray-500">
				<SearchInput />

				<NavItem
					icon={<ProfileIcon />}
					to="/signin"
					className="text-sm leading-none ml-1"
				>
					Sign In
				</NavItem>

				<NavItem
					icon={<SettingsIcon />}
					to="/"
					className="text-sm leading-none ml-1"
				/>

				<NavItem
					icon={<BellIcon />}
					to="/"
					className="text-sm leading-none ml-1"
				/>
			</div>
		</div>
	);
};

export default Breadcrumps;
