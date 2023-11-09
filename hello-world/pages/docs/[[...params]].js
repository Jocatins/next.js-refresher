import { useRouter } from "next/router";

function Docs() {
	const router = useRouter();
	const { params = [] } = router.query;
	console.log(params);

	if (params.length === 3) {
		return (
			<h1>
				Viewing docs for feature {params[0]} and the concept {params[1]}{" "}
				and luxury {params[2]}
			</h1>
		);
	} else if (params.length) {
		return <h1>Viewing docs for feature {params[0]}</h1>;
	}

	return <h1>Docs Page</h1>;
}
export default Docs;
