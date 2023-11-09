import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
	const router = useRouter();

	const handleClick = () => {
		alert("Navigation Successful");
		router.push("/product");
	};
	return (
		<>
			<h1>Home Page</h1>
			<Link href="/blog">
				<a>Blog</a>
			</Link>
			<br />
			<Link href="/product">
				<a>Products</a>
			</Link>
			<br />
			<button onClick={handleClick}>Place Order</button>
		</>
	);
}
export default Home;
