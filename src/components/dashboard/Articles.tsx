import { Link } from "react-router-dom";
import CardWrapper from "../wrapper/CardWrapper";
import { BsArrowRightShort } from "react-icons/bs";

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
							<BsArrowRightShort size="16" />
						</Link>
					</div>

					<div className="dashboard__chakra-background rounded" />
				</div>
			</CardWrapper>

			<CardWrapper className="py-4.5 pl-5 pr-4.5">
				<div className="dashboard__article-background rounded p-5 flex flex-column justify-between h-full w-full relative text-secondary">
					<div className="dashboard__article-background-dark absolute" />

					<div
						style={{ maxWidth: "330px", zIndex: "2" }}
						className="flow-y-1"
					>
						<h2 className="text-lg font-bold">Work with the Rockets</h2>
						<p>
							Wealth creation is an evolutionarily recent positive-sum
							game. It is all about who take the opportunity first.
						</p>
					</div>

					<Link
						style={{ zIndex: "2" }}
						className="flex items-center font-bold text-xs"
						to="/"
					>
						<span className="mr-1">Read more</span>
						<BsArrowRightShort size="16" />
					</Link>
				</div>
			</CardWrapper>
		</div>
	);
};

export default Articles;
