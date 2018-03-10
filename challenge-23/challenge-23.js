(function(win, doc){
  'use strict';
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  const $display  = doc.querySelector('[data-js="display"]');
  const $numbers  = doc.querySelectorAll('[data-js="number"]');
  const $operator = doc.querySelectorAll('[data-js="operator"]');
  const $ce        = doc.querySelector('[data-js="ce"]');
  const $equal    = doc.querySelector('[data-js="equal"]');


  Array.prototype.forEach.call($numbers, number => {
    number.addEventListener('click', addNumber, false);
  });

  Array.prototype.forEach.call($operator, operator => {
    operator.addEventListener('click', addOperator, false);
  });

  $ce.addEventListener('click', clear, false);

  $equal.addEventListener('click', result, false);

  function addNumber() {

    $display.value += this.textContent;
  }

  function addOperator() {

    if(isLastOperator($display.value))
      $display.value = removeOperator($display.value);

    $display.value += this.textContent;
  }


  function clear() {
    $display.value = '0';
  }

  function result() {

    $display.value = verifyAndRemoveLastOperator($display.value);

    $display.value = executeExpression($display.value);
  }


  function isLastOperator (value) {
    
    let regexLastOperator = /[+x÷-]$/;
    return value.match(regexLastOperator);
  }

  function removeOperator(expression) {

    return expression.slice(0,-1);
  }

  function verifyAndRemoveLastOperator (expression) {

    if(isLastOperator(expression))
      return removeOperator(expression);
    
    return expression;
  }


  function executeExpression (expression) {
    let allOperators = expression.match(/\d+(?:[+x÷-])?/g);
    return allOperators.reduce(function(acum, current){

      let firstNum = acum.slice(0,-1);
      let operator = acum.split('').pop();
      let lastNum  = verifyAndRemoveLastOperator(current);
      let lastOperator  = isLastOperator(current) ? current.split('').pop() : '';
      
    console.log('AQUI',isLastOperator(current));
      switch(operator){
        case '+':
          return (Number(firstNum) + Number(current) ) + lastOperator; 

        case '-':
          return (Number(firstNum) - Number(current) ) + lastOperator; 

        case 'x':
          return (Number(firstNum) * Number(current) ) + lastOperator; 
        
        case '÷':
          return (Number(firstNum) / Number(current) ) + lastOperator;           
      }        
    });
  }
}(window, document));

