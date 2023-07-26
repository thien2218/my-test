import { AppleIcon, FacebookIcon, GoogleIcon } from "../../assets/Icons";

const RegisterWith = () => {
	return (
		<div className="flow-y-5">
			<h2 className="text-lg font-bold">Register with</h2>

			<div className="flex justify-center gap-4">
				<button
					type="button"
					className="text-xs font-bold bg-secondary rounded-md p-5 border"
				>
					<FacebookIcon className="text-gray-700" />
				</button>

				<button
					type="button"
					className="text-xs font-bold bg-secondary rounded-md p-5 border"
				>
					<AppleIcon className="text-gray-700" />
				</button>

				<button
					type="button"
					className="text-xs font-bold bg-secondary rounded-md p-5 border"
				>
					<GoogleIcon className="text-gray-700" />
				</button>
			</div>

			<p className="text-gray-400 font-bold text-lg">or</p>
		</div>
	);
};

export default RegisterWith;
