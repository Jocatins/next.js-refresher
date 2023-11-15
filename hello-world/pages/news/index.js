function NewsArticleList({ articles }) {
	return (
		<>
			<h3>List of News Articles</h3>
			{articles.map((article, index) => {
				return (
					<div key={index}>
						<h3>{article.id}</h3>
						<h3>{article.title}</h3>
						<h3>{article.description}</h3>
					</div>
				);
			})}
		</>
	);
}

export default NewsArticleList;

export async function getServerSideProps() {
	const response = await fetch("http://localhost:9090/news");
	const data = await response.json();

	return {
		props: {
			articles: data,
		},
	};
}
