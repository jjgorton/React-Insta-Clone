import React from 'react';
import './CommentSection.css';

import { CommentWrapper, CommentUser } from './CommentSectionStyle';

import PropTypes from 'prop-types';

const Comment = (props) => {
	return (
		<CommentWrapper>
			<CommentUser>{props.comment.username}</CommentUser>
			<p>{props.comment.text}</p>
		</CommentWrapper>
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
