import { ReactNode } from "react";

type IconWrapperProps = {
	isActive?: boolean;
	className: string;
	children: ReactNode;
};

const IconWrapper = ({ isActive, className, children }: IconWrapperProps) => {
	return (
		<div
			className={`${className} ${
				isActive ? "bg-primary text-secondary" : "bg-secondary text-primary"
			}`}
		>
			{children}
		</div>
	);
};

export default IconWrapper;
