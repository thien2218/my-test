import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const SubArticle = () => {
	return (
		<div className="articles__sub-image rounded p-5 h-full w-full text-secondary">
			<div className="articles__sub-bg-dark" />

			<div className="flow-y-1">
				<h2 className="text-lg font-bold">Work with the Rockets</h2>
				<p>
					Wealth creation is an evolutionarily recent positive-sum game. It
					is all about who take the opportunity first.
				</p>
			</div>

			<Link className="articles__read-more font-bold text-xs" to="/">
				<span className="mr-1">Read more</span>
				<BsArrowRightShort size="16" />
			</Link>
		</div>
	);
};

export default SubArticle;
