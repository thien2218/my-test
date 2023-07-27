import { Link } from "react-router-dom";
import CardWrapper from "../../wrapper/CardWrapper";
import { BsArrowRightShort } from "react-icons/bs";
import MainArticle from "./MainArticle";

const Articles = () => {
	return (
		<div className="articles gap-6">
			<CardWrapper className="py-4.5 pl-5 pr-4.5">
				<MainArticle />
			</CardWrapper>

			<CardWrapper className="py-4.5 pl-5 pr-4.5">
				<div className="articles__sub-image rounded p-5 h-full w-full text-secondary">
					<div className="articles__sub-bg-dark" />

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
