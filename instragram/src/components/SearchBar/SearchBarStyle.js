import styled, { css } from 'styled-components';

// import url('https://fonts.googleapis.com/css?family=Lobster');

export const SearchBarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	z-index: 1;
	top: 0;
	position: fixed;
	background: white;
	border-bottom: 1px solid rgba(0, 0, 0, .0975);
	height: 77px;
`;

export const Logo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const H2 = styled.h2`
	font-size: 23px;
	padding: 15px;
	color: rgb(29, 29, 29);
	font-family: 'Lobster', cursive;
`;

export const Input = styled.input`
	font-family: 'FontAwesome', 'Roboto', sans-serif;
	min-width: 125px;
	width: 215px;
	height: 24px;
	font-size: 14px;
	border-radius: 3px;
	border: 1px solid rgb(202, 202, 202);
	text-align: center;
	background: rgb(247, 247, 247);
`;

export const Button = styled.button`
	color: gray;
	background: none;
	border: none;
	cursor: pointer;
`;

export const Icons = styled.div`
	color: gray;
	display: flex;
	justify-content: space-evenly;
	width: 200px;
`;
