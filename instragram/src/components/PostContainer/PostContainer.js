import React from 'react';
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
	return (
		<div className="PostContainer">
			<div className="post-header">
				<img src={props.posts.thumbnailUrl} alt={props.posts.username} />
				<h2>{props.posts.username}</h2>
			</div>

			<img src={props.posts.imageUrl} alt={props.posts.username} />

			<div className="likes">
				<h3>{props.posts.likes} likes</h3>
			</div>

			<CommentSection commentArray={props.posts.comments} time={props.posts.timestamp} />

			{/* {console.log(props.posts.timestamp)} */}

			<p className="time">{props.posts.timestamp}</p>
		</div>
	);
};

export default PostContainer;
