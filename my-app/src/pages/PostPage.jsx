import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

function PostPage() {
	const status = 200;

	const params = useParams();

	const navigate = useNavigate();

	const handleNavigate = () => {
		console.log('work before redirecting');
		navigate('/about');
	};

	if (status === 404) return <Navigate to="/" />;
	return (
		<div>
			<h1>Post {params.id}</h1>
			<p>Post {params.name}</p>
			<button onClick={handleNavigate}>Click To Redirect</button>
		</div>
	);
}

export default PostPage;
