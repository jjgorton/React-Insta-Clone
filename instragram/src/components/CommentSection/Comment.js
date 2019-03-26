import React from 'react';
import './CommentSection.css';

import PropTypes from 'prop-types';

const Comment = (props) => {
	return (
		<div className="Comment">
			<h4>{props.comment.username}</h4>
			<p>{props.comment.text}</p>
		</div>
	);
};

Comment.propTypes = {
	comment : PropTypes.shape({
		id       : PropTypes.string.isRequired,
		username : PropTypes.string.isRequired,
		text     : PropTypes.string
	})
};

export default Comment;
