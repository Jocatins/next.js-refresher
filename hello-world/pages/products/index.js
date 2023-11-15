import Link from "next/link";

function ProductList({ products }) {
	return (
		<>
			<h1>List of Posts</h1>

			{products.map((product) => {
				return (
					<div key={product.id}>
						<Link href={`/products/${product.id}`}>
							<h3>
								{product.id}- {product.title}
							</h3>
						</Link>
					</div>
				);
			})}
		</>
	);
}
export default ProductList;

export async function getStaticProps() {
	console.log("Generating | Regenerating ProductList");
	const response = await fetch("http://localhost:9090/products");
	const data = await response.json();
	// console.log(data);
	return {
		props: {
			products: data,
		},
		revalidate: 30,
	};
}
