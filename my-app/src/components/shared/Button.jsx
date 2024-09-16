import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, version = 'primary', type = 'button', disable = false }) {
	return (
		<button disabled={disable} type={type} className={`btn btn-${version}`}>
			{children}
		</button>
	);
}

Button.protoTypes = {
	children: PropTypes.node.isRequired,
	version: PropTypes.string,
	type: PropTypes.string,
	disable: PropTypes.bool,
};

export default Button;
