import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';


//component imports
import Error from './Error';


//using custom hooks
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';


const Boton = styled.input`
	margin-top: 20px;
	font-weigth: bold;
	font-size: 20px;
	padding: 10px;
	background-color: #66a2fe;
	border: none;
	width: 100%;
	border-radius: 10px;
	color: #f5f5f5;
	transition: background-color .3s aese;

	&:hover{
		background-color: #326ac0;
		cursor: pointer;
	}
`;


const Formulario = ({guardarMoneda, guardarCriptomoneda}) =>{


	//saving form state
	const [listacripto, guardarCriptomonedas] = useState([]);
	const [error, guardarError] = useState(false);

	const MONEDAS = [
		{codigo: 'USD', nombre: 'Dolar Estadounidense'},
		{codigo: 'EUR', nombre: 'Euro'},
		{codigo: 'GBP', nombre: 'Libra Esterlina'}
	]


	//using custom hook in form
	const [moneda, SelectMonedas] = useMoneda('Choose your coin', '', MONEDAS);


	//using custom hook 2
	const [criptomoneda, SelectCripto] = useCriptomoneda('Choose your criptocoin', '', listacripto);


	//calling the API
	useEffect(() => {
		const consultarAPI = async() =>{
			const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

			const resultado = await axios.get(url);
			guardarCriptomonedas(resultado.data.Data);
		}
		consultarAPI();
	}, []);


	//sumit form
	const cotizarMoneda = e =>{
		e.preventDefault();

		//inputs validation
		if(moneda === '' || criptomoneda === ''){
			guardarError(true);
			return;
		}

		//send data to the main component
		guardarError(false);
		guardarMoneda(moneda);
		guardarCriptomoneda(criptomoneda);
		
	}


	return(
		<form
			onSubmit={cotizarMoneda}
		>
			{error ? <Error mensaje="Campos obligatorios"/> : null}
			<SelectMonedas/>
			<SelectCripto/>

			<Boton
				type="submit"
				value="Calcular"
			/>
		</form>
	);
}


export default Formulario;