import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import imagen from './cripto.png';


//component imports
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';


const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:1200px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
  height: 400px;
`;

const Heading = styled.h1`
  font-family: sans-sefif;
  color: #f5f5f5;
  text-align: left;
  font-weigth: bold;
  margin-bottom: 50px;
  margin-top: 50px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }

`;


const App = () =>{


  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [resultado, guardarResultado] = useState({});



  useEffect(() =>{
    const cotizaCriptomenada = async() =>{
      if(moneda === '')
      return;

      const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);
      guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);  
    }
    cotizaCriptomenada();
  },[moneda, criptomoneda]);

  return(
    <Contenedor>
        <div>
          <Imagen
            src={imagen}
            alt="imagen cripto"
          />
        </div>
        <div>
          <Heading>
            Obtain Cripto Prices
          </Heading>
          
          <Formulario
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarCriptomoneda}
          />

          <Cotizacion
            resultado={resultado}
          />
        </div> 
    </Contenedor>
  );
}




export default App;