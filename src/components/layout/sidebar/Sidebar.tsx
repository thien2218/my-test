import { useLocation } from "react-router-dom";
import {
	BillingIcon,
	DocumentIcon,
	HomeIcon,
	ProfileIconBig,
	RocketIcon,
	RtlIcon,
	TablesIcon,
	VandelayIcon,
} from "../../../assets/icon";
import CardWrapper from "../../wrapper/CardWrapper";
import ConditionalWrapper from "../../wrapper/ConditionalWrapper";
import IconWrapper from "../../wrapper/IconWrapper";
import NavItem from "../header/NavItem";
import * as Separator from "@radix-ui/react-separator";
import HelpIcon from "../../../assets/icon/HelpIcon";

const Sidebar = () => {
	const location = useLocation();

	const navItems = [
		{
			to: "/dashboard",
			text: "Dashboard",
			icon: <HomeIcon />,
		},
		{
			to: "/tables",
			text: "Tables",
			icon: <TablesIcon />,
		},
		{
			to: "/",
			text: "Billing",
			icon: <BillingIcon />,
		},
		{
			to: "/",
			text: "RTL",
			icon: <RtlIcon />,
		},
	];

	const accountNavItems = [
		{
			to: "/",
			text: "Profile",
			icon: <ProfileIconBig />,
		},
		{
			to: "/signin",
			text: "Sign in",
			icon: <DocumentIcon />,
		},
		{
			to: "/signup",
			text: "Sign up",
			icon: <RocketIcon />,
		},
	];

	return (
		<div
			style={{ width: "240px" }}
			className="flex flex-column items-center flow-y-6"
		>
			<NavItem to="/" icon={<VandelayIcon />} className="uppercase ml-3">
				Vandelay industry
			</NavItem>

			<Separator.Root className="separator w-full" />

			<nav className="flow-y-6 mb-9">
				<ul style={{ width: "220px" }} role="list">
					{navItems.map((item, id) => {
						const isActive = location.pathname === item.to;
						return (
							<li className="text-sm" key={id}>
								<ConditionalWrapper
									condition={isActive}
									wrapperIfTrue={<CardWrapper className="py-3 px-4" />}
									wrapperIfFalse={
										<div className="py-3 px-4 text-gray-400" />
									}
								>
									<NavItem
										to={item.to}
										icon={
											<IconWrapper isActive={isActive}>
												{item.icon}
											</IconWrapper>
										}
										className="ml-3"
									>
										{item.text}
									</NavItem>
								</ConditionalWrapper>
							</li>
						);
					})}
				</ul>

				<p className="uppercase font-bold ml-4 text-sm">Account pages</p>

				<ul style={{ width: "220px" }} role="list">
					{accountNavItems.map((item, id) => {
						const isActive = location.pathname === item.to;
						return (
							<li className="text-sm" key={id}>
								<ConditionalWrapper
									condition={isActive}
									wrapperIfTrue={<CardWrapper className="py-3 px-4" />}
									wrapperIfFalse={
										<div className="py-3 px-4 text-gray-400" />
									}
								>
									<NavItem
										to={item.to}
										icon={
											<IconWrapper isActive={isActive}>
												{item.icon}
											</IconWrapper>
										}
										className="ml-3"
									>
										{item.text}
									</NavItem>
								</ConditionalWrapper>
							</li>
						);
					})}
				</ul>
			</nav>

			<div
				style={{ overflow: "hidden" }}
				className="p-4 rounded-lg bg-primary w-full text-secondary relative"
			>
				<div className="p-1.5 rounded bg-secondary shadow-none text-primary inline-block">
					<HelpIcon />
				</div>

				<p className="font-bold mt-5">
					Need help? <br />
					<span className="font-base text-sm">Please check our docs</span>
				</p>

				<button className="w-full rounded uppercase px-2 py-2.5 text-xs font-bold mt-2">
					Documentation
				</button>

				<div className="ring">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
