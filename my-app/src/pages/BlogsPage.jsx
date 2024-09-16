import React from 'react';
import { Routes, Route } from 'react-router-dom';

function BlogsPage() {
	return (
		<div>
			Blogs
			<Routes>
				<Route path="/show" element={<div>Hello World</div>} />
			</Routes>
		</div>
	);
}

export default BlogsPage;
