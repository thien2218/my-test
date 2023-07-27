import { AppleIcon, FacebookIcon, GoogleIcon } from "../../assets/icon";

const RegisterWith = () => {
	return (
		<div className="flow-y-5">
			<h2 className="text-lg font-bold">Register with</h2>

			<div className="flex justify-center gap-4">
				<button
					type="button"
					className="text-xs font-bold bg-secondary rounded-lg p-5 border"
				>
					<FacebookIcon />
				</button>

				<button
					type="button"
					className="text-xs font-bold bg-secondary rounded-lg p-5 border"
				>
					<AppleIcon />
				</button>

				<button
					type="button"
					className="text-xs font-bold bg-secondary rounded-lg p-5 border"
				>
					<GoogleIcon />
				</button>
			</div>

			<p className="text-gray-400 font-bold text-lg">or</p>
		</div>
	);
};

export default RegisterWith;
