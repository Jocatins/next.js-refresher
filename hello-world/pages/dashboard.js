import { useEffect, useState } from "react";

function Dashboard() {
	const [isLoading, setIsLoading] = useState(true);
	const [dashboardData, setDashboardData] = useState(null);

	useEffect(() => {
		async function fetchDashboardData() {
			const response = await fetch("http://localhost:9090/dashboard");
			const data = response.json();
			console.log(data);
			setDashboardData(data);
			setIsLoading(false);
		}
		fetchDashboardData();
	}, []);

	if (isLoading) {
		return <h3>Loading....</h3>;
	}
	return (
		<>
			<h3>Dashboard</h3>
			<h3>Post {dashboardData.posts}</h3>
			<h3>Likes {dashboardData.likes}</h3>
			<h3>Followers {dashboardData.followers}</h3>
			<h3>Post {dashboardData.posts}</h3>
		</>
	);
}

export default Dashboard;
