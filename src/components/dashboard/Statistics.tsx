import CardWrapper from "../wrapper/CardWrapper";

const Statistics = () => {
	return (
		<div className="dashboard__charts gap-6">
			<CardWrapper className="py-4.5 pl-5 pr-4.5 flow-y-6">
				<div className="dashboard__charts-bar p-8 bg-gradient rounded flex justify-between items-end">
					<ul
						role="list"
						className="flow-y-3.5 text-secondary text-xs font-bold"
					>
						<li>500</li>
						<li>400</li>
						<li>300</li>
						<li>200</li>
						<li>100</li>
						<li>0</li>
					</ul>

					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>

				<div>
					<h2 className="text-lg font-bold mb-1.5">Active Users</h2>
					<p className="text-gray-400">
						<span className="text-success font-bold">(+23)</span> than
						last week
					</p>
				</div>
			</CardWrapper>

			<CardWrapper className="py-4.5 pl-5 pr-4.5"></CardWrapper>
		</div>
	);
};

export default Statistics;
