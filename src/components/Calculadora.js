import React, { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [mensagem, setMensagem] = useState('');

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

  return (
    <div className="calculadora">
      <h2>Calculadora / Operações</h2>
      <table className="operations-table">
        <tbody>
          <tr>
            <td>
              <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Digite o primeiro número"
              />
            </td>
            <td>
              <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Digite o segundo número"
              />
            </td>
            <td>
              <button onClick={() => calcular('+')}>Somar</button>
              <button onClick={() => calcular('-')}>Subtrair</button>
              <button onClick={() => calcular('*')}>Multiplicar</button>
              <button onClick={() => calcular('/')}>Dividir</button>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="actions-table">
        <tbody>
          <tr>
            <td>
              <button onClick={() => setResultado(null)}>Limpar</button>
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
    </div>
  );
};

export default Calculadora;
