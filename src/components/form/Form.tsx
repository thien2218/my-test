import { ReactNode } from "react";
import Input, { InputProps } from "./Input";
import Card from "../card/Card";
import * as Switch from "@radix-ui/react-switch";
import * as Label from "@radix-ui/react-label";
import { Link } from "react-router-dom";

type FormProps = {
	children: ReactNode;
	fields: InputProps[];
	shadow: "shadow-none" | "shadow-lg";
};

const Form = ({ children, fields, shadow }: FormProps) => {
	return (
		<Card className={`p-9 ${shadow}`}>
			<form style={{ minWidth: "350px" }} className="flow-y-6 mx-4">
				{children}

				{fields.map((field) => (
					<Input {...field} />
				))}

				<div
					style={{
						textAlign: "start",
						display: "flex",
						alignItems: "center",
					}}
					className="mb-3 gap-2.5"
				>
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
					className="btn btn-primary w-full rounded py-4 px-2"
				>
					Sign up
				</button>

				<p>
					Already have an account?
					<Link to="/signin">
						<span className="font-bold text-primary"> Sign in</span>
					</Link>
				</p>
			</form>
		</Card>
	);
};

export default Form;
