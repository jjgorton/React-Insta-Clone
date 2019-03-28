import React from 'react';
import './PostContainer.css';

import { PostWrapper, PostHeader, Thumbnail, User, MainImgContainer, MainImg } from './PostContainerStyle';

import CommentSection from '../CommentSection/CommentSection';

import PropTypes from 'prop-types';

const PostContainer = (props) => {
	return (
		<PostWrapper>
			<PostHeader>
				<Thumbnail src={props.posts.thumbnailUrl} alt={props.posts.username} />
				<User>{props.posts.username}</User>
			</PostHeader>

			<MainImgContainer>
				<MainImg src={props.posts.imageUrl} alt={props.posts.username} />
			</MainImgContainer>

			<CommentSection
				commentArray={props.posts.comments}
				time={props.posts.timestamp}
				likes={props.posts.likes}
				id={props.posts.id}
				addNewComment={props.addNewComment}
				allData={props.posts}
				addLike={props.addLike}
			/>
		</PostWrapper>
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
