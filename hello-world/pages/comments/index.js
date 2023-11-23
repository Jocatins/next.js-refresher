import { useState } from "react";

function CommentsPage() {
	const [comments, setComments] = useState([]);
	const [comment, setComment] = useState("");

	const fetchComments = async () => {
		const response = await fetch("/api/comments");
		const data = await response.json();
		setComments(data);
	};

	const submitHandler = async () => {
		const response = await fetch("/api/comments", {
			method: "POST",
			body: JSON.stringify({ comment }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		console.log(data);
	};

	const deleteComment = async (commentId) => {
		const response = await fetch(`/api/comments/${commentId}`, {
			method: "DELETE",
		});
		const data = await response.json();
		console.log(data);
		fetchComments();
	};

	return (
		<>
			<button onClick={fetchComments}>Load Comments</button>
			{comments.map((comment, index) => {
				return (
					<div key={index}>
						<h3>
							{comment.id} | {comment.text}
						</h3>
						<button onClick={() => deleteComment(comment.id)}>
							Delete Comment
						</button>
						<br />
					</div>
				);
			})}

			<input
				type="text"
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>
			<button onClick={submitHandler}>Submit Comment</button>
		</>
	);
}

export default CommentsPage;
