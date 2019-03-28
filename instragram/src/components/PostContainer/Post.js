import React from 'react';
import './PostsPage.css';

import PostContainer from './PostContainer';

const Post = (props) => {
	return (
		<div>
			{props.data.map((item) => (
				<PostContainer key={item.id} posts={item} addNewComment={this.addNewComment} addLike={this.addLike} />
			))}
		</div>
	);
};

export default Post;
