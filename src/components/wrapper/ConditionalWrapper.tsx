import React from "react";

type ConditionalWrapperProps = {
	condition: boolean;
	wrapperIfTrue: React.ReactElement;
	wrapperIfFalse: React.ReactElement;
	children: React.ReactNode;
};

const ConditionalWrapper = ({
	condition,
	wrapperIfTrue,
	wrapperIfFalse,
	children,
}: ConditionalWrapperProps) =>
	condition
		? React.cloneElement(wrapperIfTrue, wrapperIfTrue.props, children)
		: React.cloneElement(wrapperIfFalse, wrapperIfFalse.props, children);

export default ConditionalWrapper;
