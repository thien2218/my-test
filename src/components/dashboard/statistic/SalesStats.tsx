const SalesStats = () => {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dev",
	];

	const numbers = [500, 400, 300, 200, 100, 0];

	return (
		<div className="statistics__sales">
			<ul
				role="list"
				className="text-gray-300 text-xs mr-6 pb-6 font-bold statistics__sales-y"
			>
				{numbers.map((number) => (
					<li key={number}>{number}</li>
				))}
			</ul>

			<div>
				<img src="/chart.png" alt="Chart" />

				<ul
					role="list"
					className="text-gray-300 text-xs font-bold statistics__sales-x mt-6"
				>
					{months.map((month) => (
						<li key={month}>{month}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SalesStats;
