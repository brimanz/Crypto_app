import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';


const Label = styled.label`
	font-family: sans-sefif;
	color:; #f5f5f5;
	text-transform: uppercase;
	font-weigth: bold;
	font-size: 2.4rem;
	margin-top: 2rem;
	display: block; 
`;
const Select = styled.select`
	width: 100%;
	margin: 15px 0;
	padding: 10px;
	display: block;
	-webkit-appearance: none;
	border-radius: 10px;
	border: none;
`;


const useCriptomoneda = (label, stateInicial, opciones) =>{

	//console.log(opciones);


	//hook state
	const [state, actualizarState] = useState(stateInicial);


	const SelectCripto = () =>(
		<Fragment>
			<Label htmlFor="">{label}</Label>
			<Select 
				onChange={e => actualizarState(e.target.value)}
				value={state}
			>
				<option value="">-Seleccione-</option>

				{opciones.map(opcion => (
					<option
						key={opcion.CoinInfo.Id} 
						value={opcion.CoinInfo.Name}
						>{opcion.CoinInfo.FullName}
					</option>
					))}
			</Select>

		</Fragment>
	);
	return [state, SelectCripto, actualizarState];
}


export default useCriptomoneda;