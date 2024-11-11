import React, { useState } from 'react';
import Calculadora from './components/Calculadora';
import CalculadoraCientifica from './components/CalculadoraCientifica';

const App = () => {
  const [isCientifica, setIsCientifica] = useState(false);

  const toggleCalculadora = () => {
    setIsCientifica(!isCientifica);
  };

  return (
    <div>
      <button onClick={toggleCalculadora}>
        {isCientifica ? 'Voltar para Calculadora Padrão' : 'Ir para Calculadora 2.0'}
      </button>
      
      {isCientifica ? <CalculadoraCientifica /> : <Calculadora />}
    </div>
  );
};

export default App;
