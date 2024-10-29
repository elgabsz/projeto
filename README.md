Esta calculadora em React permite realizar operações matemáticas básicas (soma, subtração, multiplicação e divisão) entre dois números inseridos pelo usuário. Ela exibe o resultado na tela e mantém um histórico das operações realizadas, que podem ser removidas individualmente. A calculadora possui um botão "Atualizar" que limpa todas as operações e resultados, reiniciando o cálculo. Em caso de divisão por zero, o resultado é exibido por um erro. O código é estruturado com tabelas para organizar números, operações, ações e histórico, proporcionando uma interface intuitiva e interativa.
----------------------------------------------------------------------------------
Introdução
Este código cria uma calculadora em React que permite realizar operações matemáticas básicas entre dois números.

As funcionalidades incluem soma (+), subtração (-), multiplicação (x), divisão (/) e um botão Atualizar que limpa todas as operações.

As operações e resultados aparecem em uma tabela de histórico, onde cada operação pode ser removida individualmente.
----------------------------------------------------------------------------------
Estrutura e Estados do Componente
Os estados principais são:
num1 e num2: armazenam os valores dos números inseridos.

resultado: guarda o resultado da operação atual.

mensagem: exibe uma mensagem de feedback para o usuário, como o envio de um resultado.

historico: armazena as operações realizadas em uma lista (array).
----------------------------------------------------------------------------------
Função de Cálculo

Ela recebe o tipo de operação (+, -, *, /) e executa a lógica correspondente.

Em caso de divisão por zero, ela retorna um erro pois é indefinido.
----------------------------------------------------------------------------------
Gerenciamento de Resultados

Enviar Resultado: O botão "Enviar" permite que o usuário confirme o resultado atual, exibindo uma mensagem de sucesso ou um aviso caso nenhuma operação tenha sido realizada.

Atualizar Histórico: O botão "Atualizar" limpa todas as operações e resultados da calculadora.

Remover Operação: Cada operação no histórico pode ser removida individualmente, permitindo uma gestão mais flexível das operações realizadas.
----------------------------------------------------------------------------------
Interface do Usuário

Tabela de Números e Operações: onde o usuário insere os números e escolhe a operação desejada.

Tabela de Ações: que contém os botões para atualizar ou enviar resultados.

Tabela de Histórico: exibe todos os resultados das operações realizadas, permitindo a remoção de operações específicas.