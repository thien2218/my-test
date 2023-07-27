import Footer from "../layout/footer/Footer";
import Form from "../form/Form";
import { InputProps } from "../form/Input";
import RegisterWith from "../form/RegisterWith";
import Header from "../layout/header/Header";

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
		<div className="signup w-full text-secondary">
			<div className="signup__banner w-full bg-primary rounded-lg" />

			<div className="signup__container w-full">
				<div className="w-full py-4">
					<Header variant="light" />
				</div>

				<h1 className="text-heading font-bold mb-2 mt-5">Welcome!</h1>
				<p className="mb-4">
					Use these awesome forms to login or create new <br /> account in
					your project for free.
				</p>

				<div className="signup__form-container w-full py-6 my-6">
					<Form formType="Sign up" fields={fields}>
						<RegisterWith />
					</Form>
				</div>

				<div className="w-full py-4">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Signup;
