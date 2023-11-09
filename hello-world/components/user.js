function User({ user }) {
	return (
		<>
			<p>{user.name}</p>
			<p>{user.email}</p>
			<p>{user.city}</p>
		</>
	);
}
export default User;
