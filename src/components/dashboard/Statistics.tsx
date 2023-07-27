import { IoWallet } from "react-icons/io5";
import CardWrapper from "../wrapper/CardWrapper";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillTool } from "react-icons/ai";
import IconWrapper from "../wrapper/IconWrapper";

const Statistics = () => {
	const items = [
		{
			title: "Users",
			number: "32,984",
			progress: 0.66,
			icon: <IoWallet size="12" />,
		},
		{
			title: "Clicks",
			number: "2,42m",
			progress: 0.8,
			icon: <BsRocketTakeoffFill size="11" />,
		},
		{
			title: "Sales",
			number: "2,400$",
			progress: 0.33,
			icon: <FaShoppingCart size="11" />,
		},
		{
			title: "Items",
			number: "320",
			progress: 0.6,
			icon: <AiFillTool size="12" />,
		},
	];

	return (
		<div className="statistics gap-6">
			<CardWrapper className="py-4.5 pl-5 pr-4.5 flow-y-6">
				<div className="statistics__bar-chart p-8 bg-gradient rounded">
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

					<div className="bg-secondary rounded-full" />
					<div className="bg-secondary rounded-full" />
					<div className="bg-secondary rounded-full" />
					<div className="bg-secondary rounded-full" />
					<div className="bg-secondary rounded-full" />
				</div>

				<div>
					<h2 className="text-lg font-bold mb-1.5">Active Users</h2>
					<p className="text-gray-400">
						<span className="text-success font-bold">(+23)</span> than
						last week
					</p>
				</div>

				<ul role="list" className="statistic__summary mt-3">
					{items.map((item, id) => (
						<li key={id} className="statistic__summary-item flow-y-1.5">
							<div className="statistic__summary-text gap-2.5">
								<IconWrapper
									className="statistic__summary-icon rounded-sm"
									isActive
								>
									{item.icon}
								</IconWrapper>

								<span className="text-gray-400 font-bold text-sm">
									{item.title}
								</span>
							</div>

							<p className="text-lg font-bold">{item.number}</p>

							<div className="statistic__progress">
								<div style={{ width: `${item.progress * 100}%` }} />
							</div>
						</li>
					))}
				</ul>
			</CardWrapper>

			<CardWrapper className="py-4.5 pl-5 pr-4.5 flex flex-column">
				<div className="mb-9">
					<h2 className="text-lg font-bold mb-1.5">Sales overview</h2>
					<p className="text-gray-400">
						<span className="text-success font-bold">(+5) more</span> in
						2021
					</p>
				</div>

				<div style={{ flexGrow: 1 }} className="flex">
					<ul
						role="list"
						className="flow-y-3.5 text-gray-300 text-xs font-bold flex flex-column justify-between pb-6 mb-6"
					>
						<li>500</li>
						<li>400</li>
						<li>300</li>
						<li>200</li>
						<li>100</li>
						<li>0</li>
					</ul>

					<div className="flex flex-column">
						<img
							style={{ flexGrow: 1 }}
							src="/chart.png"
							className="w-full px-6"
							alt="Chart"
						/>

						<ul
							role="list"
							className="text-gray-300 text-xs font-bold flex justify-between px-6 mt-6"
						>
							<li>Jan</li>
							<li>Feb</li>
							<li>Mar</li>
							<li>Apr</li>
							<li>May</li>
							<li>Jun</li>
							<li>Jul</li>
							<li>Aug</li>
							<li>Sep</li>
							<li>Oct</li>
							<li>Nov</li>
							<li>Dec</li>
						</ul>
					</div>
				</div>
			</CardWrapper>
		</div>
	);
};

export default Statistics;
