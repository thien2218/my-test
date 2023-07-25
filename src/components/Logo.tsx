import { Link } from "react-router-dom";
import VandelayLogo from "../assets/logo/VandelayLogo";

const Logo = ({ variant }: { variant: "light" | "dark" }) => {
	const fill = variant === "light" ? "#FFFFFF" : "#2D3748";

	return (
		<Link to="/" style={{ display: "flex", alignItems: "center" }}>
			<VandelayLogo fill={fill} />
			<span className="font-bold ml-3">VANDELAY INDUSTRIES</span>
		</Link>
	);
};

export default Logo;
