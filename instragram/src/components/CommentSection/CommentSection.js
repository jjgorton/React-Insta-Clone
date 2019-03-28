import React from 'react';
import './CommentSection.css';

import Comment from './Comment';

import {
	CommentSectionWrapper,
	CommentIconsWrapper,
	LikesWrapper,
	Time,
	CommentForm,
	CommentInput,
	CommentButton
} from './CommentSectionStyle';

class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comment : ''
		};
	}

	handleChanges = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitComment = (e) => {
		e.preventDefault();
		// take the item off of state
		// send that item to a function defined on App.js
		this.props.addNewComment(this.state.comment, this.props.id);
		// reset the state
		this.setState({ comment: '' });
	};

	render() {
		return (
			<CommentSectionWrapper>
				<CommentIconsWrapper>
					<i onClick={() => this.props.addLike(this.props.id)} className="far fa-heart" />
					<i className="far fa-comment" />
				</CommentIconsWrapper>
				<LikesWrapper>
					<h3>{this.props.likes} likes</h3>
				</LikesWrapper>

				{this.props.commentArray.map((item) => <Comment key={item.id} comment={item} />)}

				<Time>{this.props.time}</Time>

				<CommentForm onSubmit={this.submitComment}>
					<CommentInput
						type="text"
						placeholder="Add a comment..."
						value={this.state.comment}
						name="comment"
						onChange={this.handleChanges}
					/>
					<CommentButton>...</CommentButton>
				</CommentForm>
			</CommentSectionWrapper>
		);
	}
}

export default CommentSection;
