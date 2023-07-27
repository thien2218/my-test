import Articles from "../dashboard/article/Articles";
import Statistics from "../dashboard/statistic/Statistics";
import Summary from "../dashboard/summary/Summary";
import Details from "../dashboard/details/Details";
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
