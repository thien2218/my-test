import { BsThreeDotsVertical } from "react-icons/bs";
import {
	tableIcon1,
	tableIcon2,
	tableIcon3,
	tableIcon4,
	tableIcon5,
	tableIcon6,
} from "../../../assets/icons";

export const Table1 = () => {
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
		<div className="table__container">
			<table className="table">
				<thead className="table__head">
					<tr className="table__row">
						<th scope="col" className="table__header">
							Companies
						</th>
						<th scope="col" className="table__header">
							Members
						</th>
						<th scope="col" className="table__header">
							Budget
						</th>
						<th scope="col" className="table__header">
							Completion
						</th>
					</tr>
				</thead>

				<tbody>
					{rows.map((row, id) => (
						<tr className="table__row" key={id}>
							<th scope="row" className="table__data">
								<div className="__flex-items-center">
									<img src={row.icon} alt={`Random icon ${id + 1}`} />
									<span>{row.header}</span>
								</div>
							</th>

							<td className="table__data">
								<div className="table__avatars">
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

							<td className="table__data">{row.budget}</td>

							<td className="table__data">
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

export const Table2 = () => {
	const rows = [
		{
			name: "Elaine Benes",
			email: "elaine@vandelay.com",
			photo: 1,
			function: "Organization",
			role: "Manager",
			status: "Online",
			employed: "14/06/21",
		},
		{
			name: "Sidra Holland",
			email: "sidra@vandelay.com",
			photo: 2,
			function: "Developer",
			role: "Programmer",
			status: "Offline",
			employed: "14/06/21",
		},
		{
			name: "Cosmo Kramer",
			email: "kramer@vandelay.com",
			photo: 3,
			function: "Projects",
			role: "Executive",
			status: "Online",
			employed: "14/06/21",
		},
		{
			name: "Newman",
			email: "newman@usps.com",
			photo: 4,
			function: "Organization",
			role: "Manager",
			status: "Online",
			employed: "14/06/21",
		},
		{
			name: "Frank Costanza",
			email: "frank@vandelay.com",
			photo: 5,
			function: "Developer",
			role: "Programmer",
			status: "Offline",
			employed: "14/06/21",
		},
		{
			name: "Art VanDelay",
			email: "art.ie@vandelay.com",
			photo: 6,
			function: "UI/UX Design",
			role: "Designer",
			status: "Offline",
			employed: "14/06/21",
		},
	];

	return (
		<div className="table__container">
			<table className="table">
				<thead className="table__head">
					<tr className="table__row">
						<th scope="col" className="table__header">
							Author
						</th>
						<th scope="col" className="table__header">
							Function
						</th>
						<th scope="col" className="table__header">
							Status
						</th>
						<th scope="col" className="table__header">
							Employed
						</th>
						<th scope="col" className="table__header"></th>
					</tr>
				</thead>

				<tbody>
					{rows.map((row, id) => (
						<tr className="table__row" key={id}>
							<th scope="row" className="table__data">
								<div className="__flex-items-center">
									<img
										style={{
											width: "40px",
											height: "40px",
											borderRadius: "0.5rem",
										}}
										src={`avatar${row.photo}.png`}
										alt={`Random user ${row.photo}`}
									/>
									<div>
										<p>{row.name}</p>
										<p className="font-base text-gray-400">
											{row.email}
										</p>
									</div>
								</div>
							</th>

							<td className="table__data">
								<p>{row.role}</p>
								<p className="font-base text-gray-400">
									{row.function}
								</p>
							</td>

							<td className="table__data">
								<div
									style={{ maxWidth: "max-content" }}
									className={`px-2.5 rounded-sm text-secondary ${
										row.status === "Online"
											? " bg-success"
											: "bg-gray-300"
									}`}
								>
									{row.status}
								</div>
							</td>

							<td className="table__data">
								<p className="font-bold">{row.employed}</p>
							</td>

							<td className="table__data">
								<button className="font-bold text-sm text-gray-400">
									Edit
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export const Table3 = () => {
	const rows = [
		{
			header: "Chakra Soft UI Version",
			icon: tableIcon1,
			status: "Working",
			budget: "$14,000",
			progress: 60,
		},
		{
			header: "Add Progress Track",
			icon: tableIcon2,
			status: "Canceled",
			budget: "$3,000",
			progress: 10,
		},
		{
			header: "Fix Platform Errors",
			icon: tableIcon3,
			status: "Done",
			budget: "Not set",
			progress: 100,
		},
		{
			header: "Launch our Mobile App",
			icon: tableIcon4,
			status: "Done",
			budget: "$32,000",
			progress: 100,
		},
		{
			header: "Add the New Pricing Page",
			icon: tableIcon5,
			status: "Working",
			budget: "$400",
			progress: 25,
		},
	];

	return (
		<div className="table__container">
			<table className="table">
				<thead className="table__head">
					<tr className="table__row">
						<th scope="col" className="table__header">
							Companies
						</th>
						<th scope="col" className="table__header">
							Members
						</th>
						<th scope="col" className="table__header">
							Budget
						</th>
						<th scope="col" className="table__header">
							Completion
						</th>
						<th scope="col" className="table__header"></th>
					</tr>
				</thead>

				<tbody>
					{rows.map((row, id) => (
						<tr className="table__row" key={id}>
							<th scope="row" className="table__data">
								<div className="__flex-items-center">
									<img src={row.icon} alt={`Random icon ${id + 1}`} />
									<span>{row.header}</span>
								</div>
							</th>

							<td className="table__data">{row.budget}</td>

							<td className="table__data">{row.status}</td>

							<td className="table__data">
								<p className="text-primary font-bold">
									{row.progress}%
								</p>
								<div className="progress">
									<div style={{ width: `${row.progress}%` }} />
								</div>
							</td>

							<td className="table__data">
								<button className="font-bold pl-8">
									<BsThreeDotsVertical />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
