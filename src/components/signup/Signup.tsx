import Footer from "../footer/Footer";
import Header from "../header/Header";

const Signup = () => {
	return (
		<div className="w-full relative text-secondary">
			<div className="w-full bg-primary absolute banner" />
			<div className="w-full auth-container">
				<Header />

				<h1 className="text-heading font-bold mb-2">Welcome!</h1>
				<p>
					Use these awesome forms to login or create new <br /> account in
					your project for free.
				</p>

				<Footer />
			</div>
		</div>
	);
};

export default Signup;
