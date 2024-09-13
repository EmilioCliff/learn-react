import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

function FeedbackList({ feedbacks, handleDelete }) {
	if (!feedbacks || feedbacks.lenght === 0) {
		return <p>No Feedback Yet</p>;
	}

	return (
		<div className="feedback-list">
			{feedbacks.map((feedback, index) => (
				<FeedbackItem key={index} item={feedback} handleDelete={handleDelete} />
			))}
		</div>
	);
}

export default FeedbackList;

FeedbackList.propTypes = {
	feedbacks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
		})
	),
};
