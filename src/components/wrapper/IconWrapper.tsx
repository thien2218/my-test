import { ReactNode } from "react";

type IconWrapperProps = {
	isActive?: boolean;
	children: ReactNode;
};

const IconWrapper = ({ isActive, children }: IconWrapperProps) => {
	return (
		<div
			className={`p-2 rounded ${
				isActive ? "bg-primary text-secondary" : "bg-secondary text-primary"
			}`}
		>
			{children}
		</div>
	);
};

export default IconWrapper;
