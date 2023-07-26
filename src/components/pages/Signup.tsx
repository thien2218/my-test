import Footer from "../footer/Footer";
import Form from "../form/Form";
import { InputProps } from "../form/Input";
import RegisterWith from "../form/RegisterWith";
import Header from "../header/Header";

const Signup = () => {
	const fields: InputProps[] = [
		{
			id: "name",
			placeholder: "Your full name",
		},
		{
			id: "email",
			placeholder: "Your email address",
			type: "email",
		},
		{
			id: "password",
			placeholder: "Your password",
			type: "password",
		},
	];

	return (
		<div className="w-full relative text-secondary">
			<div className="banner w-full bg-primary absolute rounded-md" />
			<div className="w-full auth-container">
				<div className="py-4 w-full">
					<Header variant="light" />
				</div>

				<h1 className="text-heading font-bold mb-2 mt-5">Welcome!</h1>
				<p className="mb-4">
					Use these awesome forms to login or create new <br /> account in
					your project for free.
				</p>

				<div className="py-6 my-6 card-signup__container">
					<Form shadow="shadow-lg" fields={fields}>
						<RegisterWith />
					</Form>
				</div>

				<div className="py-4 w-full">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Signup;
