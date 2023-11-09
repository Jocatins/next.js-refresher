import { useRouter } from "next/router";

function Review() {
	const router = useRouter();
	const { productId, reviewId } = router.query;

	return (
		<>
			<h1>Details about the product {productId} </h1>
			<h1>Details about the review Id {reviewId} </h1>
		</>
	);
}
export default Review;
