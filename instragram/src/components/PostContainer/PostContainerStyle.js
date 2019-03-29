import styled, { css } from 'styled-components';

export const PostWrapper = styled.div`
	margin: 50px auto;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid rgb(196, 196, 196);
	border-radius: 6px;
	padding: 5px 0;
	width: 50%;
	background: white;
`;

export const PostHeader = styled.div`
	background: white;
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
`;

export const Thumbnail = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	margin: 20px;
`;

export const User = styled.h2`
	font-size: 16px;
	font-weight: bold;
`;

export const MainImgContainer = styled.div`width: 100%;`;

export const MainImg = styled.img`width: 100%;`;
