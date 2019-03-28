// import React from 'react';
import styled, { css } from 'styled-components';

export const LoginContainer = styled.div`
	background: rgb(235, 235, 235);
	display: flex;
	justify-content: center;
	height: 500px;
	width: 100%;
`;

export const LoginBox = styled.div`
	margin-top: 10%;
	background: rgba(1, 20, 61, 0.822);
	border-radius: 10px;
	border: 2px solid gray;
	box-shadow: -2px -2px 15px rgb(68, 68, 68);
	width: 550px;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	flex-wrap: wrap;
`;

export const Form = styled.form`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	flex-wrap: wrap;
	width: 50%;
	height: 50%;
`;

// export { LoginContainer, LoginBox };
// export default LoginContainer;
// export default LoginBox;
