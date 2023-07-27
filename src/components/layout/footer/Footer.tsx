const Footer = () => {
	return (
		<div className="w-full flex justify-between text-gray-400">
			<p>
				© 2022, Made with ❤️ by
				<span className="text-primary font-bold"> Tektorch</span> for a
				better web
			</p>

			<ul className="flex" style={{ gap: "52px" }} role="list">
				<li>
					<a href="/">About Us</a>
				</li>
				<li>
					<a href="/">Privacy</a>
				</li>
				<li>
					<a href="/">Blog</a>
				</li>
				<li>
					<a href="/">License</a>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
