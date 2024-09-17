import { React, useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
	const { addFeedback, feedbackEdit, updateFeedbackItem } = useContext(FeedbackContext);
	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(false);
	const [message, setMessage] = useState('');

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false);
			setText(feedbackEdit.item.text);
			setRating(feedbackEdit.item.edit);
		}
	}, [feedbackEdit]);

	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== '' && text.trim().length <= 10) {
			setMessage('text must be at leat 10 characters');
			setBtnDisabled(true);
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newFeedback = {
			text: text,
			rating: rating,
		};

		if (feedbackEdit.edit === true) {
			updateFeedbackItem(feedbackEdit.item.id, newFeedback);
		} else {
			addFeedback(newFeedback);
		}

		setText('');
		setRating(10);
	};
	return (
		<Card reverse={false}>
			<h2>What is your rating?</h2>
			<RatingSelect
				select={(rating) => {
					setRating(rating);
				}}
			/>
			<form onSubmit={handleSubmit}>
				<div className="input-group">
					<input onChange={handleTextChange} type="text" value={text} placeholder="Enter rating" />
					<Button version="secondary" type="submit" disable={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className="message">{message}</div>}
			</form>
		</Card>
	);
}

export default FeedbackForm;
