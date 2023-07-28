import { IoDocumentText, IoHelpCircle } from "react-icons/io5";
import IconWrapper from "../../wrapper/IconWrapper";
import { Link } from "react-router-dom";

const HelpDoc = () => {
	return (
		<>
			<div className="sidebar__help-doc p-4 rounded-lg bg-primary w-full text-secondary">
				<IconWrapper className="sidebar__help-icon rounded">
					<IoHelpCircle size="24" />
				</IconWrapper>

				<p className="font-bold mt-5">
					Need help? <br />
					<span className="font-base text-sm">Please check our docs</span>
				</p>

				<button className="w-full bg-secondary rounded uppercase px-2 py-2.5 text-xs font-bold mt-2">
					<Link to="/">Documentation</Link>
				</button>

				<div className="sidebar__help-doc-ring">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>

			<Link to="/">
				<IconWrapper isActive className="sidebar__doc-icon rounded">
					<IoDocumentText />
				</IconWrapper>
			</Link>
		</>
	);
};

export default HelpDoc;
