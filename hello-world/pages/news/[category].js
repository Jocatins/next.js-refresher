function ArticleListByCategory({ articles, category }) {
	return (
		<>
			<h3>
				New lists by category - <i>{category}</i>{" "}
			</h3>
			{articles.map((article, index) => {
				return (
					<div key={index}>
						<h3>
							{article.id} {article.title}
						</h3>
						<h4>{article.description}</h4>
					</div>
				);
			})}
		</>
	);
}
export default ArticleListByCategory;

export async function getServerSideProps(context) {
	const { params, req, res, query } = context;
	console.log(query);
	// console.log(req.headers.cookie);
	// res.setHeader("Set-Cookie", ["name=Titan"]);
	const { category } = params;

	const response = await fetch(
		`http://localhost:9090/news?category=${category}`
	);
	const data = await response.json();

	return {
		props: {
			articles: data,
			category,
		},
	};
}
