import { ReactNode } from "react";
import Input, { InputProps } from "./Input";
import CardWrapper from "../wrapper/CardWrapper";
import * as Switch from "@radix-ui/react-switch";
import * as Label from "@radix-ui/react-label";
import { Link } from "react-router-dom";

type FormProps = {
	children: ReactNode;
	fields: InputProps[];
	formType: "Sign up" | "Sign in";
};

const Form = ({ children, fields, formType }: FormProps) => {
	const shadow = formType === "Sign up" ? "shadow-lg" : "shadow-none";

	return (
		<CardWrapper className={`p-9 ${shadow}`}>
			<form className="form flow-y-6 mx-4">
				{children}

				{fields.map((field, id) => (
					<Input {...field} key={id} />
				))}

				<div className="mb-3 gap-2.5 switch__container">
					<Switch.Root
						className="switch rounded-full bg-primary"
						id="remember-me"
					>
						<Switch.Thumb className="switch__thumb rounded-full bg-secondary" />
					</Switch.Root>

					<Label.Root htmlFor="remember-me" className="text-sm">
						Remember me
					</Label.Root>
				</div>

				<button
					type="button"
					style={{ textTransform: "uppercase" }}
					className="text-xs font-bold text-secondary bg-primary w-full rounded py-4 px-2"
				>
					{formType}
				</button>

				<p className="text-gray-400">
					{formType === "Sign up" ? "Already" : "Don't"} have an account?
					<Link to="/signin">
						<span className="font-bold text-primary"> {formType}</span>
					</Link>
				</p>
			</form>
		</CardWrapper>
	);
};

export default Form;
