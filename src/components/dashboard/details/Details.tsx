import { BsCheckCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import CardWrapper from "../../wrapper/CardWrapper";
import { Table1 } from "./Table";
import Timeline from "./Timeline";
import { Link } from "react-router-dom";

const Details = () => {
	return (
		<div className="details gap-6">
			<CardWrapper className="py-4.5 px-6">
				<div className="details__title mt-2.5 mb-4">
					<div>
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

					<Link to="/tables" className="text-gray-400">
						<BsThreeDotsVertical />
					</Link>
				</div>

				<Table1 />
			</CardWrapper>

			<CardWrapper className="py-4.5 pl-5 pr-4.5">
				<div className="mt-2.5 mb-9">
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
