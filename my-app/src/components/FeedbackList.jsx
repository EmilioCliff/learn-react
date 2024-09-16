import React from 'react';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext.js';

function FeedbackList() {
	const { feedback } = useContext(FeedbackContext);

	if (!feedback || feedback.lenght === 0) {
		return <p>No Feedback Yet</p>;
	}

	return (
		<div className="feedback-list">
			{feedback.map((feedback, index) => (
				<FeedbackItem key={index} item={feedback} />
			))}
		</div>
	);
}

export default FeedbackList;
