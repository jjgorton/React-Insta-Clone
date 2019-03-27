import React from 'react';
import './CommentSection.css';

import Comment from './Comment';

class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comment : ''
		};
	}

	// addNewComment(e, index) {
	// 	const copy = this.state.commentArray.slice();
	// 	const newComment = {
	// 		id: index,
	// 		username: 'joshCodes',
	// 		text: e
	// 	};

	// 	copy.push(newComment);

	// 	this.setState({commentArray: copy});
	// };

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
			<div className="CommentSection">
				<div className="comment-icons">
					<i onClick={() => this.props.toggleItem(this.props.id)} className="far fa-heart" />
					<i className="far fa-comment" />
				</div>
				<div className="likes">
					<h3>{this.props.likes} likes</h3>
				</div>

				{this.props.commentArray.map((item) => <Comment key={item.id} comment={item} />)}

				<p className="time">{this.props.time}</p>

				<form onSubmit={this.submitComment} className="add-comment">
					<input
						type="text"
						placeholder="Add a comment..."
						value={this.state.comment}
						name="comment"
						onChange={this.handleChanges}
					/>
					<button>...</button>
				</form>

				{/* <form
					onSubmit={() => this.props.addNewComment(this.state.comment, this.props.id, this.props.allData)}
					className="add-comment"
				>
					<input
						type="text"
						placeholder="Add a comment..."
						value={this.state.comment}
						name="comment"
						onChange={this.handleChanges}
					/>
					<button>...</button>
				</form> */}
			</div>
		);
	}
}

export default CommentSection;
