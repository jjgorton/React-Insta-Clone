import React from 'react';
import './CommentSection.css';

const Comment = (props) => {
	return (
		<div className="Comment">
			<h4>{props.comment.username}</h4>
			<p>{props.comment.text}</p>
		</div>
	);
};

export default Comment;
