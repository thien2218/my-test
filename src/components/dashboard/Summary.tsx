import { FaGlobe, FaShoppingCart } from "react-icons/fa";
import CardWrapper from "../wrapper/CardWrapper";
import IconWrapper from "../wrapper/IconWrapper";
import { HiDocumentText } from "react-icons/hi2";
import { IoWallet } from "react-icons/io5";

const Summary = () => {
	const summary = [
		{
			title: "Today’s Money",
			total: "$53,000",
			percentage: 55,
			icon: <IoWallet size="20" />,
		},
		{
			title: "Today’s Users",
			total: "2,300",
			percentage: 5,
			icon: <FaGlobe size="20" />,
		},
		{
			title: "New Clients",
			total: "+3,052",
			percentage: -14,
			icon: <HiDocumentText size="20" />,
		},
		{
			title: "Total Sales",
			total: "$173,000",
			percentage: 8,
			icon: <FaShoppingCart size="20" />,
		},
	];

	return (
		<div className="dashboard__summary gap-6">
			{summary.map((item, id) => {
				let percentText;
				const isPositive = item.percentage > 0;
				const isNegative = item.percentage < 0;

				if (isPositive) {
					percentText = "+" + item.percentage + "%";
				} else if (isNegative) {
					percentText = item.percentage + "%";
				}

				return (
					<CardWrapper
						key={id}
						className="py-4.5 pl-5 pr-4.5 font-bold flex justify-between"
					>
						<div className="flex flex-column justify-between">
							<h2 className="text-gray-400 text-sm">{item.title}</h2>
							<p className="text-lg font-bold">
								{item.total}
								<span
									className={`font-bold text-base ml-1.5 ${
										isPositive
											? "text-success"
											: isNegative
											? "text-failure"
											: ""
									}`}
								>
									{percentText ?? ""}
								</span>
							</p>
						</div>

						<div className="shrink-0">
							<IconWrapper className="p-3" isActive>
								{item.icon}
							</IconWrapper>
						</div>
					</CardWrapper>
				);
			})}
		</div>
	);
};

export default Summary;
