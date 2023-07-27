import Footer from "../layout/footer/Footer";
import Form from "../form/Form";
import { InputProps } from "../form/Input";
import WelcomeBack from "../form/WelcomeBack";
import Header from "../layout/header/Header";

const Signin = () => {
	const fields: InputProps[] = [
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
		<div className="signin w-full text-secondary">
			<div className="signin__banner bg-primary">
				<img
					className="signin__banner-image"
					src="/chakra-logo.png"
					alt="Chakra logo"
				/>
			</div>

			<div className="signin__container w-full">
				<Header variant="dark" />

				<div className="signin__form-container w-full">
					<Form formType="Sign in" fields={fields}>
						<WelcomeBack />
					</Form>
				</div>

				<div className="footer py-4">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Signin;
