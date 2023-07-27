import CardWrapper from "../../wrapper/CardWrapper";
import SalesStats from "./SalesStats";
import UserStats from "./UserStats";

const Statistics = () => {
	return (
		<div className="statistics gap-6">
			<CardWrapper className="py-4.5 pl-5 pr-4.5 flow-y-6">
				<UserStats />
			</CardWrapper>

			<CardWrapper className="py-4.5 pl-5 pr-4.5">
				<div className="mt-2.5 mb-9">
					<h2 className="text-lg font-bold mb-1.5">Sales overview</h2>
					<p className="text-gray-400">
						<span className="text-success font-bold">(+5) more</span> in
						2021
					</p>
				</div>

				<SalesStats />
			</CardWrapper>
		</div>
	);
};

export default Statistics;
