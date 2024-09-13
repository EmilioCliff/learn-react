import React from 'react';
import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
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

FeedbackStats.propTypes = {
	feedback: PropTypes.array.isRequired,
};
