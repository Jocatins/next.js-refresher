import Link from "next/link";

function Home() {
	return (
		<>
			<h1>Learning Next Js Pre-rendering</h1>
			<Link href="/users">
				<a>Users</a>
			</Link>
			<br />
			<Link href="/posts">
				<a>Posts</a>
			</Link>
			<br />
			<Link href="/products">
				<a>Products</a>
			</Link>
			<br />
			<Link href="/dashboard">
				<a>Dashboard</a>
			</Link>
			<br />
			<Link href="/events">
				<a>Events</a>
			</Link>
		</>
	);
}
export default Home;
