import { BsCheckCircleFill } from "react-icons/bs";
import { Table2, Table3 } from "../dashboard/details/Table";
import Layout from "../layout/Layout";
import CardWrapper from "../wrapper/CardWrapper";

const Tables = () => {
	return (
		<Layout>
			<CardWrapper className="py-4.5 px-6">
				<div className="mt-2.5 mb-4">
					<h2 className="text-lg font-bold mb-1.5">Authors Table</h2>
				</div>

				<Table2 />
			</CardWrapper>

			<CardWrapper className="py-4.5 px-6">
				<div className="mt-2.5 mb-4">
					<h2 className="text-lg font-bold mb-1.5">Projects</h2>
					<div className="details__overview text-gray-400">
						<div className="text-success mr-1.5">
							<BsCheckCircleFill />
						</div>
						<p>
							<span className="font-bold">30 done</span> this month
						</p>
					</div>
				</div>

				<Table3 />
			</CardWrapper>
		</Layout>
	);
};

export default Tables;
