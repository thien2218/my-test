import { BsApple, BsFacebook } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";

const RegisterWith = () => {
	return (
		<div className="flow-y-5">
			<h2 className="text-lg font-bold">Register with</h2>

			<div className="signup__regiter-with gap-4">
				<button
					type="button"
					className="text-xs font-bold bg-secondary rounded-lg p-5 border"
				>
					<BsFacebook size="28" />
				</button>

				<button
					type="button"
					className="text-xs font-bold bg-secondary rounded-lg p-5 border"
				>
					<BsApple size="28" />
				</button>

				<button
					type="button"
					className="text-xs font-bold bg-secondary rounded-lg p-5 border"
				>
					<FaGoogle size="28" />
				</button>
			</div>

			<p className="text-gray-400 font-bold text-lg">or</p>
		</div>
	);
};

export default RegisterWith;
