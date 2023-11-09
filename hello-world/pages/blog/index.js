import Link from "next/link";

function Blog() {
	return (
		<>
			<h1>Blog Page</h1>
			<Link href="/">
				<button>Home</button>
			</Link>
		</>
	);
}
export default Blog;
