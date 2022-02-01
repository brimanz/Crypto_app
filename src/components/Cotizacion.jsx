import React from 'react';
import styled from '@emotion/styled';


const Contenedor = styled.div`
	font-family: sans-serif;
	max-width: 100%;
	margin: 25px 0;
	background-color: #f5f5f5;
	color: #2f2f2f;
	text-align: center;
	padding: 5px;
	border-radius: 10px;
	border: none;
  }
`;
const Sube = styled.span`
	font-weigth: bold;
	color: #52c234;
`;
const Baja = styled.span`
	font-weigth: bold;
	color: #ED213A;
`;


const Cotizacion = ({resultado}) => {
	if(Object.keys(resultado).length === 0)
		return null;

	console.log(resultado);
	return(
		<Contenedor>
			<p>
				El precio es: 
				<span>{resultado.PRICE}</span>
			</p>
			<p>
				Precio mas alto: 
				<Sube>{resultado.HIGH24HOUR}</Sube>
			</p>
			<p>
				Precio mas bajo: 
				<Baja>{resultado.LOWDAY}</Baja>
			</p>
			<p>
				Ultima actualizacion: 
				<span>{resultado.LASTUPDATE}</span>
			</p>	
		</Contenedor>
	);
}


export default Cotizacion;