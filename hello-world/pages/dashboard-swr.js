import useSWR from "swr";

const fetcher = async () => {
	const response = await fetch("http://localhost:9090/dashboard");
	const data = await response.json();
	return data;
};

function DashboardSWR() {
	const { data, error } = useSWR("dashboard", fetcher);

	if (error) return "An error has occurred";
	if (!data) return "Loading.....";

	return (
		<>
			<h3>Dashboard</h3>
			<h3>Post {data.posts}</h3>
			<h3>Likes {data.likes}</h3>
			<h3>Followers {data.followers}</h3>
			<h3>Post {data.posts}</h3>
		</>
	);
}

export default DashboardSWR;
