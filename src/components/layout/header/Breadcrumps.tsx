import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdSettings } from "react-icons/md";
import SearchInput from "../../form/SearchInput";
import NavItem from "./NavItem";

const Breadcrumps = ({ pathname }: { pathname: string }) => {
	const pageName = pathname.replace("/", "");

	return (
		<div className="breadcrumps px-3">
			<div className="mt-2.5">
				<nav>
					<ol role="list" className="breadcrumps__item">
						<li className="text-gray-400">Pages</li>
						<span className="mx-2">/</span>
						<li className="capitalize">{pageName}</li>
					</ol>
				</nav>

				<h1 className="font-bold mt-1.5 capitalize">{pageName}</h1>
			</div>

			<div className="breadcrumps__nav gap-4.5 text-gray-500">
				<SearchInput />

				<NavItem
					icon={<FaUser size="11" />}
					to="/signin"
					className="text-sm leading-none ml-1"
				>
					Sign In
				</NavItem>

				<NavItem
					icon={<MdSettings />}
					to="/"
					className="text-sm leading-none ml-1"
				/>

				<NavItem
					icon={<FaBell size="12" />}
					to="/"
					className="text-sm leading-none ml-1"
				/>
			</div>
		</div>
	);
};

export default Breadcrumps;
