import React from 'react';
import './CommentSection.css';

import Comment from './Comment';

const CommentSection = (props) => {
	return (
		<div className="CommentSection">
			{props.commentArray.map((item) => <Comment key={item.id} comment={item} />)}

			<p className="time">{props.time}</p>

			<input placeholder="Add a comment..." />
		</div>
	);
};

export default CommentSection;
