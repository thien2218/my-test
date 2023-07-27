import { ReactNode } from "react";

type CardWrapperProps = {
	className: string;
	children: ReactNode;
};

const CardWrapper = ({ className, children }: CardWrapperProps) => {
	return (
		<div
			className={`bg-secondary rounded-lg w-full text-gray-700 shadow ${className}`}
		>
			{children}
		</div>
	);
};

export default CardWrapper;
