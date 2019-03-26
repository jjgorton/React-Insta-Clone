import React from 'react';
import './CommentSection.css';

import Comment from './Comment';

const CommentSection = (props) => {
	return (
		<div className="CommentSection">
			<div className="comment-icons">
				<i class="far fa-heart" />
				<i class="far fa-comment" />
			</div>
			<div className="likes">
				<h3>{props.likes} likes</h3>
			</div>

			{props.commentArray.map((item) => <Comment key={item.id} comment={item} />)}

			<p className="time">{props.time}</p>

			<div className="add-comment">
				<input placeholder="Add a comment..." />
				<h3>...</h3>
			</div>
		</div>
	);
};

export default CommentSection;
