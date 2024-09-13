import React, { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/feedback';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	const deleteFeedback = (id) => {
		setFeedback(feedback.filter((item) => item.id !== id));
	};

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedbacks={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}

export default App;
