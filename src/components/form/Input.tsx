import * as Label from "@radix-ui/react-label";

export type InputProps = {
	id: string;
	placeholder: string;
	type?: "email" | "password" | "phone";
};

const Input = ({ id, placeholder, type }: InputProps) => {
	return (
		<div>
			<Label.Root htmlFor={id} className="input__label ml-1 mb-1.5">
				{id}
			</Label.Root>

			<input
				id={id}
				className="rounded-md px-5 py-4 w-full border"
				type={type ?? "text"}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
