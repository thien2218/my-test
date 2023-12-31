import { useLocation } from "react-router-dom";
import { IoHome, IoStatsChart } from "react-icons/io5";
import CardWrapper from "../../wrapper/CardWrapper";
import ConditionalWrapper from "../../wrapper/ConditionalWrapper";
import IconWrapper from "../../wrapper/IconWrapper";
import NavItem from "../header/NavItem";
import * as Separator from "@radix-ui/react-separator";
import { FaUser } from "react-icons/fa6";
import { AiFillTool } from "react-icons/ai";
import { HiDocument } from "react-icons/hi2";
import { BsFillCreditCardFill, BsRocketTakeoffFill } from "react-icons/bs";
import HelpDoc from "./HelpDoc";
import { VandelayLogo } from "../../../assets/icons";

const Sidebar = () => {
	const location = useLocation();

	const navItems = [
		{
			to: "/dashboard",
			text: "Dashboard",
			icon: <IoHome size="16" />,
		},
		{
			to: "/tables",
			text: "Tables",
			icon: <IoStatsChart size="16" />,
		},
		{
			to: "/",
			text: "Billing",
			icon: <BsFillCreditCardFill size="14" />,
		},
		{
			to: "/",
			text: "RTL",
			icon: <AiFillTool size="16" />,
		},
	];

	const accountNavItems = [
		{
			to: "/",
			text: "Profile",
			icon: <FaUser size="14" />,
		},
		{
			to: "/signin",
			text: "Sign in",
			icon: <HiDocument size="15" />,
		},
		{
			to: "/signup",
			text: "Sign up",
			icon: <BsRocketTakeoffFill size="14" />,
		},
	];

	return (
		<div className="sidebar flow-y-6 mt-5">
			<NavItem
				to="/"
				icon={<VandelayLogo />}
				className="uppercase ml-3 sidebar__logo"
			>
				Vandelay industry
			</NavItem>

			<Separator.Root className="separator w-full" />

			<nav className="flow-y-6 mb-9">
				<ul className="sidebar__nav" role="list">
					{navItems.map((item, id) => {
						const isActive = location.pathname === item.to;
						return (
							<li className="text-sm" key={id}>
								<ConditionalWrapper
									condition={isActive}
									wrapperIfTrue={<CardWrapper className="p-3" />}
									wrapperIfFalse={
										<div className="p-3 text-gray-400" />
									}
								>
									<NavItem
										to={item.to}
										icon={
											<IconWrapper
												className="sidebar__nav-icon rounded"
												isActive={isActive}
											>
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

				<p className="uppercase font-bold text-sm">Account pages</p>

				<ul className="sidebar__nav" role="list">
					{accountNavItems.map((item, id) => {
						const isActive = location.pathname === item.to;
						return (
							<li className="text-sm" key={id}>
								<ConditionalWrapper
									condition={isActive}
									wrapperIfTrue={<CardWrapper className="p-3" />}
									wrapperIfFalse={
										<div className="p-3 text-gray-400" />
									}
								>
									<NavItem
										to={item.to}
										icon={
											<IconWrapper
												className="sidebar__nav-icon rounded"
												isActive={isActive}
											>
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

			<HelpDoc />
		</div>
	);
};

export default Sidebar;
