import Articles from "../dashboard/Articles";
import Statistics from "../dashboard/Statistics";
import Summary from "../dashboard/Summary";
import Details from "../dashboard/Details";
import Layout from "../layout/Layout";

const Dashboard = () => {
	return (
		<Layout>
			<Summary />
			<Articles />
			<Statistics />
			<Details />
		</Layout>
	);
};

export default Dashboard;
