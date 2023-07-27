import { BsCheckCircleFill } from "react-icons/bs";
import CardWrapper from "../wrapper/CardWrapper";
import Table from "./Table";
import Timeline from "./Timeline";

const Details = () => {
	return (
		<div className="details gap-6">
			<CardWrapper className="py-4.5 px-6">
				<div className="mb-7">
					<h2 className="text-lg font-bold mb-1.5">Projects</h2>
					<p className="text-gray-400">
						<span className="text-success">
							<BsCheckCircleFill />
						</span>{" "}
						<span className="font-bold">30 done</span> this month
					</p>
				</div>

				<Table />
			</CardWrapper>

			<CardWrapper className="py-4.5 pl-5 pr-4.5">
				<div className="mb-9">
					<h2 className="text-lg font-bold mb-1.5">Orders overview</h2>
					<p className="text-gray-400">
						<span className="text-success font-bold">+30</span> this month
					</p>
				</div>

				<Timeline />
			</CardWrapper>
		</div>
	);
};

export default Details;
