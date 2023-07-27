import Articles from "../dashboard/Articles";
import Statistics from "../dashboard/Statistics";
import Summary from "../dashboard/Summary";
import Table from "../dashboard/Table";
import Layout from "../layout/Layout";

const Dashboard = () => {
	return (
		<Layout>
			<Summary />
			<Articles />
			<Statistics />
			<Table />
		</Layout>
	);
};

export default Dashboard;
