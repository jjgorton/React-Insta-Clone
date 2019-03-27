import React from 'react';
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

import PropTypes from 'prop-types';

const PostContainer = (props) => {
	return (
		<div className="PostContainer">
			<div className="post-header">
				<img src={props.posts.thumbnailUrl} alt={props.posts.username} />
				<h2>{props.posts.username}</h2>
			</div>

			<div className="main-img-container">
				<img src={props.posts.imageUrl} alt={props.posts.username} />
			</div>

			<CommentSection
				commentArray={props.posts.comments}
				time={props.posts.timestamp}
				likes={props.posts.likes}
				id={props.posts.id}
				addNewComment={props.addNewComment}
				allData={props.posts}
				addLike={props.addLike}
			/>
		</div>
	);
};

PostContainer.propTypes = {
	posts : PropTypes.shape({
		id           : PropTypes.string.isRequired,
		username     : PropTypes.string.isRequired,
		thumbnailUrl : PropTypes.string,
		imageUrl     : PropTypes.string,
		likes        : PropTypes.number,
		timestamp    : PropTypes.string,
		comments     : PropTypes.arrayOf(
			PropTypes.shape({
				id       : PropTypes.string.isRequired,
				username : PropTypes.string.isRequired,
				text     : PropTypes.string
			})
		)
	})
};

export default PostContainer;
