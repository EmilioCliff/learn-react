import React from 'react';
import FeedbackItem from './FeedbackItem.jsx';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext.js';
import Spinner from './shared/Spinner.jsx';

function FeedbackList() {
	const { feedback, isLoading } = useContext(FeedbackContext);

	if (!isLoading && (!feedback || feedback.lenght === 0)) {
		return <p>No Feedback Yet</p>;
	}

	return isLoading ? (
		<Spinner />
	) : (
		<div className="feedback-list">
			{feedback.map((feedback, index) => (
				<FeedbackItem key={index} item={feedback} />
			))}
		</div>
	);
}

export default FeedbackList;
