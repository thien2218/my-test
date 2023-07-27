import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const MainArticle = () => {
	return (
		<div className="articles__main-card h-full">
			<div className="articles__main-card-text">
				<div className="flow-y-1">
					<h3 className="text-sm text-gray-400 font-bold">
						Built by developers
					</h3>
					<h2 className="text-lg font-bold">Purity UI Dashboard</h2>
					<p className="text-gray-400">
						From colors, cards, typography to complex elements, you will
						find the full documentation.
					</p>
				</div>

				<Link className="articles__read-more font-bold text-xs" to="/">
					<span className="mr-1">Read more</span>
					<BsArrowRightShort size="16" />
				</Link>
			</div>

			<div className="articles__main-image rounded" />
		</div>
	);
};

export default MainArticle;
