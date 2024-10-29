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
            <li> Gabriel Bellumat | 23214290087</li>
            <li> Gustavo Lacerda | 23214290018</li>
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
