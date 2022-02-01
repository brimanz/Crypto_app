import React from 'react';
import styled from '@emotion/styled';


const MensajeError = styled.p`
	background-color: #ED213A;
	padding: 1rem;
	color: #f5f5f5;
	font-size: 24px;
	font-weigth: bold;
	text-align: center;
	text-transform: uppercase;
	font-family: sans-serif;
	border-radius: 10px;
`;

const Error = ({mensaje}) =>{
	return(
		<MensajeError>{mensaje}</MensajeError>
	);
}


export default Error;