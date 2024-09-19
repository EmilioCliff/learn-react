import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
	return (
		<Card reverse={false}>
			<h2>This is in the about page</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo assumenda suscipit unde aperiam nostrum ut
				tenetur. Aliquid nostrum magnam dolorem commodi, doloribus soluta, necessitatibus modi voluptatem
				molestias omnis exercitationem incidunt!
			</p>
			<Link
				to={{
					pathname: '/',
				}}
			>
				Back To Home
			</Link>
		</Card>
	);
}

export default AboutPage;
