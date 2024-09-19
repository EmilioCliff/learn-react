import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
	const { feedback } = useContext(FeedbackContext);
	let averange =
		feedback.reduce((acc, cur) => {
			return acc + cur.rating;
		}, 0) / feedback.length;

	averange = averange.toFixed(1).replace(/[.,]0$/, '');

	return (
		<div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>Averange Ratting: {isNaN(averange) ? 0 : averange}</h4>
		</div>
	);
}

export default FeedbackStats;
