import {
	tableIcon1,
	tableIcon2,
	tableIcon3,
	tableIcon4,
	tableIcon5,
	tableIcon6,
} from "../../assets/icons";

const Table = () => {
	const rows = [
		{
			header: "Chakra Soft UI Version",
			icon: tableIcon1,
			members: [1, 2, 3, 4, 5],
			budget: "$14,000",
			progress: 60,
		},
		{
			header: "Add Progress Track",
			icon: tableIcon2,
			members: [2, 3],
			budget: "$3,000",
			progress: 10,
		},
		{
			header: "Fix Platform Errors",
			icon: tableIcon3,
			members: [2, 3],
			budget: "Not set",
			progress: 100,
		},
		{
			header: "Launch our Mobile App",
			icon: tableIcon4,
			members: [2, 3, 4, 5],
			budget: "$32,000",
			progress: 100,
		},
		{
			header: "Add the New Pricing Page",
			icon: tableIcon5,
			members: [1, 2, 3, 4, 5],
			budget: "$400",
			progress: 25,
		},
		{
			header: "Redesign New Online Shop",
			icon: tableIcon6,
			members: [3, 4],
			budget: "$7,600",
			progress: 40,
		},
	];

	return (
		<div className="details__table-container">
			<table className="details__table">
				<thead className="details__table-head">
					<tr className="details__table-row">
						<th scope="col" className="details__table-header">
							Companies
						</th>
						<th scope="col" className="details__table-header">
							Members
						</th>
						<th scope="col" className="details__table-header">
							Budget
						</th>
						<th scope="col" className="details__table-header">
							Completion
						</th>
					</tr>
				</thead>

				<tbody>
					{rows.map((row, id) => (
						<tr className="details__table-row" key={id}>
							<th scope="row" className="details__table-data">
								<div className="__flex-items-center">
									<img src={row.icon} alt={`Random icon ${id + 1}`} />
									<span>{row.header}</span>
								</div>
							</th>
							<td className="details__table-data">
								<div className="details__table-avatars">
									{row.members.map((member, id) => (
										<img
											className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
											src={`/avatar${member}.png`}
											alt={`Member ${member}`}
											key={id}
										/>
									))}
								</div>
							</td>
							<td className="details__table-data">{row.budget}</td>
							<td className="details__table-data">
								<p className="text-primary font-bold">
									{row.progress}%
								</p>
								<div className="progress">
									<div style={{ width: `${row.progress}%` }} />
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
