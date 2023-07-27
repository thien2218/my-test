import { CgSearch } from "react-icons/cg";

const SearchInput = () => {
	return (
		<div className="flex items-center relative">
			<div className="flex items-center absolute h-full px-3 text-gray-700">
				<CgSearch />
			</div>

			<input
				id="search-bar"
				className="rounded-lg pl-9 pr-3 py-2.5 bg-secondary w-full border text-sm leading-tight"
				type="text"
				placeholder="Type here..."
			/>
		</div>
	);
};

export default SearchInput;
