import styled, { css } from 'styled-components';

export const CommentSectionWrapper = styled.div`width: 95%;`;

export const CommentIconsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 70px;
`;

export const LikesWrapper = styled.div`
	font-size: 16px;
	font-weight: bold;
	padding: 10px 0;
`;

export const Time = styled.p`
	color: gray;
	font-size: 12px;
	padding: 7px 0;
`;

export const CommentForm = styled.form`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	border-top: 1px solid rgb(202, 202, 202);
	margin: 10px 0;
`;

export const CommentInput = styled.input`
	width: 90%;
	height: 95%;
	border: none;
	margin: 5px;
	font-size: 16px;
`;

export const CommentButton = styled.button`
	font-size: 40px;
	background: none;
	border: none;
	cursor: pointer;
`;

export const CommentWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 5px 0;
`;

export const CommentUser = styled.h4`
	font-size: 16px;
	font-weight: bold;
	padding-right: 7px;
`;
