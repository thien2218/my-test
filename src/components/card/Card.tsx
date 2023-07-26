import { ReactNode } from "react";

type CardProps = {
	className: string;
	children: ReactNode;
};

const Card = ({ className, children }: CardProps) => {
	return (
		<div
			className={`bg-secondary rounded-lg w-full text-gray-700 shadow ${className}`}
		>
			{children}
		</div>
	);
};

export default Card;
