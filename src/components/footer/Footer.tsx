const Footer = () => {
	return (
		<div className="w-full footer">
			<p>
				© 2022, Made with ❤️ by
				<span className="text-primary font-bold">Tektorch</span> for a
				better web
			</p>

			<ul className="footer__nav" role="list">
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
