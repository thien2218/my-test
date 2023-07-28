import CardWrapper from "../../wrapper/CardWrapper";
import MainArticle from "./MainArticle";
import SubArticle from "./SubArticle";

const Articles = () => {
	return (
		<div className="articles gap-6">
			<CardWrapper className="py-4.5 pl-5 pr-4.5">
				<MainArticle />
			</CardWrapper>

			<CardWrapper className="py-4.5 pl-5 pr-4.5">
				<SubArticle />
			</CardWrapper>
		</div>
	);
};

export default Articles;
