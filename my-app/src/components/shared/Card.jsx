import React from 'react';

function Card({ children, reverse = true }) {
	return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
}

export default Card;
