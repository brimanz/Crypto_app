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


const useMoneda = (label, stateInicial, opciones) =>{

	//hook state
	const [state, actualizarState] = useState(stateInicial);


	const Seleccionar = () =>(
		<Fragment>
			<Label htmlFor="">{label}</Label>
			<Select 
				onChange={e => actualizarState(e.target.value)}
				value={state}
			>
				<option value="">-Seleccione-</option>

				{opciones.map(opcion => (
					<option
						key={opcion.codigo} 
						value={opcion.codigo}
						>{opcion.nombre}
					</option>
					))}
			</Select>

		</Fragment>
	);
	return [state, Seleccionar, actualizarState];
}


export default useMoneda;