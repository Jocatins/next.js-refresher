function Post({ post }) {
	return (
		<>
			<h3>
				{post.id} {post.title}
			</h3>
			<p>{post.body}</p>
			<hr />
		</>
	);
}

export default Post;

export async function getStaticProps(context) {
	const { params } = context;
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.postId}`
	);
	const data = response.json();

	return {
		props: {
			post: data,
		},
	};
}
