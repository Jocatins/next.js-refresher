import { useState } from "react";
import { useRouter } from "next/router";

function EventList({ eventList }) {
	const [events, setEvents] = useState(eventList);
	const router = useRouter();

	const fetchSportsEvents = async () => {
		const response = await fetch(
			`http://localhost:9090/events?category=sports`
		);
		const data = await response.json();
		setEvents(data);
		router.push("/events?category=sports", undefined, { shallow: true });
	};

	return (
		<>
			<button onClick={fetchSportsEvents}>Sports Events</button>
			<h3>Lists of Events</h3>
			{events.map((event, index) => {
				return (
					<div key={index}>
						<h4>
							{event.id} {event.title} {event.date} |{" "}
							{event.category}{" "}
						</h4>
						<p>{event.description} </p>
						<hr />
					</div>
				);
			})}
		</>
	);
}

export default EventList;

export async function getServerSideProps(context) {
	const { query } = context;
	const { category } = query;
	const queryString = category ? "category=sports" : "";
	const response = await fetch(`http://localhost:9090/events?${queryString}`);
	const data = await response.json();

	return {
		props: {
			eventList: data,
		},
	};
}
