import { BsFillCreditCardFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaDropbox, FaBell } from "react-icons/fa6";
import { HiDocumentText } from "react-icons/hi2";

const Timeline = () => {
	const events = [
		{
			label: "$2400, Design changes",
			date: "22 DEC 7:20 PM",
			icon: <FaBell color="#4FD1C5" />,
		},
		{
			label: "New order #4219423",
			date: "21 DEC 11:21 PM",
			icon: <HiDocumentText color="#E53E3E" />,
		},
		{
			label: "Server Payments for April",
			date: "21 DEC 9:28 PM",
			icon: <FaShoppingCart color="#4299E1" />,
		},
		{
			label: "New card added for order #3210145",
			date: "20 DEC 3:52 PM",
			icon: <BsFillCreditCardFill color="#F6AD55" />,
		},
		{
			label: "Unlock packages for Development",
			date: "19 DEC 11:35 PM",
			icon: <FaDropbox color="#9F7AEA" />,
		},
		{
			label: "New order #9851258",
			date: "18 DEC 4:41 PM",
			icon: <HiDocumentText color="#470137" />,
		},
	];

	return (
		<ol role="list" className="details__timeline">
			{events.map((event, id) => (
				<li className="details__timeline-item" key={id}>
					<span className="details__timeline-icon">{event.icon}</span>

					<h3 className="details__timeline-label">{event.label}</h3>

					<time className="details__timeline-time">{event.date}</time>
				</li>
			))}
		</ol>
	);
};

export default Timeline;
