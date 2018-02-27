(function(){
    /*
    Crie uma IIFE que envolva todo o c�digo desse arquivo. Fa�a tamb�m a
    indenta��o correta do c�digo, para ficar dentro da IIFE.
    */

    /*
    Analise as fun��es abaixo (`myFunction`, `myFunction2` e `myFunction3`, e
    ajuste o posicionamento das vari�veis e fun��es internas, para que os c�digos
    dentro de `console.log` que est�o retornando `undefined` retornem o valor
    correto da vari�vel ou fun��o chamada.
    */
    function myFunction() {
        var number1 = 10;
        var number2 = 20;

        console.log( 'Na função `myFunction`, o primeiro número é', number1 );
        console.log( 'Na função `myFunction`, o segundo número é', number2 );

        return number1 + number2;
    }

    console.log(myFunction());
    
    /*
        myFunction2();
    */
    function myFunction2() {
        var number1 = 10;
        var number2 = 20;

        var sum = function sum() {
            return number1 + number2;
        };

        console.log( 'A soma de 10 e 20 é igual a', sum ? sum() : undefined );

        return sum();
    }

    console.log(myFunction2());

    /*
        myFunction3();
    */
    function myFunction3() {
        var number1 = 40;
        var number2 = 50;

        console.log( 'A soma de 40 e 50 é igual a', sum() );
        console.log( 'Na função myFunction3, number1 é igual a', number1 );

        return sum();

        function sum() {
            return number1 + number2;
        };
    }

    console.log(myFunction3());

    /*
    No desafio anterior criamos uma calculadora, usando uma estrutura funcional.
    Agora vamos criar uma outra calculadora, usando uma outra abordagem :D
    - Crie uma fun��o `calculator` que recebe dois valores (n�meros)
    por par�metro.
    - Essa fun��o deve retornar uma outra fun��o, que recebe um par�metro
    chamado `callback`.
    - Esse `callback` ser� uma fun��o, que passaremos por par�metro ao invocar
    o retorno de `calculator`.
    - O retorno dessa segunda fun��o deve ser a fun��o de `callback` passada
    por par�metro, INVOCADA, e passando a ela por par�metro os dois valores
    que foram passadas para a primeira fun��o `calculator`.
    */
    
    function calculator(num1, num2) {
        return function(callback) {
            return callback(num1, num2);
        };
    }


    /*
    Declare uma vari�vel chamada `sum`, e atribua a ela a fun��o `calculator`,
    passando dois n�meros por par�metro.
    */
    
    let sum = calculator(2,3);

    /*
    Sabemos que `sum` agora tem uma fun��o atribu�da a ela, que � o retorno de
    `calculator`. E essa fun��o espera um par�metro `callback`. O `callback`
    tem dois par�metros dispon�veis, que s�o os n�meros que voc� acabou de passar
    para a chamada � `calculator` acima.
    - Mostre no console o retorno da invoca��o de `sum`, passando por par�metro
    uma fun��o an�nima que ir� retornar a soma dos dois n�meros que essa fun��o
    an�nima tem como seus argumentos.
    */
    console.log('----------------------------------------------');
    console.log( 'O resultado da soma é:' );
    
    console.log(sum(function(num1, num2){
        return num1 + num2;
    }));

    /*
    Agora declare outra vari�veis chamadas `subtraction`, `multiplication`,
    `division` e `mod`, e atribua � elas `calculator`, passando n�meros
    diferentes para cada chamada.
    */
    
    let subtraction = calculator(4,1);
    let multiplication = calculator(10, 3);
    let division = calculator(50,2);
    let mod = calculator(33, 2);

    /*
    Mostre as vari�veis acima no `console` (uma chamada de console por vari�vel),
    criando a fun��o de `callback` que faz o c�lculo para subra��o, multiplica��o,
    divis�o e m�dulo (resto de divis�o), conforme a fun��o utilizada.
    As suas respostas devem estar abaixo dos `console.log` referentes � cada
    chamada.
    */
    console.log( 'O resultado da subtração é:' );
    console.log(subtraction(function(num1, num2){
        return num1 - num2;
    }));

    console.log( 'O resultado da multiplicação é:' );
    console.log(multiplication(function(num1, num2){
        return num1 * num2;
    }));

    console.log( 'O resultado da divisão é:' );
    console.log(division(function(num1, num2){
        return num1 / num2;
    }));

    console.log( 'O resto da divisão é:' );
    console.log(mod(function(num1, num2){
        return num1 % num2;
    }));
}());