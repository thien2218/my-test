import Footer from "../footer/Footer";
import Form from "../form/Form";
import { InputProps } from "../form/Input";
import WelcomeBack from "../form/WelcomeBack";
import Header from "../header/Header";

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
		<div className="w-full relative text-secondary">
			<div className="signin__banner bg-primary absolute flex items-center justify-center">
				<img
					style={{ maxWidth: "40%" }}
					src="/chakra-logo.png"
					alt="Chakra logo"
				/>
			</div>

			<div className="signin__container w-full">
				<Header variant="dark" />

				<div
					style={{ marginTop: "200px", marginBottom: "200px" }}
					className="signin__form-container w-full"
				>
					<Form formType="Sign in" fields={fields}>
						<WelcomeBack />
					</Form>
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default Signin;
