import React from 'react';
import './App.css';
import Calculadora from './components/Calculadora';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Projeto: Calculadora</h1>
        <div className="credits">
          <p>Desenvolvido por:</p>
          <ul>
            <li> Gabriel Bellumat: 23214290087 | Gustavo Lacerda: 23214290018 | Gabriel Seixas: 23214290108</li>
            <br></br>
            <li> Erick Alves: 23214290109 | Matheus Mendes: 23214290116 | Vitor Mateus: 23214290111</li>
          </ul>
        </div>
      </header>
      <main>
        <Calculadora />
      </main>
    </div>
  );
}

export default App;
