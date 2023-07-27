import { BsCheckCircleFill } from "react-icons/bs";
import CardWrapper from "../wrapper/CardWrapper";

const Table = () => {
	return (
		<div className="dashboard__tables gap-6">
			<CardWrapper className="py-4.5 pl-5 pr-4.5">
				<div className="mb-7">
					<h2 className="text-lg font-bold mb-1.5">Projects</h2>
					<p className="text-gray-400">
						<span className="text-success">
							<BsCheckCircleFill />
						</span>{" "}
						<span className="font-bold">30 done</span> this month
					</p>
				</div>

				<div className="table-container">
					<table className="table">
						<thead className="table-head">
							<tr>
								<th scope="col" className="table-header">
									Product name
								</th>
								<th scope="col" className="table-header">
									Color
								</th>
								<th scope="col" className="table-header">
									Category
								</th>
								<th scope="col" className="table-header">
									Price
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="table-row">
								<th scope="row" className="table-row-header">
									Apple MacBook Pro 17"
								</th>
								<td className="table-data">Silver</td>
								<td className="table-data">Laptop</td>
								<td className="table-data">\$2999</td>
							</tr>
						</tbody>
					</table>
				</div>
			</CardWrapper>

			<CardWrapper className="py-4.5 pl-5 pr-4.5"></CardWrapper>
		</div>
	);
};

export default Table;
