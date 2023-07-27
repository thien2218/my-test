import { Link } from "react-router-dom";
import CardWrapper from "../wrapper/CardWrapper";
import { ArrowRightIcon } from "../../assets/icon";

const Articles = () => {
	return (
		<div className="dashboard__intro gap-6">
			<CardWrapper className="py-4.5 pl-5 pr-4.5">
				<div className="flex justify-between">
					<div className="flex flex-column justify-between">
						<div style={{ maxWidth: "330px" }} className="flow-y-1">
							<h2 className="text-sm text-gray-400 font-bold">
								Built by developers
							</h2>
							<h3 className="text-lg font-bold">Purity UI Dashboard</h3>
							<p className="text-gray-400">
								From colors, cards, typography to complex elements, you
								will find the full documentation.
							</p>
						</div>

						<Link className="flex items-center font-bold text-xs" to="/">
							<span className="mr-1">Read more</span>
							<ArrowRightIcon />
						</Link>
					</div>

					<div className="dashboard__chakra-background rounded" />
				</div>
			</CardWrapper>

			<CardWrapper className="py-4.5 pl-5 pr-4.5">
				<div className="flex flex-column justify-between h-full relative text-secondary">
					{/* <div className="dashboard__article-background absolute rounded h-full w-full" /> */}

					<div style={{ maxWidth: "330px" }} className="flow-y-1">
						<h2 className="text-lg font-bold">Work with the Rockets</h2>
						<p>
							Wealth creation is an evolutionarily recent positive-sum
							game. It is all about who take the opportunity first.
						</p>
					</div>

					<Link className="flex items-center font-bold text-xs" to="/">
						<span className="mr-1">Read more</span>
						<ArrowRightIcon />
					</Link>
				</div>
			</CardWrapper>
		</div>
	);
};

export default Articles;
