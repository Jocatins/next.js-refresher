import { useRouter } from "next/router";

function Product({ product }) {
	const router = useRouter();

	if (router.isFallback) {
		return <h3>Loading ....</h3>;
	}
	return (
		<>
			<h3>
				{product.id} {product.title}
			</h3>
			<p>{product.body}</p>
			<hr />
		</>
	);
}

export default Product;

export async function getStaticProps(context) {
	const { params } = context;
	console.log(`Regenerating product ${params.productId} `);
	const response = await fetch(
		`http://localhost:9090/products/${params.productId}`
	);
	const data = await response.json();

	return {
		props: {
			product: data,
		},
		revalidate: 10,
	};
}

export async function getStaticPaths() {
	return {
		paths: [{ params: { productId: "1" } }],
		fallback: true,
	};
}
