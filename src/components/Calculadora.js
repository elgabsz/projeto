import React, { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [historico, setHistorico] = useState([]); // Armazena o histórico das operações

  const calcular = (operacao) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) return;

    let res;
    if (operacao === '+') res = n1 + n2;
    if (operacao === '-') res = n1 - n2;
    if (operacao === '*') res = n1 * n2;
    if (operacao === '/' && n2 !== 0) res = n1 / n2;
    if (operacao === '/' && n2 === 0) res = 'Erro: Divisão por zero';

    setResultado(res);
    setMensagem('');

    // Adiciona o resultado atual ao histórico
    setHistorico([...historico, { num1: n1, num2: n2, operacao, resultado: res }]);
  };

  const enviarResultado = () => {
    if (resultado !== null) {
      setMensagem(`Enviado resultado: ${resultado}`);
    } else {
      setMensagem('Nenhuma operação realizada para enviar.');
    }
    setNum1('');
    setNum2('');
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
      <h2>Calculadora</h2>
      
      {/* Tabela para números e operações */}
      <table className="operations-table">
        <tbody>
          <tr>
            <td><label>Primeiro Número:</label></td>
            <td>
              <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Digite o primeiro número"
              />
            </td>
          </tr>
          <tr>
            <td><label>Segundo Número:</label></td>
            <td>
              <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Digite o segundo número"
              />
            </td>
          </tr>
          <tr>
            <td><label>Operações:</label></td>
            <td>
              <button onClick={() => calcular('+')}>Adição</button> <button onClick={() => calcular('-')}>Subtração</button> <br></br>
              <button onClick={() => calcular('*')}>Multiplicação</button>
              <button onClick={() => calcular('/')}>Divisão</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Tabela para ações */}
      <table className="actions-table">
        <tbody>
          <tr>
            <td>
              <button onClick={atualizarHistorico}>Atualizar</button>
            </td>
            <td>
              <button onClick={enviarResultado} className="submit-btn">Enviar</button>
            </td>
          </tr>
        </tbody>
      </table>

      {mensagem && <p className="submitted-message">{mensagem}</p>}
      {resultado !== null && (
        <div className="result">
          <h3>Resultado: {resultado}</h3>
        </div>
      )}

      {/* Tabela de histórico dos resultados */}
      <h3>Histórico de Operações</h3>
      <table className="history-table">
        <thead>
          <tr>
            <th>Número 1</th>
            <th>Operação</th>
            <th>Número 2</th>
            <th>Resultado</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {historico.map((item, index) => (
            <tr key={index}>
              <td>{item.num1}</td>
              <td>{item.operacao}</td>
              <td>{item.num2}</td>
              <td>{item.resultado}</td>
              <td>
                <button onClick={() => removerOperacao(index)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calculadora;
