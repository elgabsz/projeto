import React, { useState } from 'react';
import './CalculadoraCientifica.css';

const CalculadoraCientifica = () => {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState(null);
  const [historico, setHistorico] = useState([]); // Armazena o histórico das operações
  const [mensagem, setMensagem] = useState('');

  // Função para calcular as operações científicas
  const calcular = (operacao) => {
    const n = parseFloat(numero);
    if (isNaN(n)) return;

    let res;
    switch (operacao) {
      case 'sqrt':
        res = Math.sqrt(n); // Raiz quadrada
        break;
      case 'cos':
        res = Math.cos(n); // Cosseno
        break;
      case 'sin':
        res = Math.sin(n); // Seno
        break;
      case 'pow':
        res = Math.pow(n, 2); // Potência (quadrado do número)
        break;
      default:
        return;
    }

    setResultado(res);
    setMensagem('');

    // Adiciona o resultado ao histórico
    setHistorico([...historico, { numero: n, operacao, resultado: res }]);
  };

  const enviarResultado = () => {
    if (resultado !== null) {
      setMensagem(`Enviado resultado: ${resultado}`);
    } else {
      setMensagem('Nenhuma operação realizada para enviar.');
    }
    setNumero('');
  };

  const atualizarHistorico = () => {
    setHistorico([]);
    setResultado(null);
    setMensagem('');
  };

  const removerOperacao = (index) => {
    const novoHistorico = historico.filter((_, i) => i !== index);
    setHistorico(novoHistorico);
  };

  return (
    <div className="calculadora">
      <h2>Calculadora Científica</h2>

      {/* Entrada para o número */}
      <div>
        <label>Digite um número:</label>
        <input
          type="number"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Digite o número"
        />
      </div>

      {/* Botões de operações científicas */}
      <div>
        <button onClick={() => calcular('sqrt')}>Raiz Quadrada</button>
        <button onClick={() => calcular('cos')}>Cosseno</button>
        <button onClick={() => calcular('sin')}>Seno</button>
        <button onClick={() => calcular('pow')}>Potência (x²)</button>
      </div>

      {/* Exibe o resultado */}
      {resultado !== null && (
        <div className="result">
          <h3>Resultado: {resultado}</h3>
        </div>
      )}

      {/* Mensagem de envio */}
      {mensagem && <p className="submitted-message">{mensagem}</p>}

      {/* Histórico de operações */}
      <h3>Histórico de Operações</h3>
      <table className="history-table">
        <thead>
          <tr>
            <th>Número</th>
            <th>Operação</th>
            <th>Resultado</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {historico.map((item, index) => (
            <tr key={index}>
              <td>{item.numero}</td>
              <td>{item.operacao}</td>
              <td>{item.resultado}</td>
              <td>
                <button onClick={() => removerOperacao(index)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Ações de controle */}
      <div>
        <button onClick={atualizarHistorico}>Atualizar</button>
        <button onClick={enviarResultado}>Enviar Resultado</button>
      </div>
    </div>
  );
};

export default CalculadoraCientifica;
