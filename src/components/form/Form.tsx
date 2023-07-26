import { ReactNode } from "react";
import Input, { InputProps } from "./Input";
import Card from "../card/Card";

type FormProps = {
	children: ReactNode;
	fields: InputProps[];
	shadow: "shadow-none" | "shadow-lg";
};

const Form = ({ children, fields, shadow }: FormProps) => {
	return (
		<Card className={`p-9 ${shadow}`}>
			<div className="flow-y-6 my-2">
				{children}

				{fields.map((field) => (
					<Input {...field} />
				))}
			</div>
		</Card>
	);
};

export default Form;
