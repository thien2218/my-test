import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer w-full text-gray-400">
			<p>
				© 2022, Made with ❤️ by
				<span className="text-primary font-bold"> Tektorch</span> for a
				better web
			</p>

			<ul className="footer__list" style={{ gap: "52px" }} role="list">
				<li>
					<Link to="/">About Us</Link>
				</li>
				<li>
					<Link to="/">Privacy</Link>
				</li>
				<li>
					<Link to="/">Blog</Link>
				</li>
				<li>
					<Link to="/">License</Link>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
